import React from 'react'
import { useAddress, useDisconnect, useMetamask } from "@thirdweb-dev/react";

function NFTDropPage() {

  // Auth
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const disconnect = useDisconnect();
  //--

  return (
    <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'> 
      {/* Left */}
      <div className='lg:col-span-4 bg-gradient-to-br from-cyan-800 to rose-500 '>
        <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
          <div className='rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600'>
            <img
            className='w-44 rounded-xl object-cover lg:h-96 lg:w-72 p-2'
            src="https://user-images.githubusercontent.com/56651899/177566160-4d37642b-1b5c-4ff1-b887-9c496066e539.png"
            alt="logo"
            />
          </div>
          <div>
            <h1 className='text-4xl font-bold text-white'>
              ritesh's Apes</h1>
            <h2 className='text-xl text-gray-300'>A collection of Apes who Live & breath React!</h2>
          </div>
        </div>
      </div>


      {/* Right */}
      <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
        {/* Header */}
        <header className='flex items-center justify-between'>
          <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'> 
            The{''}
            <span className='font-extrabold underline decoration-pink-600/50'>
            ritesh
            </span>
            NFT Market Place
          </h1>

          <button 
            onClick={() => (address ? disconnect() : connectWithMetamask())} 
            className='rounded-full bg-rose-400 px-4 py-2 text-white font-bold text-xs lg:px-5 lg:py-3 lg:text-base'>
              {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        {address && (
          <p className="text-center text-sm text-rose-400">
            {`You're logged in with wallet ${address.substring(
              0,
              5
            )}...${address.substring(address.length - 5)}`}
          </p>
        )}

        <hr className='my-2 border' />
        {/* Content */}
        <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
          <img className='w-80 object-cover pb-10 lg:h-40'
          src='https://user-images.githubusercontent.com/56651899/177612723-bf4cdc76-047a-409e-afdf-f85fd275e9de.jpg' 
          alt='apes'/>
          <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>Exclusive Club Giveaway | NFT drop</h1>
          <p className='pt-2 text-xl text-green-500'>1/21 NFT's Claimed</p>
        </div>

        {/* Mint Button */}
        <button className='h-16 w-full rounded-full bg-red-600 text-white disabled:bg-gray-400 font-bold'>Mint NFT(0.001 ETH)</button>
      </div>
    </div>
  )
}

export default NFTDropPage