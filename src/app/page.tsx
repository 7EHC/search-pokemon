"use client"
import AllPokemon from "@/components/AllPokemon";
import Search from "@/components/Search";
import { useState } from "react";

export default function Home() {
  const [searchValue, setSearchValue] = useState("")

  return (
      <main className="flex flex-col w-full max-w-7xl mx-auto px-5 bg-white shadow-md min-h-screen">
        <div className="flex flex-col items-center">
          <p className="text-5xl mt-5">PokeSource</p>
        </div>
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className="mb-5">
          <AllPokemon searchValue={searchValue}/>
        </div>
      </main>
  );
}
