import PokemonDetails from '@/components/PokemonDetails'

type PageProps = {
  params: {
    name: string;
  };
};

export default function Page({ params }: PageProps) {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}
