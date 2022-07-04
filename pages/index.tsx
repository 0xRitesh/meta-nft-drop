import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>NFT Drop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-10 text-4xl font-extralight">
        <span className="font-extrabold underline decoration-pink-600/50">{`Ritesh's `}</span>
        {` NFT Market Place`}
      </h1>

     

      
    </div>
  )
}

export default Home
