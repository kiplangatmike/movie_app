import React, { useEffect, useState } from "react";
import { fetchSearchResults } from "./index";
import SearchInput from "./SearchInput";
import ListItem from "./ListItem";
import { debounce } from "@mui/material";

const fetchData = async (query, cb) => {
    console.warn('fetching' + query);
    const response = await fetchSearchResults(query);
    cb(response);
};

const debouncedFetchData = debounce((query, cb) => {
    fetchData(query, cb);
}, 500);

export default function SearchBox () {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const img_url = "http://image.tmdb.org/t/p/w500";

    useEffect(() => {
        debouncedFetchData(query, response => {
            setResults(response);
        });
    }, [query]);

    return (
        <div>
          <SearchInput
            value={query}
            onChangeText={e => {
              setQuery(e.target.value);
            }}
          />
          {
          results?.results?.map((result, index) => (
            <div key={index}>
              <ListItem
                title={result.title}
                imageUrl={`${img_url}${result.poster_path}`}
                caption={result.release_date}
                id={result.id}
              />
              
            </div>
          ))}
        </div>
      );
}