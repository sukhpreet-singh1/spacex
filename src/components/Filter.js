import React, { useState } from 'react'
import Multiselect from './Multiselect'
import { useDispatch } from 'react-redux'
import { filterCapsules } from '../store/rocketSlice'
function Filter({ data }) {
  const dispatch = useDispatch()
  var filterAttribute = {
    types: ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'],
    statuses: ['active', 'destroyed', 'unknown', 'retired'],
  }
  const [selectedType, setSelectedType] = useState([])
  const [selectedStatus, setSelectedStatus] = useState([])
  const handleFilter = () => {
    dispatch(filterCapsules(selectedType))
  }
  return (
    <div className="w-full flex flex-col  justify-center items-center">
      <div className="w-full pt-2">
        <label className="px-4 text-slate-600 sm:px-2">Select Type</label>
        <Multiselect
          selectedAttributes={filterAttribute.types}
          selectedAttribute={selectedType}
          setSelectedAttribute={setSelectedType}
        />
        <label className="px-4 text-slate-600 sm:px-2">Select Status</label>
        <Multiselect
          selectedAttributes={filterAttribute.statuses}
          selectedAttribute={selectedStatus}
          setSelectedAttribute={setSelectedStatus}
        />
      </div>

      <button
        onClick={handleFilter}
        className="flex justify-center items-center bg-darkblue text-white font-bold py-2 px-4 rounded-full"
      >
        Apply filter
      </button>
    </div>
  )
}

export default Filter
