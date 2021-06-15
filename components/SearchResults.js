import PaginatedButtons from './PaginatedButtons'

function SearchResults ({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mb-5 mt-3">
        Ungefähr {results.searchInformation?.formattedTotalResults} Ergebnisse  (in {results.searchInformation?.formattedSearchTime} sek.)
      </p>
      {results.items?.map((result) => (
          <div key={result.link} className="max-w-xl mb-8">
            <div className="group">
              <a href={result.formattedUrl} className="text-sml">
                {result.title}
              </a>
              <a href={result.link}>
                <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </a>
            </div>
            <p className="line-clamp-2">
              {result.snippet}
            </p>
          </div>
        )
      )}
      <PaginatedButtons />
    </div>
  )
}

export default SearchResults
