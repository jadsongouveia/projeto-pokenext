import Image from 'next/image'
import Link from "next/link";
import styles from "../src/styles/Card.module.css"

interface Pokemon{
    name:string;
    id:number
}

export default function Card({pokemon}: {pokemon: Pokemon} ){
    return (
        <div className={styles.card}>
                <Image 
                    /*src={`https://cdn.traction.one/Pokedex/pokemon/${pokemon.id}.png`}*/
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width="120"
                    height="120"
                    alt={pokemon.name}/>
                    <p className={styles.id}>#{pokemon.id}</p>
                <h3 className={styles.title}>{pokemon.name}</h3>
                <Link className={styles.btn} href={`/pokemon/${pokemon.id}`}>
                    Detalhes
                </Link>
        </div>
    )
}