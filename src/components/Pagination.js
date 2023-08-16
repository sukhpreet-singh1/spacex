import React from 'react'
function Pagination({
  postsPerPage,
  totalPosts,
  paginateFront,
  paginateBack,
  currentPage,
}) {
  return (
    <div className="py-2">
      <div>
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">{currentPage * postsPerPage - 6}</span>
          to
          <span className="font-medium">
            {currentPage * postsPerPage < totalPosts
              ? currentPage * postsPerPage
              : totalPosts}
          </span>
          of
          <span className="font-medium"> {totalPosts} </span>
          results
        </p>
      </div>
      <nav className="block"></nav>
      <div>
        <nav
          className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <li
            onClick={() => {
              paginateBack()
            }}
            className={`relative ${
              currentPage * postsPerPage - 6 == 0 ? 'pointer-events-none' : ''
            } inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
          >
            <span>Previous</span>
          </li>

          <li
            onClick={(event) => {
              paginateFront()
            }}
            className={`relative ${
              currentPage * postsPerPage >= totalPosts ? 'pointer-events-none' : ''
            } inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
          >
            <span>Next</span>
          </li>
        </nav>
      </div>
    </div>
  )
}

export default Pagination
