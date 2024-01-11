import React from 'react'

function Features() {
  return (
    <div className="justify-center items-center bg-orange-50 flex flex-col px-16 py-12 max-md:px-5">
    <div className="flex w-[1106px] max-w-full flex-col items-stretch mt-16 mb-12 max-md:my-10">
      <div className="justify-center text-black text-5xl font-bold leading-[60px] uppercase max-md:max-w-full max-md:text-4xl">
        Amazing Features
      </div>
      <div className="flex items-start justify-between gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <div className="self-stretch flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 mt-5">
            Shop
            <br />
            Support
          </div>
        </div>
        <div className="self-stretch flex grow basis-[0%] flex-col items-center">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 mt-6">
            RTL + LTR
            <br />
            Support
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 mt-5">
            CSS3
            <br />
            Animation
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 mt-6">
            Bootstrap
            <br />5
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 whitespace-nowrap mt-5">
            Mailchimp
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 mt-5">
            Color
            <br />
            Schemes
          </div>
        </div>
        <div className="flex grow basis-[0%] flex-col items-center self-start">
          <img
            loading="lazy"
            srcSet="..."
            className="aspect-[0.97] object-contain object-center w-[131px] justify-center items-center overflow-hidden"
          />
          <div className="justify-center text-black text-center text-base font-bold leading-5 mt-5">
            Color
            <br />
            Schemes
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Features