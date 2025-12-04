import '../assets/css/main.css'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import AOS from 'aos'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ disable: 'phone' })
  }, [])

  return <Component {...pageProps} />
}

export default MyApp

