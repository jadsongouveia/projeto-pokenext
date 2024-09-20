import { GetStaticPaths, GetStaticProps } from "next";

export const getStaticPaths: GetStaticPaths = async() => {
    const maxPokemons = 250;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    try {
        const res = await fetch(`${api}?limit=${maxPokemons}`);
        if (!res.ok){
        throw new Error (`Failed to fetch data from API. status ${res.status}`);
        }
        const data = await res.json()

        //params
        const paths = data.results.map((index: number) => {
            return {
                params: {pokemonId: (index+1).toString() },
            }
        })

        return {
            paths,
            fallback: false,
        };
    }catch (error) {
        console.error(error);
        return {
            paths: [],
            fallback: false,
        };
    }
};

export const getStaticProps: GetStaticProps = async(context) => {
    const id = context.params?.pokemonId;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch data for Pokémon ID: ${id}`);
        }

        const data = await res.json();

        return {
            props: { pokemon: data },
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true, // Caso a API falhe, retorna a página 404
        };
    }
};

interface PokemonProps {
    pokemon: {
        name: string;
        // Adicione mais propriedades conforme necessário
    };
}

export default function Pokemon( {pokemon}: PokemonProps ){
    return(
        <div>
            <h1>{pokemon.name}</h1>
            <p>Testando</p>
        </div>
    );
}