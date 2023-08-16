import React, { useState } from 'react'

const Navbar = () => {
  const links = [
    {
      key: 1,
      name: 'Home',
    },
    {
      key: 2,
      name: 'All Projects',
    },
    {
      key: 3,
      name: 'About Us',
    },
  ]
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav
      data-testid="navbar"
      className="flex items-center h-24 bg-transparent absolute w-screen justify-between flex-wrap p-6"
    >
      <div className="w-6/12"></div>
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-white"
        >
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-6/12 block flex-grow flex-nowrap lg:flex lg:items-center list-none text-white text-lg tracking-widest font-Montserrat font-bold w-6/12 justify-end ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        {links.map((item) => (
          <li className="px-10 whitespace-nowrap" key={item.key}>
            {item.name}
          </li>
        ))}
        <button className="bg-white text-black text-sm tracking-widest font-Montserrat font-bold w-36 rounded sm:justify-center">
          Login
        </button>
      </div>
    </nav>
  )
}

export default Navbar
