import PokemonDetails from '@/components/PokemonDetails'
import Link from 'next/link';

type Props = {
  params: { name: string };
}

async function page({ params }: Props) {
  const { name } = await params;
    return (
      <div>
        {/* <Link href="/" className='flex flex-col'>Back</Link> */}
        <PokemonDetails name={ name } />
      </div>
  )
}

export default page