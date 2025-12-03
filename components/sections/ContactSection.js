import { useState } from 'react'
import Section from '../base/Section'
import Button from '../base/Button'
import { IoLocationOutline, IoCallOutline, IoMailOutline } from 'react-icons/io5'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    companyPosition: '',
    briefDescription: '',
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value } = e.target
    let processedValue = value

    // Validate telephone - only allow numbers
    if (name === 'telephone') {
      processedValue = value.replace(/[^0-9]/g, '')
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.title) {
      newErrors.title = 'Title is required'
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Telephone number is required'
    } else if (formData.telephone.length < 8) {
      newErrors.telephone = 'Telephone number must be at least 8 digits'
    }

    if (!formData.companyPosition.trim()) {
      newErrors.companyPosition = 'Company Position / Profession is required'
    }

    if (!formData.briefDescription.trim()) {
      newErrors.briefDescription = 'Brief Description of Requirements is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    // يمكن إضافة منطق إرسال النموذج هنا
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
    
    // إعادة تعيين النموذج
    setFormData({
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      telephone: '',
      companyPosition: '',
      briefDescription: '',
    })
    setErrors({})
  }

  return (
    <>
      <section id="contact" className="w-full py-16 section-bg-light">
        <Section>
          <div className="col-span-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 px-4">
              {/* Left Side - Contact Info */}
              <div data-aos="fade-right" className="space-y-8">
                <div>
                  <span className="badge-orange text-white inline-block px-4 py-2 text-base sm:text-lg font-semibold uppercase tracking-wider rounded-md" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, backgroundColor: '#FC5012', color: '#FFFFFF' }}>Support</span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-neutral-800 mt-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '36px', fontWeight: 600, lineHeight: '40px', letterSpacing: '-0.02em' }}>Connect With <span style={{ color: '#FC5012' }}>Us</span></h2>
                </div>
                <p className="text-lg sm:text-xl text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}>
                  Ready to improve your operations? Let's start with one short conversation. If there's a fit, we'll show you a simple, low-cost plan.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <IoLocationOutline size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-neutral-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '28px' }}>Find us</h4>
                      <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}>6 Swan Street, Manchester, M4 5JN, UK</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <IoCallOutline size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-neutral-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '28px' }}>Call us</h4>
                      <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}>
                        <a href="tel:+441618346577" className="text-blue-600 hover:text-blue-800">
                          0044 161 834 6577
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <IoMailOutline size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold text-neutral-800 mb-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '18px', fontWeight: 600, lineHeight: '28px' }}>Mail us</h4>
                      <p className="text-base sm:text-lg text-gray-600" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 400, lineHeight: '26px' }}>
                        <a href="mailto:enquiries@luton-eng.com" className="text-blue-600 hover:text-blue-800">
                          enquiries@luton-eng.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Side - Contact Form */}
              <div data-aos="fade-left" className="bg-gray-50 rounded-2xl p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Row 1: Title, First Name, Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <select
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white ${
                          errors.title ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Select Title</option>
                        <option value="DR">DR</option>
                        <option value="MR">MR</option>
                        <option value="MISS">MISS</option>
                        <option value="MRS">MRS</option>
                        <option value="MS">MS</option>
                      </select>
                      {errors.title && (
                        <p className="mt-1 text-sm text-red-600">{errors.title}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
                          errors.firstName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="First Name"
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
                          errors.lastName ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Last Name"
                      />
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email, Telephone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telephone Number
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleInputChange}
                        required
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
                          errors.telephone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="1234567890"
                      />
                      {errors.telephone && (
                        <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>
                      )}
                    </div>
                  </div>
                  
                  {/* Row 3: Company Position / Profession */}
                  <div>
                    <label htmlFor="companyPosition" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Position / Profession
                    </label>
                    <input
                      type="text"
                      id="companyPosition"
                      name="companyPosition"
                      value={formData.companyPosition}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white ${
                        errors.companyPosition ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="e.g., Manager, Engineer, etc."
                    />
                    {errors.companyPosition && (
                      <p className="mt-1 text-sm text-red-600">{errors.companyPosition}</p>
                    )}
                  </div>
                  
                  {/* Row 4: Brief Description of Requirements */}
                  <div>
                    <label htmlFor="briefDescription" className="block text-sm font-medium text-gray-700 mb-2">
                      Brief Description of Requirements
                    </label>
                    <textarea
                      id="briefDescription"
                      name="briefDescription"
                      value={formData.briefDescription}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white ${
                        errors.briefDescription ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Please describe your requirements..."
                    />
                    {errors.briefDescription && (
                      <p className="mt-1 text-sm text-red-600">{errors.briefDescription}</p>
                    )}
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg"
                  >
                    Send message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </Section>
      </section>
      <style jsx>{`
        select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </>
  )
}

