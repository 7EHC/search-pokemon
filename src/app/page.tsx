"use client";
import AllPokemon from "@/components/AllPokemon";
import Search from "@/components/Search";
import { useState, Suspense } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="flex flex-col w-full max-w-7xl mx-auto px-5 py-5 bg-white shadow-md min-h-screen">
      <div className="flex justify-center">
        <img src="/pokedex.png" alt="pokedex" className="md:w-60 w-50"/>
      </div>
      <div>
        <Suspense>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </Suspense>
      </div>
      <div className="mb-5">
        <AllPokemon searchValue={searchValue} />
      </div>
    </main>
  );
};

export default Home;
