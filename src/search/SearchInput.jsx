import { useEffect } from "react";
import React from "react";


const SearchInput = ({value, onChangeText, onFormSubmit}) => {
    useEffect(() => {
        let input = document.querySelector('input');
        input.addEventListener('input', onChangeText);
        return input.removeEventListener('input', onChangeText);
    }, []);

    
    return(
  <div className="">
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        value={value}
        onChange={onChangeText}
        placeholder="Search for a movie"
        className="rounded p-0.5 text-white pl-12 bg-light_black items-center outline-none"
      />
      <button
        type="submit"
        className="bg-slate-100 text-slate-600 px-1 rounded ml-2 font-bold"
      >
        Search
      </button>
    </form>
  </div>
    );
};

export default SearchInput;
