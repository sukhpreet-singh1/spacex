import React from 'react'

const Button = ({ text }) => {
  return (
    <div className="flex w-3/12 sm:w-2/12 justify-center h-11 mt-5 text-white">
      <button className="w-full border-white border-2 h-11 font-Montserrat tracking-widest">
        {text}
      </button>
    </div>
  )
}

export default Button
