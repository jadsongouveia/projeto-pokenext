import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
//import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths: GetStaticPaths = async() => {
    const maxPokemons = 250;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const res = await fetch(`${api}?limit=${maxPokemons}`);
        if (!res.ok){
        throw new Error (`Failed to fetch data from API. status ${res.status}`);
        }
        const data = await res.json()

        const paths = data.results.map((pokemon: {name: string}, index: number) => ({
                params: { pokemonId: (index + 1).toString() },
        }));
        console.log(paths)

        return {
            paths,
            fallback: false,
        };
    } catch (error) {
        console.error(error);
        return {
            paths: [],
            fallback: false,
        };
    }
    
};

interface PokemonType {
    type: {
        name: string;
    };
}
interface PokemonProps {
    pokemon: {
        id: string;
        name: string;
        types: PokemonType[];
        height: number;
        weight: number;

        
    };
}



export const getStaticProps: GetStaticProps = async(context) => {
    const id = context.params?.pokemonId;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data for Pokémon ID: ${id}`);
        }

        const data = await res.json();
        console.log(data);

        if(!data.types || !Array.isArray(data.types)) {
            return {
                notFound: true
            };
        }
        
        const pokemon = {
            id: data.id,
            name: data.name,
            types: data.types,
            height: data.height,
            weight: data.weight,
        };
        
        return {
            props: { pokemon },
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true, // Caso a API falhe, retorna a página 404
        };
    }
};


export default function Pokemon({pokemon}: PokemonProps ){
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <Image 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            width="200"                    
            height="200"
            alt={pokemon.name}/>
            <div>
                <h3>Número:</h3>
                <p>#{pokemon.id}</p>
            </div>
                <div>
                 <h3>Tipo:</h3>
                <div>
                    {Array.isArray(pokemon.types) && pokemon.types.length > 0 ? (
                        pokemon.types.map((item: PokemonType, index: number) => (
                            <span key={index}>{item.type.name}</span>
                        ))
                    ) : (
                        <p>Tipo nao disponivel</p>
                    )}
                </div>
            </div>
            <div>
                <div>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </div>
            </div>
        </div>
    );
}