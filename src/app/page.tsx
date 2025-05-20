"use client";
import AllPokemon from "@/components/AllPokemon";
import Search from "@/components/Search";
import { useState, Suspense } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="flex flex-col w-full max-w-7xl mx-auto px-5 bg-white shadow-md min-h-screen">
      <div className="flex justify-center">
        <p className="flex text-3xl mt-5 font-semibold md:text-5xl">
          P<span className="flex items-end"><img src="/pokeball.svg" alt="pokeball" className="md:w-9 w-6.5"/></span>kedex
        </p>
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
