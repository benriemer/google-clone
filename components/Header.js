import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid'
import Avatar from './Avatar'
import HeaderOptions from './HeaderOptions'

function Header () {

  const router = useRouter()
  const searchInput = useRef(null)
  const search = (e) => {
    e.preventDefault()
    const term = searchInput.current.value
    if (!term) return
    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image onClick={() => router.push('/')} className="cursor-pointer" src="/google-search.jpg" height={60} width={60} />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-300 rounded-full shadow-lg max-w-3xl items-center">
          <input className="flex-grow w-full focus:outline-none" ref={searchInput} type="text"/>
          <XIcon onClick={() => searchInput.current.value=''} className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125" />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
          <button onClick={search} hidden type='submit'>Search</button>
        </form>
        <Avatar className="ml-auto" width="60" height="60" url="/profile-pic-placeholder.png" />
      </div>
      <HeaderOptions className="" />
    </header>
  )
}

export default Header
