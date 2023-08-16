import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { disableSearch, enableSearch, searchCapsules } from '../store/capsulesSlice'
function Search() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
    // setDebouncedSearchTerm(debounce(inputValue, 500));
  }
  const handleReset = (event) => {
    dispatch(disableSearch())
  }

  const handleSubmit = (event) => {
    dispatch(searchCapsules(inputValue))
    dispatch(enableSearch())
  }

  return (
    <div className="flex w-full justify-center pt-4">
      <div className="relative w-full">
        <input
          type="text"
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border border-slate-300 outline-none focus:outline-none focus:ring w-full"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search anything..."
        />
        <div className="flex flex-row justify-center items-center my-2 w-full">
          <button
            onClick={handleSubmit}
            className="bg-darkblue text-white font-bold py-2 px-4 mx-2 rounded-full"
          >
            Search
          </button>
          <button
            onClick={handleReset}
            className="bg-darkblue text-white font-bold py-2 px-4 mx-4 rounded-full"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Search
