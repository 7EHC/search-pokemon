import PokemonDetails from '@/components/PokemonDetails'

type NameParams = {
  params: {
    name: string;
  };
};

export default function Page({ params }: NameParams) {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}
