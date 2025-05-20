"use client";
import AllPokemon from "@/components/AllPokemon";
import Search from "@/components/Search";
import { useState, Suspense } from "react";
import Image from "next/image";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <main className="flex flex-col w-full max-w-7xl mx-auto px-5 py-5 bg-white shadow-md min-h-screen">
      <div className="flex justify-center">
        <Image
          src="/pokedex.png"
          alt="pokedex"
          width={240}
          height={240}
        />
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
