import PokemonDetails from '@/components/PokemonDetails'

type Props = {
  params: { name: string };
}

const Details = ({ params }: Props) => {
  const { name } = params;
    return (
      <div>
        <PokemonDetails name={ name } />
      </div>
  )
}

export default Details;