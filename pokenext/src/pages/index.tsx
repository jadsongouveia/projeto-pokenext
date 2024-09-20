import styles from '../styles/Home.module.css'
import Image from "next/image";

import Card from '../../components/Card'

interface Pokemon {
  name: string;
  id: number;
}

interface HomeProps {
  pokemons: Pokemon[];
}

export async function getStaticProps() {
  
  const maxPokemons = 250;
  const api = 'https://pokeapi.co/api/v2/pokemon/';

  try {
    const res = await fetch(`${api}?limit=${maxPokemons}`);
    if (!res.ok){
      throw new Error (`Failed to fetch data from API. status ${res.status}`);
    }
    const data = await res.json()

    //add pokemon index
      const pokemons = data.results.map((item: {name: string}, index: number) => ({
        name:item.name,
        id: index + 1,
      }));
      return {
        props: {
          pokemons,
        },
      };
  } catch (error) {
    console.error('Error fething data',error);
    return {
      props: {
        pokemons: [],
      },
    };
  }
}

export default function Home({ pokemons }: HomeProps) {
  return(
    <> 
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png"
        width="50"
        height="50"
        alt="PokeNext"/>
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
