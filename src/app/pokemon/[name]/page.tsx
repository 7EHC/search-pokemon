import PokemonDetails from '@/components/PokemonDetails'

type Props = {
  params: { name: string };
}

export default function Page({ params }: Props) {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}
