import PokemonDetails from '@/components/PokemonDetails'

type Props = {
  params: { name: string };
}

function Page({ params }: Props) {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}

export default Page