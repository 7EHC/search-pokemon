"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type SearchProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const Search = ({ searchValue, setSearchValue}: SearchProps) => {
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name");

  useEffect(() => {
    if (nameParam) {
      setSearchValue(nameParam);
    }
  }, [nameParam, setSearchValue]);

  return (
    <div className="flex justify-center md:justify-end my-5 p-2">
      <div className="relative lg:w-1/4">
      <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        <input
          type="text"
          className="w-full rounded-xl p-2 pl-10 cursor-text shadow-md hover:shadow-lg transition-all duration-300"
          value={searchValue}
          placeholder="Search Pokemon name"
          onChange={(e) => setSearchValue(e.target.value.trim())}
        />
      </div>
    </div>
  );
}

export default Search;
