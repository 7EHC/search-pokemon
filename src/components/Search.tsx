"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nameParam = searchParams.get("name");

  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    if (nameParam) {
      setSearchValue(nameParam);
    }
  }, [nameParam]);

  const handleSearch = () => {
    router.push(`/pokemon/${searchValue}`);
  };

  return (
    <div className="flex justify-end my-5 p-2">
      <div className="relative w-1/4">
        <input
          type="text"
          className="w-full rounded-xl p-2 pl-10 cursor-text shadow-md hover:shadow-lg transition-all duration-300"
          value={searchValue}
          placeholder="Search Pokemon name"
          onChange={(e) => setSearchValue(e.target.value.trim())}
          onKeyUp={(e) => e.key === "Enter" && handleSearch()}
        />
        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}

export default Search;
