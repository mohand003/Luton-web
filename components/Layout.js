import Navbar from './base/Navbar'
import Footer from './base/Footer'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans antialiased relative">
      <Navbar />
      <div className="relative">
        <main className="text-neutral-800">{children}</main>

        <Footer />
      </div>
      <style jsx>{`
        .bg-blue-gradient,
        .text-gradient {
          background: linear-gradient(136.91deg, #FC5012 -12.5%, #D43E0F 107.5%);
        }
        .text-gradient {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Pattern 1 - Hero Pattern */
        .section-bg-hero {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(252, 80, 18, 0.06) 0%,
            rgba(252, 80, 18, 0.03) 50%,
            rgba(212, 62, 15, 0.06) 100%
          ) !important;
        }
        .section-bg-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(252, 80, 18, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 62, 15, 0.1) 0%, transparent 50%);
          background-size: 600px 600px;
          background-position: -100px -100px, 100% 100%;
          pointer-events: none;
          z-index: 0;
        }
        /* Pattern 2 - Light Pattern */
        .section-bg-light {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(252, 80, 18, 0.06) 0%,
            rgba(252, 80, 18, 0.03) 50%,
            rgba(212, 62, 15, 0.06) 100%
          ) !important;
        }
        .section-bg-light::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(252, 80, 18, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 62, 15, 0.1) 0%, transparent 50%);
          background-size: 600px 600px;
          background-position: -100px -100px, 100% 100%;
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-light > * {
          position: relative;
          z-index: 1;
        }
        .hero-bg-extended {
          padding-bottom: 200px !important;
          margin-bottom: -96px !important;
          position: relative;
          z-index: 1;
        }
        .section-bg-light.hero-bg-extended {
          background-size: 100% calc(100% + 200px - 96px);
          background-position: top;
        }
        .section-bg-light.hero-bg-extended::before {
          bottom: -200px;
          height: calc(100% + 200px - 96px);
        }

        /* Pattern 3 - Dark Light Pattern (غامق شوية من Light) */
        .section-bg-dark-light {
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(252, 80, 18, 0.12) 0%,
            rgba(252, 80, 18, 0.08) 50%,
            rgba(212, 62, 15, 0.12) 100%
          ) !important;
        }
        .section-bg-dark-light::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(252, 80, 18, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(212, 62, 15, 0.15) 0%, transparent 50%);
          background-size: 600px 600px;
          background-position: -100px -100px, 100% 100%;
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-dark-light::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(252, 80, 18, 0.05) 50px,
            rgba(252, 80, 18, 0.05) 100px
          );
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-dark-light > * {
          position: relative;
          z-index: 1;
        }

        /* Pattern 4 - Dark Pattern (لون غامق من الأسود/الكحلي مطعم بالبرتقالي) */
        .section-bg-dark {
          position: relative;
          background: linear-gradient(135deg, #0a0e1a 0%, #1a1a2e 50%, #16213e 100%) !important;
        }
        .section-bg-dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(252, 80, 18, 0.25) 0%, rgba(252, 80, 18, 0.15) 40%, transparent 70%),
            radial-gradient(circle at 75% 75%, rgba(212, 62, 15, 0.25) 0%, rgba(212, 62, 15, 0.15) 40%, transparent 70%),
            radial-gradient(circle at 50% 50%, rgba(252, 80, 18, 0.2) 0%, transparent 60%);
          background-size: 900px 900px, 800px 800px, 1000px 1000px;
          background-position: 0 0, 100% 100%, 50% 50%;
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-dark::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            repeating-linear-gradient(
              90deg,
              rgba(252, 80, 18, 0.08) 0px,
              rgba(252, 80, 18, 0.08) 3px,
              transparent 3px,
              transparent 6px
            ),
            repeating-linear-gradient(
              0deg,
              rgba(212, 62, 15, 0.08) 0px,
              rgba(212, 62, 15, 0.08) 3px,
              transparent 3px,
              transparent 6px
            );
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-dark > * {
          position: relative;
          z-index: 1;
        }

        /* Pattern 5 - Light Dark Pattern (فاتح شوية من Dark) */
        .section-bg-light-dark {
          position: relative;
          background: linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #2c3e50 100%) !important;
        }
        .section-bg-light-dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 30% 30%, rgba(252, 80, 18, 0.2) 0%, rgba(252, 80, 18, 0.12) 40%, transparent 65%),
            radial-gradient(circle at 70% 70%, rgba(212, 62, 15, 0.2) 0%, rgba(212, 62, 15, 0.12) 40%, transparent 65%);
          background-size: 700px 700px, 650px 650px;
          background-position: 0 0, 100% 100%;
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-light-dark::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            linear-gradient(90deg, rgba(252, 80, 18, 0.06) 1px, transparent 1px),
            linear-gradient(rgba(252, 80, 18, 0.06) 1px, transparent 1px);
          background-size: 40px 40px;
          opacity: 0.5;
          pointer-events: none;
          z-index: 0;
        }
        .section-bg-light-dark > * {
          position: relative;
          z-index: 1;
        }

        .slide-enter-active {
          -moz-transition-duration: 0.3s;
          -webkit-transition-duration: 0.3s;
          -o-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -moz-transition-timing-function: ease-in;
          -webkit-transition-timing-function: ease-in;
          -o-transition-timing-function: ease-in;
          transition-timing-function: ease-in;
        }

        .slide-leave-active {
          -moz-transition-duration: 0.3s;
          -webkit-transition-duration: 0.3s;
          -o-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
          -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
          -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
          transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
        }

        .slide-enter-to,
        .slide-leave {
          max-height: 100px;
          overflow: hidden;
        }

        .slide-enter,
        .slide-leave-to {
          overflow: hidden;
          max-height: 0;
        }
      `}</style>
    </div>
  )
}

