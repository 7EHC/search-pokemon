import PokemonDetails from '@/components/PokemonDetails'

type Props = {
  params: { name: string };
}

export default async function Page({ params }: Props) {
  const { name } = await params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}
