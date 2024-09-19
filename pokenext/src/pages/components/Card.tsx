import Image from "next/image";
import styles from "../../styles/Home.module.css"

interface Pokemon{
    name:string;
    id:number
}

export default function Card({pokemon}: {pokemon: Pokemon} ){
    return (
        <div className={styles.card}>
            <div className={styles.pokemon_content}>
                <Image 
                    /*src={`https://cdn.traction.one/Pokedex/pokemon/${pokemon.id}.png`}*/
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                    width="120"
                    height="120"
                    alt={pokemon.name}/>
                <h3 className={styles.h3}>{pokemon.name}</h3>
            </div>
        </div>
    )
}