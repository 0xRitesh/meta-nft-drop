import React from 'react'

function NFTDropPage() {
  return (
    <div className='flex h-screen flex-col lg:grid-flow-row '> 
      {/* Left */}
      <div className='bg-gradient-to-br from-cyan-800 to rose-500 lg:col-span-4'>
        <div className='flex flex-col items-center justify-centre py-2 lg:min-h-screen'>
          <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2'>
            <img
            className='w-44 rounded-xl object-cover lg:h-96 lg:w-72'
            src="https://user-images.githubusercontent.com/56651899/177566160-4d37642b-1b5c-4ff1-b887-9c496066e539.png"
            alt="logo"
            />
          </div>
          <div>
            <h1 className='text-4xl font-bold text-white'>Ritesh's Apes</h1>
            <h2 className='text -xl text-gray-300'>A collection of Apes who Live & breath React!</h2>
          </div>
        </div>
      </div>


      {/* Right */}
    
    </div>
  )
}

export default NFTDropPage