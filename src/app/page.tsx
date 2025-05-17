import AllPokemon from "@/components/AllPokemon";
import Search from "@/components/Search";

export default function Home() {
  return (
      <main className="flex flex-col w-full max-w-7xl mx-auto px-5 bg-white shadow-md">
        <div className="flex flex-col items-center">
          <p className="text-5xl mt-5">PokeSource</p>
        </div>
        <div>
          <Search />
        </div>
        <div className="mb-5">
          <AllPokemon />
        </div>
      </main>
  );
}
