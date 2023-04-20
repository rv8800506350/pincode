'use client'
// import { SearchIcon } from "@heroicons/react/24/solid";

const  PinCodeHero = ( ) => {

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Make it <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">wonderful</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
              <div className="max-w-3xl mx-auto sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div className=" w-full">
                <div className="relative mt-3 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="block w-full rounded-md border-transparent theme-shadow pr-10 text-sm pl-8 sm:text-md h-12"
                    placeholder="search"
                    // onChange={inputHandler}
                    autoComplete="off"
                  />
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                      </svg>

                  </div>
                </div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0 mt-4" href="#0">Search</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
        

        </div>

      </div>
    </section>
  )
}

export default PinCodeHero;