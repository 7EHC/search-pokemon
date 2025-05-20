export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  image: string;
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions?: Pokemon[];
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonDimension {
  minimum: string;
  maximum: string;
}
