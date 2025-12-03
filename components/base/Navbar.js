import { useState } from 'react'
import NavLink from '../NavLink'
import Button from './Button'
import Image from 'next/image'
import { HiMenu, HiX } from 'react-icons/hi'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav 
      id="navbar" 
      className="fixed top-0 left-0 right-0 z-50 w-full text-neutral-800 section-bg-light shadow-sm"
    >
      <div className="flex flex-col max-w-[1440px] px-4 sm:px-6 lg:px-8 mx-auto lg:items-center lg:justify-between lg:flex-row py-3 lg:py-4">
        <div className="w-full flex flex-row items-center justify-between lg:w-auto">
          <div className="flex flex-row items-center space-x-6 lg:space-x-8">
            <div className="flex-shrink-0">
              <a href="#hero" className="block">
                <Image
                  src="/assets/img/logo/WhatsApp_Image_2025-12-03_at_14.32.23_1165931c-removebg-preview.png"
                  alt="Luton IT Services Logo"
                  width={140}
                  height={38}
                  className="h-8 sm:h-9 lg:h-10 xl:h-12 w-auto"
                />
              </a>
            </div>
            <ul className="hidden lg:flex flex-row items-center space-x-4 xl:space-x-6">
              <NavLink name="Services" url="#services" onClick={() => setOpen(false)} />
              <NavLink name="FAQ" url="#faq" onClick={() => setOpen(false)} />
            </ul>
          </div>
          <button
            className="lg:hidden rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {!open ? <HiMenu size={28} className="text-neutral-800" /> : <HiX size={28} className="text-neutral-800" />}
          </button>
        </div>
        
        <div className={`${
          open ? 'flex' : 'hidden lg:flex'
        } flex-col lg:flex-row lg:items-center w-full lg:w-auto mt-4 lg:mt-0`}>
          <ul className="flex lg:hidden flex-col space-y-2 mb-4 lg:mb-0">
            <NavLink name="Services" url="#services" onClick={() => setOpen(false)} />
            <NavLink name="FAQ" url="#faq" onClick={() => setOpen(false)} />
          </ul>
          <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
            <Button 
              className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base bg-inherit text-gradient border border-primary hover:bg-primary/5 cursor-pointer"
              onClick={() => {
                setOpen(false)
                window.location.href = '#how-we-work'
              }}
            >
              <span className="hidden sm:inline">See How It Works</span>
              <span className="sm:hidden">How It Works</span>
            </Button>
            <Button 
              className="w-full sm:w-auto px-4 sm:px-6 lg:px-8 py-2.5 lg:py-3 text-sm lg:text-base bg-gradient-to-r from-primary to-primary-dark text-white hover:shadow-lg cursor-pointer"
              onClick={() => {
                setOpen(false)
                window.location.href = '#contact'
              }}
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

