import React, { useEffect, useState } from "react";
import axios from "axios";

// Flowbite React Components
import { Card, Spinner } from "flowbite-react";

// React Icons
import { MdOutlineSearch } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const queryParam = searchParams.get("query");

    if (queryParam) {
      setQuery(queryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/items`, {
          params: { query: query },
        });
        setResults(response.data);
      } catch (error) {
        setError(error.message || "Error fetching data...");
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [query]);

  const handleChange = (event) => {
    event.preventDefault();
    const searchInput = event.target;
    const newValue = searchInput.value;
    setSearchParams({ query: newValue });
    setQuery(newValue);
  };

  return (
    <div className="px-6 lg:px-12 py-20">
      <h1 className="text-center text-3xl font-bold text-secondary sm:text-6xl sm:leading-relaxed">
        Search
      </h1>
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mt-8 md:max-w-3xl mx-auto mb-20">
        <button className="p-2">
          <MdOutlineSearch className="text-gray-500" />
        </button>
        <input
          type="search"
          name="query"
          id="search"
          defaultValue={query}
          onChange={handleChange}
          className="w-full py-2 px-3 text-gray-700 focus:outline-none border-none"
          placeholder="Search for a recipe..."
          required=""
        />
      </div>

      {/* Search Results */}
      {query.length == 0 ? (
        <div className="flex justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Pls enter something to search
            </h1>
            <p className="text-gray-600 mt-4">
              Use the search bar above to find your desired items.
            </p>
          </div>
        </div>
      ) : loading ? (
        <div className="text-center">
          <Spinner size="xl" />
        </div>
      ) : results.length > 0 ? (
        <ul className="grid lg:grid-cols-5 gap-8 md:grid-cols-3 sm:grid-cols-1">
          {results.map((result) => (
            <Card
              key={result._id}
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={result.thumbnail_img}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {result.name}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {result.instructions}
              </p>
            </Card>
          ))}
        </ul>
      ) : (
        <div className="mt-20 text-center">
          <h1 className="text-2xl font-bold text-secondary sm:leading-relaxed">
            Hmmm...
          </h1>
          <h2 className="text-lg">
            We couldn't find any matches for "{query}"
          </h2>
          <p className="text-base">
            Double check your search for any typos or spelling errors - or try a
            difference search term
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
