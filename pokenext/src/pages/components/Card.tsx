import Image from "next/image";

interface Pokemon{
    name:string;
    id:number
}

export default function Card({pokemon}: {pokemon: Pokemon} ){
    return (
        <div>
            <Image 
                src={`https://cdn.traction.one.pokedex/pokemon/${pokemon.id}.png`}
                width={120}
                height={120}
                alt={pokemon.name}
            />
            <h3>{pokemon.name}</h3>
        </div>
    )
}