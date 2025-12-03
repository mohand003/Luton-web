import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="section-bg-light border-t border-gray-200 relative">
      <div className="max-w-[1440px] px-8 mx-auto">
        {/* Top Section - Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 py-8">
          {/* Logo - First Column */}
          <div className="md:col-span-1">
            <Link href="#hero" className="block mb-4">
              <Image
                src="/assets/img/logo/WhatsApp_Image_2025-12-03_at_14.32.23_1165931c-removebg-preview.png"
                alt="Luton IT Services Logo"
                width={180}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* COMPANY Column */}
          <div>
            <h5 className="text-sm font-semibold text-neutral-800 mb-3">COMPANY</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#case-study" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Why Choose Us
                </Link>
              </li>
            </ul>
          </div>

          {/* RESOURCES Column */}
          <div>
            <h5 className="text-sm font-semibold text-neutral-800 mb-3">RESOURCES</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#how-we-work" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  How We Work
                </Link>
              </li>
              <li>
                <Link href="#case-study" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Case Study
                </Link>
              </li>
              <li>
                <Link href="#problems" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Problems We Solve
                </Link>
              </li>
            </ul>
          </div>

          {/* HELP Column */}
          <div>
            <h5 className="text-sm font-semibold text-neutral-800 mb-3">HELP</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT Column */}
          <div>
            <h5 className="text-sm font-semibold text-neutral-800 mb-3">CONTACT</h5>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:+441618346577" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  +44 161 834 6577
                </a>
              </li>
              <li>
                <a 
                  href="mailto:enquiries@luton-eng.com" 
                  className="text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  enquiries@luton-eng.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - Copyright */}
        <div className="border-t border-gray-200 py-6">
          <div className="text-center text-xs text-gray-600">
            <p>
              © 2025 Luton IT Services™. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

