import {useRouter} from "next/router";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import Loader from "../../components/Loader";
import PokemonIdItem from "../../components/PokemonIdItem";
import Button from "../../components/Button";

const getPokemon = (pokemonId) => {
    return fetch(
        `https://pokebuildapi.fr/api/v1/pokemon/${pokemonId}`
    ).then((res) => res.json());
}

export default function Pokemon() {

    const router = useRouter();
    const { pokemonId } = router.query;
    const { data, isLoading, error } = useQuery({
        queryKey: ["pokemon", pokemonId],
        queryFn: () => getPokemon(pokemonId),
    });
    const handleClick = () => {
        router.push("/");
    }
    if (isLoading) {
        return <Loader />;
    } else if (error) {
        return <p>error</p>;
    }
    return (
        <div className="w-screen h-screen m-0 relative">
            <div className="absolute top-5 left-5">
                  <Button handleClick={handleClick} color="button" label="Retour au pokedex" classSpan="go" />
            </div>
            <PokemonIdItem data={data} />
        </div>
    );
}