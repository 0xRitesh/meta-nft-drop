import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Meta NFT Drop</title>
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


export const getServerSideProps: GetServerSideProps = async () => {
  const query = groq`*[_type == "collection"] {
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage {
      asset
    },
    previewImage {
      asset
    },
    slug {
      current
    },
    creator-> {
      _id,
      name,
      address,
      slug {
        current
      }
    }
  }`;

  const collections = await sanityClient.fetch(query);

  return {
    props: {
      collections,
    },
  };
};