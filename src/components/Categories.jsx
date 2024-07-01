import React from 'react'
import Image from 'next/image'
const Categories = () => {
  return (
	// <div className='bg-black text-white'>
	// 	<div>
	// 		<span>Categories</span>
	// 		<h1>Enhance Your Music Experience</h1>
	// 		<button>Buy Now!</button>
	// 	</div>
	// 	<div>

	// 	</div>
	// </div>
	<div className="flex items-center justify-center bg-black rounded-lg">
      <div className="flex flex-col md:flex-row items-center bg-black rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 text-center md:text-left">
          <p className="text-green-500 font-semibold">Categories</p>
          <h1 className="text-4xl md:text-6xl font-bold text-white my-2">
            Enhance Your Music Experience
          </h1>
          <button className="mt-4 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-400">
            Buy Now!
          </button>
        </div>
        <div className="md:w-1/3">
          <Image src="/images/boom-box.png" alt="Music Experience" width={100} height={50} layout="responsive" />
        </div>
      </div>
    </div>
  )
}

export default Categories