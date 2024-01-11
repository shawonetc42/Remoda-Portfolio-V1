import React from 'react'
import Icon from './Icon'

function Header() {
  return (
    <div className="justify-center items-stretch bg-[#371942] flex flex-col">
    <div className="justify-center items-stretch bg-white flex w-full flex-col max-md:max-w-full">
      <div className="justify-center items-stretch bg-white flex w-full flex-col max-md:max-w-full">
        <div className="bg-zinc-800 flex w-full flex-col items-stretch pb-12 max-md:max-w-full">
          <div className="flex-col overflow-hidden relative flex min-h-[813px] w-full pl-20 pt-12 items-start max-md:max-w-full max-md:pl-5">
            
            <img
              loading="lazy"
              srcSet="/images/avater1.png"
              className="aspect-[4.17] object-contain object-center w-[146px] overflow-hidden max-w-full ml-72 mt-8 max-md:ml-2.5"
            />
            <div className="relative self-center w-full max-w-[1545px] mt-1.5 max-md:max-w-full">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[39%] max-md:w-full max-md:ml-0">
                  <div className="relative flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
                    <div className="justify-center text-white text-6xl font-bold leading-[77px] uppercase max-md:max-w-full max-md:text-4xl max-md:leading-[57px]">
                      Creative. Powerful.
                      <br />
                      Customizable.
                    </div>
                    <div className="justify-center text-indigo-50 text-xl font-medium leading-9 mt-11 max-md:max-w-full max-md:mt-10">
                      Building a website with the Trevlo HTML
                      <br />
                      Template is super fast and easy.
                    </div>
                    <div className="max-md:max-w-full max-md:pr-5">
                      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[63%] max-md:w-full max-md:ml-0">
                          <div className="bg-rose-500 hover:bg-slate-400 flex grow flex-col justify-center items-stretch w-full mt-14 rounded-md max-md:mt-10">
                            <a href='/' className="justify-center text-white hover:bg-slate-400 text-center text-base font-bold leading-4 capitalize whitespace-nowrap bg-rose-500 items-stretch px-12 py-5 rounded-[111.06px_111.06px_0px_0px] max-md:px-5">
                              Purchase Template
                            </a>
                          </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[37%] ml-5 max-md:w-full max-md:ml-0">
                          <img
                            loading="lazy"
                            srcSet="/images/facebook.png"
                            className="aspect-[2.14] object-contain object-center w-[180px] overflow-hidden shrink-0 max-w-full max-md:mt-10"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[61%] ml-5 max-md:w-full max-md:ml-0">
                  <img
                    loading="lazy"
                    srcSet="/images/11.png"
                    className="aspect-[1.47] object-contain object-center w-full shadow-2xl overflow-hidden grow max-md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Icon/>
      </div>
    </div>
  </div>
  )
}

export default Header