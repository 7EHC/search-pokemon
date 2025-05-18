import PokemonDetails from '@/components/PokemonDetails'

type props = {
  params: { name: string };
}

function Page({ params }: props) {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}

export default Page