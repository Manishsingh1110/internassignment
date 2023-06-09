import React, { useState } from 'react'

const Navbar = () => {
    const [togglenav, settogglenav] = useState(false)
    function handleclicknav() {
        if (togglenav) {
          settogglenav(false)
        } else {
          settogglenav(true)
        }
      }

    return (
        <nav class="bg-white h-[10vh] border-gray-200 dark:bg-gray-900">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
                <a href="/" class="flex items-center">
                    <img src="./assets/mainlogo.png" class="h-20  mr-3" alt="" />
                </a>
                <button data-collapse-toggle="navbar-default" onClick={handleclicknav} type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div class={`${togglenav ? "flex" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 w-full z-50 md:w-auto md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <a href="/" class="block  font-poppins py-2 pl-3 pr-4 text-[#004749] bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Solutions</a>
                        </li>
                        <li>
                            <a href="/" class="block font-poppins py-2 pl-3 pr-4 text-[#004749] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Industries</a>
                        </li>
                        <li>
                            <a href="/" class="block font-poppins py-2 pl-3 pr-4 text-[#004749] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Resources</a>
                        </li>
                        <li>
                            <a href="/" class="block font-poppins py-2 pl-3 pr-4 text-[#004749] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Company</a>
                        </li>
                        <li>
                            <a href="/" class="block font-poppins py-2 pl-3 pr-4 text-[#004749] rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Pricing</a>
                        </li>
                        <li className='md:block hidden'>
                        <button type="button" class="text-white -top-1 relative font-poppins bg-[#ff4261] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-5 py-2 text-center mr-3 md:mr-0 ">BOOK A MEETING</button>
                        </li>
                        <li className='md:block hidden'>
                        <button type="button" class="text-[#004749] font-poppins -top-1 relative border border-[#004749] bg-white  focus:ring-4 focus:outline-1 focus:ring-[#004749] font-medium rounded-2xl text-sm px-3 py-2 text-center mr-3 md:mr-0 ">Login</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar