import { useRouter } from 'next/router'
import Link from 'next/link'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'

function PaginatedButtons () {

  const router = useRouter()
  const startIndex = Number(router.query.start) || 0

  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-10">
      {startIndex >= 10 && (
        <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
          <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline" >
            <ChevronDoubleLeftIcon className="h-5" />
            <p>Vorherige Seite</p>
          </div>
        </Link>
      )}
      <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
        <div className="flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <ChevronDoubleRightIcon className="h-5" />
          <p>Nächste Seite</p>
        </div>
      </Link>
    </div>
  )
}

export default PaginatedButtons
