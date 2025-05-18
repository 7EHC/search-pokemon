"use client";
import React from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMONS } from "../graphql/queries";
import { useRouter } from "next/navigation";
import { Pokemon } from "../types/pokemon";
import Image from "next/image";

const AllPokemon = () => {
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
  };

  const { data, loading, error } = useQuery(GET_POKEMONS, {
    variables: { first: 100 },
  });

  const handleClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

  if (loading)
    return <p className="flex h-screen justify-center items-center">Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {data.pokemons.map((pokemon: Pokemon) => (
        <div
          key={pokemon.id}
          onClick={() => handleClick(pokemon.name)}
          className="p-4 rounded-xl shadow cursor-pointer bg-white hover:shadow-lg hover:scale-102 transition-all duration-300"
        >
          <img
            src={pokemon.image}
            alt={pokemon.name}
            className="w-38 h-38 object-contain mx-auto"
            // width={38}
            // height={38}
          />
          <div className="mt-3">
          <p className="text-center text-sm">
            #{pokemon.number}
          </p>
          <p className="text-center font-normal">{pokemon.name}</p>
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
