'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const overviewSpecs = [
  {
    title: 'Configuration',
    desc: '2, 3 & 4 BHK Apartments',
  },
  {
    title: 'Total Land Parcel',
    desc: '52-Acre Mixed-Use Township',
  },
  {
    title: 'Apartment Size Range',
    desc: '1,255–2,610 sq.ft',
  },
  {
    title: 'Towers in Phase 1',
    desc: '8 Towers (~1,840 Homes)',
  },
]

const Overview = ({ setIsOpen }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="overview" className="w-full py-12 md:py-16 bg-white font-poppins">
      <div className="container mx-auto px-4" style={{ maxWidth: '1240px' }}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:mx-[-16px]">
          
          {/* Image Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] mb-10 lg:mb-0 flex justify-center lg:sticky lg:top-24">
            <div className="relative w-full max-w-[500px] h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
               <Image 
                 src={overviewImage} 
                 alt="About MyHome Codename Anandam" 
                 fill 
                 className="object-cover" 
                 sizes="(max-width: 1024px) 100vw, 50vw" 
               />
               <div className="absolute" style={{ right: '8px', bottom: '50%', transform: 'translateY(50%) rotate(-90deg)', transformOrigin: 'center right' }}>
                 <span className="text-[#e0e0e0] text-[10px] tracking-widest uppercase" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Artistic Impression</span>
               </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full lg:w-1/2 lg:px-[16px] lg:pl-12">
            <div>
              <span className="inline-block px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3 border border-[#AF751C] text-[#AF751C] bg-[#F0E9D8]">
                WELLNESS ARCHITECTURE
              </span>
              <h2 className="text-[#111111] text-[24px] sm:text-[28px] md:text-[32px] font-black leading-[1.15] mb-2 tracking-tight">
                Project <span className="text-[#AF751C]">Overview</span>
              </h2>
              <div className="w-16 h-1 bg-[#AF751C] mb-4 rounded-full" />

              <div className="mb-6">
                <div className={`text-[#4A5568] text-[15px] leading-[1.75] text-left ${!isExpanded ? 'line-clamp-4 overflow-hidden' : ''}`}>
                  <p className="m-0 mb-3">
                    Find your next way of life at <strong className="text-[#111111]">My Home Codename Anandam</strong>, which is an upcoming residential township located in Whitefield Annex, Bengaluru. This project is developed by <strong className="text-[#111111]">My Home Group</strong> and is expected to be completed on an approximately 52 acres mixed use development comprising modern homes and planned township infrastructure.
                  </p>
                  <p className="m-0 mb-3">
                    In its initial stage, this project will offer 8 residential buildings with about 1,840 residences. It comprises 2, 3 and 4 BHK apartments sized around 1,255 to 2,610 sq. ft. Based on different requirements of the families, these apartments will try to ensure comfort living along with easy accessibility of important employment and transport routes.
                  </p>
                  <p className="m-0 mb-3">
                    Situated close to the Whitefield-Kadugodi Corridor as well as Whitefield-Hoskote Corridor, My Home Codename Anandam will provide access to Whitefield as well as to ITPL areas where employment opportunities are high. Also, Kadugodi Metro Station is not far from this project. Plus there will be good NH 75 connectivity to other places of Bengaluru.
                  </p>
                  <p className="m-0">
                    If you are looking out for a house for your family or comparing upcoming residential properties, then you should not miss this project.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-[#111111] hover:text-[#AF751C] font-bold text-[14.5px] mt-2.5 inline-flex items-center gap-1.5 hover:underline cursor-pointer transition-colors duration-200 focus:outline-none"
                >
                  <span>{isExpanded ? 'Read Less' : 'Read More'}</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              
              {/* Exactly 4 Specs with Matching Theme Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6 border-t border-gray-100">
                {overviewSpecs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F0E9D8] border border-[#AF751C] text-[#AF751C] flex items-center justify-center text-[11px] flex-shrink-0 mt-0.5 shadow-sm font-bold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-[#111111] font-bold text-[16px] sm:text-[17px] mb-0.5 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[#6c757d] text-[13.5px] sm:text-[14px] font-medium m-0 leading-snug">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Overview
