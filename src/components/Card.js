import React from 'react'

function Card(props) {
  return (
    <li className="block max-w-sm p-6 bg-darkblue rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700  dark:hover:bg-gray-700">
      <div class="mb-4">
        <div className="flex flex-row justify-between">
          <p class="text-white text-lg ">{props.capsule.capsule_serial}</p>
          <p class="text-white">{props.capsule.type}</p>
        </div>
      </div>
      <div>
        <h3 class="text-lg text-white font-semibold">Details</h3>
        <p class="text-white">{props.capsule.details}</p>
      </div>
    </li>
  )
}

export default Card
