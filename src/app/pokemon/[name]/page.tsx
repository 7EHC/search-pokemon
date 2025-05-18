import PokemonDetails from "@/components/PokemonDetails";

type nParams = Promise<{ name: string }>

export default async function Page({ params }: { params: nParams }) {
  const { name } = await params;

  return (
    <div>
      <PokemonDetails name={name} />
    </div>
  );
}
