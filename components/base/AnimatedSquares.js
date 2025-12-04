import { useEffect, useRef } from 'react'

export default function AnimatedSquares({ containerRef }) {
  const squaresRef = useRef([])

  useEffect(() => {
    const container = containerRef?.current
    if (!container) return

    const numSquares = 8
    const squareSize = 40
    let containerWidth = container.offsetWidth || 500
    let containerHeight = container.offsetHeight || 500

    // Initialize squares array
    const squares = Array.from({ length: numSquares }).map(() => ({
      x: Math.random() * (containerWidth - squareSize),
      y: Math.random() * (containerHeight - squareSize),
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 3
    }))

    squaresRef.current = squares

    // Update container size on resize
    const updateSize = () => {
      containerWidth = container.offsetWidth || 500
      containerHeight = container.offsetHeight || 500
    }

    window.addEventListener('resize', updateSize)

    let animationId
    const animate = () => {
      squares.forEach((square, i) => {
        // Update position
        square.x += square.vx
        square.y += square.vy
        square.rotation += square.rotationSpeed

        // Bounce off walls
        if (square.x <= 0 || square.x >= containerWidth - squareSize) {
          square.vx *= -0.9
          square.x = Math.max(0, Math.min(containerWidth - squareSize, square.x))
        }
        if (square.y <= 0 || square.y >= containerHeight - squareSize) {
          square.vy *= -0.9
          square.y = Math.max(0, Math.min(containerHeight - squareSize, square.y))
        }

        // Collision detection with other squares
        squares.forEach((otherSquare, j) => {
          if (i < j) {
            const dx = square.x + squareSize/2 - (otherSquare.x + squareSize/2)
            const dy = square.y + squareSize/2 - (otherSquare.y + squareSize/2)
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < squareSize && distance > 0) {
              // Collision detected - simple bounce
              const angle = Math.atan2(dy, dx)
              const sin = Math.sin(angle)
              const cos = Math.cos(angle)

              // Rotate velocities
              const vx1 = square.vx * cos + square.vy * sin
              const vy1 = square.vy * cos - square.vx * sin
              const vx2 = otherSquare.vx * cos + otherSquare.vy * sin
              const vy2 = otherSquare.vy * cos - otherSquare.vx * sin

              // Swap velocities (elastic collision)
              const tempVx = vx1
              const tempVy = vy1
              square.vx = vx2 * cos - vy2 * sin
              square.vy = vy2 * cos + vx2 * sin
              otherSquare.vx = tempVx * cos - tempVy * sin
              otherSquare.vy = tempVy * cos + tempVx * sin

              // Separate squares to prevent overlap
              const overlap = squareSize - distance
              const separationX = (dx / distance) * overlap * 0.5
              const separationY = (dy / distance) * overlap * 0.5
              square.x += separationX
              square.y += separationY
              otherSquare.x -= separationX
              otherSquare.y -= separationY
            }
          }
        })

        // Update DOM
        const squareElement = container.querySelector(`[data-square-index="${i}"]`)
        if (squareElement) {
          squareElement.style.transform = `translate(${square.x}px, ${square.y}px) rotate(${square.rotation}deg)`
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', updateSize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [containerRef])

  return (
    <div className="absolute inset-0 z-[5] pointer-events-none overflow-visible">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          data-square-index={i}
          className="absolute w-10 h-10 bg-primary/30 rounded-lg shadow-md"
          style={{
            transform: 'translate(0px, 0px) rotate(0deg)',
            transition: 'none'
          }}
        />
      ))}
    </div>
  )
}

