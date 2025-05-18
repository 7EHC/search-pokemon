"use client";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_BY_NAME } from "../graphql/queries";
import { useRouter } from "next/navigation";
import NotFound from "./NotFound";
import Image from "next/image";

type Props = {
  name: string;
};

function PokemonDetails({ name }: Props) {
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

  const handleClick = (name: string) => {
    router.push(`/pokemon/${name}`);
  };

  const { data, loading, error } = useQuery(GET_POKEMON_BY_NAME, {
    variables: { name },
    skip: !name,
  });

  if (loading)
    return (
      <p className="flex h-screen justify-center items-center">Loading...</p>
    );
  if (error) return <p>Error: {error.message}</p>;
  if (!data?.pokemon) return <NotFound />;

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 bg-white shadow-md w-full max-w-7xl p-5">
          <div className="flex flex-col items-center rounded-xl p-5">
            <div className="relative w-full mb-4">
              <img
                src="/icons8-home-48.png"
                alt="homeIcon"
                onClick={() => router.push("/")}
                className="absolute left-0 w-8 h-8 cursor-pointer hover:scale-110 transition-all duration-300"
              />

              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-light">
                  {data.pokemon.name}{" "}
                  <span className="text-[#616161]">#{data.pokemon.number}</span>
                </h1>

                <ul className="flex gap-2 flex-wrap mt-2 justify-center">
                  {data.pokemon.types.map((type: string, index: number) => (
                    <li
                      key={index}
                      className={`rounded-xl text-sm font-normal px-3 py-1 ${
                        typeColors[type] || "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <img
                src={data.pokemon.image}
                alt={data.pokemon.name}
                className="mb-10 mt-5"
              />
            </div>
            <div className="flex flex-row gap-4 w-3/4 justify-center border-b-1 border-gray-300 pb-2 mb-2">
              <p className="text-xl text-red-900">
                Evolutions
              </p>
            </div>
            <div className="flex-1 flex-col rounded-xl p-5">
              {data.pokemon.evolutions?.length > 0 ? (
                <>
                  <div className="flex gap-4 flex-wrap justify-center">
                    {data.pokemon.evolutions.map((evo: any) => (
                      <div
                        key={evo.id}
                        onClick={() => handleClick(evo.name)}
                        className="rounded-xl bg-white p-4 text-center shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 transition-all duration-300 flex flex-col items-center"
                      >
                        <img
                          src={evo.image}
                          alt={evo.name}
                          className="w-30 h-30 mx-auto mb-2"
                        />
                        <p className="font-normal mb-2">
                          {evo.name}{" "}
                          <span className="text-[#616161]">#{evo.number}</span>
                        </p>
                        <div>
                          <ul className="flex gap-2 justify-start items-center flex-wrap">
                            {evo.types.map((type: string, index: number) => (
                              <li
                                key={index}
                                className={`rounded-xl p-1 text-sm font-normal ${
                                  typeColors[type] ||
                                  "bg-gray-200 text-gray-800"
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
                </>
              ) : (
                <p className="text-gray-500 flex justify-center">
                  No evolutions available.
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center overflow-y-auto bg-[#f5f5f5] rounded-xl p-5">
            <div className="grid grid-cols-2 gap-4 rounded-xl p-5 bg-[#30A7D7] w-full shadow-md">
              <ul>
                <li>
                  <p className="detailsHead">Height</p>
                  <p className="detailsText">
                    {data.pokemon.height.minimum}~{data.pokemon.height.maximum}
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="detailsHead">Weight</p>
                  <p className="detailsText">
                    {data.pokemon.weight.minimum}~{data.pokemon.weight.maximum}
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="detailsHead">MaxCP</p>
                  <p className="detailsText">{data.pokemon.maxCP}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="detailsHead">MaxHP</p>
                  <p className="detailsText">{data.pokemon.maxHP}</p>
                </li>
              </ul>
              <ul>
                <li>
                  <p className="detailsHead">Category</p>
                  <p className="detailsText">{data.pokemon.classification}</p>
                </li>
              </ul>
            </div>
            <div className="mt-5 w-full shadow-md rounded-xl p-5 bg-white">
              <h3 className="text-black text-xl">Resistant</h3> <br />
              <ul className="flex gap-2 justify-start items-center flex-wrap">
                {data.pokemon.resistant.map((resist: string, index: number) => (
                  <li
                    key={index}
                    className="bg-green-100 text-green-600 text-sm font-medium px-3 py-1 rounded-full"
                  >
                    {resist}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-5 shadow-md w-full rounded-xl p-5 bg-white">
              <h3 className="text-black text-xl">Weaknesses</h3> <br />
              <ul className="flex gap-2 justify-start items-center flex-wrap">
                {data.pokemon.weaknesses.map(
                  (weakness: string, index: number) => (
                    <li
                      key={index}
                      className="bg-red-100 text-red-500 text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {weakness}
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="w-full mt-5 bg-white rounded-xl p-5 shadow-md">
              <h3 className="text-black text-xl mb-4">Attacks</h3>

              <div className="mb-6 p-5 shadow-md rounded-xl bg-red-200">
                <h4 className="text-lg mb-2 text-red-800 font-normal">
                  Fast Attacks
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.pokemon.attacks.fast.map(
                    (
                      attack: { name: string; type: string; damage: number },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="rounded-xl p-4 shadow-md bg-white"
                      >
                        <p className="font-semibold">
                          Name:{" "}
                          <span className="font-normal">{attack.name}</span>
                        </p>
                        <p className="font-semibold">
                          Type:{" "}
                          <span
                            className={`px-2 py-1 rounded-full text-sm font-medium ${
                              typeColors[attack.type] ||
                              "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {attack.type}
                          </span>
                        </p>
                        <p className="font-semibold">
                          Damage:{" "}
                          <span className="font-normal">{attack.damage}</span>
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Special Attacks */}
              <div className="p-5 shadow-md rounded-xl bg-orange-200">
                <h4 className="text-lg mb-2 font-normal text-orange-700">
                  Special Attacks
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.pokemon.attacks.special.map(
                    (
                      attack: { name: string; type: string; damage: number },
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="bg-white rounded-xl p-4 shadow-md"
                      >
                        <p className="font-semibold">
                          Name:{" "}
                          <span className="font-normal">{attack.name}</span>
                        </p>
                        <p className="font-semibold">
                          Type:{" "}
                          <span
                            className={`px-2 py-1 rounded-full text-sm font-medium ${
                              typeColors[attack.type] ||
                              "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {attack.type}
                          </span>
                        </p>
                        <p className="font-semibold">
                          Damage:{" "}
                          <span className="font-normal">{attack.damage}</span>
                        </p>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetails;
