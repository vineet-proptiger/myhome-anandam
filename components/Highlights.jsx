'use client'
import React from 'react'

const highlights = [
  {
    title: '52-Acre Mixed-Use Township',
    description: 'A large-scale development planned to combine residential living with a broader township environment.',
    icon: 'fa-solid fa-tree'
  },
  {
    title: '8 Residential Towers in Phase',
    description: 'The first phase is planned with eight residential towers and approximately 1,840 homes.',
    icon: 'fa-solid fa-building'
  },
  {
    title: '2, 3 & 4 BHK Apartments',
    description: 'Multiple apartment configurations designed to suit different household sizes and lifestyle needs.',
    icon: 'fa-solid fa-house-chimney'
  },
  {
    title: 'Spacious Apartment Sizes',
    description: 'Indicative apartment sizes range from approximately 1,255 to 2,610 sq. ft.',
    icon: 'fa-solid fa-vector-square'
  },
  {
    title: 'Renowned Developer',
    description: 'Developed by My Home Group, a name synonymous with trust and quality.',
    icon: 'fa-solid fa-handshake'
  },
  {
    title: 'High Growth Potential',
    description: 'Located in a rapidly developing area with excellent investment prospects.',
    icon: 'fa-solid fa-chart-line'
  },
]

const Highlights = ({ setIsOpen }) => {
  return (
    <section id="highlights" className="w-full py-10 md:py-14 font-poppins" style={{ background: '#F0E9D8' }}>
      <div className="container mx-auto px-4" style={{ maxWidth: '1280px' }}>

        {/* Header */}
        <div className="text-center max-w-5xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-[#F0E9D8]">
            PROJECT HIGHLIGHTS
          </span>
          <h2 className="text-[#111111] text-[22px] sm:text-[26px] md:text-[30px] font-extrabold m-0 leading-tight">
            What Makes MyHome Codename Anandam <span className="text-[#AF751C]">Stand Apart</span>
          </h2>
          <div className="w-16 h-1 bg-[#AF751C] mx-auto mt-3 rounded-full" />
        </div>

        {/* 6 Cards: 3 per row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {highlights.map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i * 50).toString()}
              className="group relative bg-white rounded-[20px] p-7 border border-[#AF751C]/35 hover:border-[#AF751C] shadow-[0_6px_25px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(175,117,28,0.12)] transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Top Row: Icon & Title Side-by-Side */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-[52px] h-[52px] min-w-[52px] min-h-[52px] rounded-full border-2 border-[#AF751C] bg-[#F0E9D8]/50 text-[#AF751C] flex items-center justify-center text-[20px] transition-all duration-300 shadow-xs flex-shrink-0 group-hover:scale-105 group-hover:bg-[#AF751C] group-hover:text-white">
                    <i className={item.icon}></i>
                  </div>
                  <h4 className="text-[#111111] font-bold text-[17px] sm:text-[18px] leading-snug group-hover:text-[#AF751C] transition-colors duration-200 m-0">
                    {item.title}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-[#4A5568] text-[14.5px] font-medium leading-[1.65] m-0">
                  {item.description}
                </p>
              </div>

              {/* Subtle bottom accent line that expands on hover */}
              <div className="w-12 h-[3px] bg-[#AF751C]/25 group-hover:bg-[#AF751C] group-hover:w-full rounded-full mt-6 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center mt-10" data-aos="fade-up">
          <button
            onClick={() => setIsOpen && setIsOpen(true)}
            className="px-8 py-3 rounded-md font-bold text-white uppercase text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            style={{ background: '#AF751C' }}
            onMouseEnter={e => e.currentTarget.style.background = '#915E12'}
            onMouseLeave={e => e.currentTarget.style.background = '#AF751C'}
          >
            ENQUIRE NOW
          </button>
        </div>

      </div>
    </section>
  )
}

export default Highlights
