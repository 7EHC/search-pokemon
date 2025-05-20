"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { useRouter } from "next/navigation";
import { Pokemon } from "../types/pokemon";
import NotFound from "./NotFound";
import Loading from "./Loading";
import Image from "next/image";

type SearchProps = {
  searchValue: string;
};

const AllPokemon = ({ searchValue }: SearchProps) => {
  const router = useRouter();
  const typeColors: Record<string, string> = {
    Grass: "bg-green-200 text-green-900",
    Poison: "bg-purple-200 text-purple-900",
    Fire: "bg-red-200 text-red-900",
    Water: "bg-blue-200 text-blue-900",
    Electric: "bg-yellow-200 text-yellow-900",
    Psychic: "bg-pink-200 text-pink-900",
    Ice: "bg-cyan-200 text-cyan-900",
    Fairy: "bg-pink-100 text-pink-800",
    Dragon: "bg-red-500 text-yellow-200",
    Flying: "bg-blue-400 text-blue-100",
    Bug: "bg-lime-200 text-lime-900",
    Ground: "bg-amber-300 text-amber-900",
    Fighting: "bg-orange-200 text-orange-600",
    Rock: "bg-neutral-500 text-neutral-100",
    Steel: "bg-slate-500 text-slate-100",
    Ghost: "bg-black text-white",
  };

  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { first: 200 },
  });

  const filteredPokemons = data?.pokemons.filter((pokemon: Pokemon) =>
    pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

  if (loading) return <Loading />
  if (error) return <p>Error: {error.message}</p>;
  if (!filteredPokemons || filteredPokemons.length === 0) return <NotFound />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filteredPokemons.map((pokemon: Pokemon) => (
        <div
          key={pokemon.id}
          onClick={() => handleClick(pokemon.name)}
          className="p-4 rounded-xl shadow cursor-pointer active:scale-95 bg-white hover:shadow-lg hover:scale-102 transition-all duration-200"
        >
          <Image
            src={pokemon.image}
            alt={pokemon.name}
            width={152}
            height={152}
            className="w-38 h-38 object-contain mx-auto"
          />
          <div className="mt-3">
            <p className="text-center text-sm">#{pokemon.number}</p>
            <p className="text-center font-bold">{pokemon.name}</p>
          </div>
          <div className="mt-2">
            <ul className="flex gap-2 justify-center items-center flex-wrap">
              {pokemon.types.map((type: string, index: number) => (
                <li
                  key={index}
                  className={`rounded-xl p-1 text-sm font-normal ${
                    typeColors[type] || "bg-gray-200 text-gray-800"
                  }`}
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPokemon;
