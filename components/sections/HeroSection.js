import Section from '../base/Section'
import Button from '../base/Button'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export default function HeroSection({ onBookCall, onSeeHowItWorks }) {
  const containerRef = useRef(null)
  const squaresRef = useRef([])

  // Images array - 5 images rotating in circle
  const images = [
    '/assets/img/transmission-lines-feature-1920w.jpg',
    '/assets/img/parallax+1-1920w.JPG',
    '/assets/img/slide03-2304w.JPG',
    '/assets/img/slide05-2304w.jpg',
    '/assets/img/slide06-2304w.jpg'
  ]

  useEffect(() => {
    // Animated squares collision system
    const container = containerRef.current
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
  }, [])

  return (
    <section id="hero" className="w-full py-16 section-bg-light hero-bg-extended">
      <Section>
        <div className="col-span-12 lg:col-span-6 space-y-4 sm:space-y-6 px-6 text-center sm:text-left">
          <p
            data-aos="fade-right"
            data-aos-once="true"
            className="sm:pr-8 xl:pr-10 hero-orange-text"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '24px',
              textTransform: 'uppercase',
              color: '#FC5012'
            }}
          >
            Built For Growth
          </p>
          <h1
            data-aos="fade-right"
            data-aos-once="true"
            className="sm:pr-8 xl:pr-10"
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '48px',
              fontWeight: 700,
              lineHeight: '48px'
            }}
          >
            UK Expertise, <span style={{ color: '#FC5012' }}>Delivered for</span> Businesses in Ghana
          </h1>
          <p 
            data-aos="fade-down" 
            data-aos-once="true" 
            data-aos-delay="300" 
            style={{ 
              fontFamily: 'Poppins, sans-serif',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '26px'
            }}
          >
            Built and proven inside Luton Engineering, our systems help businesses cut costs and improve operations with simple, reliable digital tools.
          </p>
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-delay="700"
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-2"
          >
            <Button 
              onClick={onBookCall}
              className="max-w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white cursor-pointer"
            >
              Book a Free Call
            </Button>
            <Button 
              onClick={onSeeHowItWorks}
              className="max-w-full px-6 py-4 bg-inherit text-gradient border border-primary flex items-center justify-center cursor-pointer"
            >
              See How Our System Works
            </Button>
          </div>
          <p data-aos="fade-up" data-aos-once="true" data-aos-delay="900" className="text-sm sm:text-base text-accent mt-4" style={{ fontWeight: 400 }}>
            No pressure. We listen first, then show you the right solution.
          </p>
        </div>
        <div className="hidden sm:block col-span-12 lg:col-span-6">
          <div className="relative w-full flex items-center justify-center" data-aos="fade-left" data-aos-once="true" data-aos-delay="300">
            <div ref={containerRef} className="relative w-full max-w-lg h-[500px] flex items-center justify-center overflow-hidden">
              {/* Animated squares behind images */}
              <div className="absolute inset-0 z-0">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    data-square-index={i}
                    className="absolute w-10 h-10 bg-primary/20 rounded-lg"
                    style={{
                      transform: 'translate(0px, 0px) rotate(0deg)',
                      transition: 'none'
                    }}
                  />
                ))}
              </div>

              {/* Circular rotating images */}
              <div className="relative z-10 w-80 h-80 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {images.map((src, index) => {
                    const initialAngle = (index * 360) / images.length
                    const radius = 160

                    return (
                      <div
                        key={index}
                        className="absolute"
                        style={{
                          left: '50%',
                          top: '50%',
                          marginLeft: '-90px',
                          marginTop: '-60px',
                          transform: `rotate(${initialAngle}deg) translateY(-${radius}px)`,
                          transformOrigin: 'center center',
                          animation: `rotate-image-around-center 30s linear infinite`,
                          animationFillMode: 'forwards',
                          '--start-angle': `${initialAngle}deg`
                        }}
                      >
                        <div 
                          className="rounded-lg overflow-hidden shadow-lg" 
                          style={{
                            width: '180px',
                            height: '120px',
                            animation: `counter-rotate-image 30s linear infinite`,
                            '--start-counter-angle': `-${initialAngle}deg`
                          }}
                        >
                          <Image
                            src={src}
                            alt={`Hero image ${index + 1}`}
                            width={180}
                            height={120}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </section>
  )
}

