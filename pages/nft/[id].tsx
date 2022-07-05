import React from 'react'

function NFTDropPage() {
  return (
    <div className='flex h-screen flex-col'> 

      {/* Left */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600">
            <img
              className="w-44 rounded-xl object-cover lg:h-96 lg:w-72 p-2"
              src={urlFor(collection.previewImage).url()}
              alt="logo"
            />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              {collection.nftCollectionName}
            </h1>
            <h2 className="text-xl text-gray-300">{collection.description}</h2>
          </div>
        </div>
      </div>

       {/* Right */}
       <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justify-between">
          <Link href="/" passHref>
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              <span className="font-extrabold underline decoration-pink-600/50">{`Tushar's `}</span>
              {` NFT Market Place`}
            </h1>
          </Link>

          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-white font-bold text-xs lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-2 border" />

        {address && (
          <p className="text-center text-sm text-rose-400">
            {`You're logged in with wallet ${address.substring(
              0,
              5
            )}...${address.substring(address.length - 5)}`}
          </p>
        )}

    </div>

  )
}

export default NFTDropPage