import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon, SearchIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'


export default function Home() {

  const router = useRouter()
  const searchInput = useRef(null)

  const search = (e) => {
    e.preventDefault()
    const term = searchInput.current.value
    if(!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>OwnSearch Machine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar width="60" height="60" url="/profile-pic-placeholder.png" />
        </div>
      </header>
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image src="/proxy-image.jpeg" height={400} width={600} />
        <div className="border border-gray-300 rounded-full flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg sm:max-w-xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input ref={searchInput} type="text" className="flex-grow focus:outline-none"/>
          <MicrophoneIcon className="h-5" />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">Google Search</button>
          <button onClick={search} className="btn">Auf gut Glück</button>
        </div>
      </form>
      <Footer />
    </div>
  )
}
