import React from 'react'

function Footer() {
  return (
    <div className="bg-zinc-800 flex flex-col items-stretch pt-12">
    <div className="justify-center text-white text-center text-5xl font-bold leading-[54px] uppercase self-center mt-16 max-md:max-w-full max-md:text-4xl max-md:mt-10">
      Create Stunning Website Now!
    </div>
    <div className="justify-center text-indigo-50 text-center text-2xl font-medium leading-[48.75px] self-center whitespace-nowrap mt-8">
      Purchase Trevlo HTML Template
    </div>
    <div className="flex-col overflow-hidden relative flex min-h-[276px] w-full items-center mt-5 pt-6 px-16 max-md:max-w-full max-md:px-5">
      
      <div className="relative flex w-[1170px] max-w-full flex-col items-center">
        <div className="bg-rose-500 flex w-[238px] max-w-full hover:bg-slate-500 flex-col justify-center items-stretch rounded-md">
          <a href='/' className="justify-center text-white text-center text-base font-bold leading-4 capitalize whitespace-nowrap hover:bg-slate-500 bg-rose-500 items-stretch px-12 py-6 rounded-[111.06px_111.06px_0px_0px] max-md:px-5">
            Purchase Template
          </a>
        </div>
        <div className="justify-center text-white text-center text-base font-medium leading-8 whitespace-nowrap items-center self-stretch mt-24 px-16 py-10 border-t-zinc-700 border-t border-solid max-md:max-w-full max-md:mt-10 max-md:px-5">
          © Copyright 2024 by Trevlo HTML Template
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer