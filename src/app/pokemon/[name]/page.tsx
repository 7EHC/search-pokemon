import PokemonDetails from '@/components/PokemonDetails'

type Props = {
  params: { name: string };
}

async function page({ params }: Props) {
  const { name } = await params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}

export default page