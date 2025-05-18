import PokemonDetails from '@/components/PokemonDetails'

type paramProps = {
  params: {
    name: string;
  };
};

export default function Page({ params }: paramProps) {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}
