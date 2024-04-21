import React from "react";
import search_icon from "../../assets/icons/search.svg";

type searchType = {
  placeholder?: string;
  style?: object;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchValue: string;
};

const SearchComponent = ({
  handleChange,
  searchValue,
  placeholder,
  style,
}: searchType) => {
  return (
    <>
      <div className="relative">
        <input
          type="text"
          onChange={handleChange}
          value={searchValue}
          className="appearance-none w-full placeholder:text-secondary2 
                placeholder:text-sm text-secondary text-base focus:border-primary
                focus:outline-none focus:shadow-input rounded-lg border border-secondary2 bg-white py-3 px-10"
          placeholder={placeholder}
          style={style}
        />
        <img
          src={search_icon}
          alt="search"
          className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer"
        />
      </div>
    </>
  );
};

export default SearchComponent;
