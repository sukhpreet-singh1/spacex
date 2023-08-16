import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { dataLoad } from '../store/capsulesSlice'
import Search from './Search'
import axios from 'axios'
import Card from './Card'
import Pagination from './Pagination'
import Filter from './Filter'
const Capsules = () => {
  const dispatch = useDispatch()
  let data = useSelector((state) => state.capsulesData.data)
  const isSearchEnabled = useSelector((state) => state.capsulesData.searchEnabled)
  const searchData = useSelector((state) => state.capsulesData.searchData)
  const filterData = useSelector((state) => state.capsulesData.filterData)
  const isFilterEnabled = useSelector((state) => state.capsulesData.filterEnabled)
  if (isSearchEnabled) {
    data = searchData
  }
  if (isFilterEnabled) {
    data = filterData
  }

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)
  const paginateFront = (event) => {
    setCurrentPage(currentPage + 1)
  }
  const paginateBack = () => setCurrentPage(currentPage - 1)

  useEffect(() => {
    axios.get('https://api.spacexdata.com/v3/capsules').then((response) => {
      dispatch(dataLoad(response.data))
    })
  }, [])

  return (
    <div className="flex h-screen w-full flex-col sm:flex-row">
      <div className="flex border sm:pt-8 flex-col items-center w-full sm:w-1/4">
        {isSearchEnabled ? <Filter data={searchData} /> : <Filter data={data} />}
        <div className="flex flex-row w-full justify-center px-5 items-center">
          <Search />
        </div>
      </div>
      <div className="flex h-screen sm:w-3/4 flex-col justify-between items-center ">
        <div className="mx-2 my-2 sm:pt-8 w-11/12">
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-3 grid-rows-2">
            {currentPosts.map((capsule) => (
              <Card key={capsule.capsule_serial} capsule={capsule} />
            ))}
          </ul>
        </div>
        <div>
          <Pagination
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            paginateBack={paginateBack}
            paginateFront={paginateFront}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default Capsules
