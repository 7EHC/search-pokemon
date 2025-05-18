import PokemonDetails from '@/components/PokemonDetails';

export default function Page({
  params,
}: {
  params: { name: string };
}) {
  const { name } = params;

  return (
    <div>
      <PokemonDetails name={name} />
    </div>
  );
}
