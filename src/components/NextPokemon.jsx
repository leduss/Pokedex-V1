import React from 'react';
import {useQuery} from "@tanstack/react-query";

const NextPokemon = ({evolution}) => {
    const getPokemon = (evolution) => {
        return fetch(
            `https://pokebuildapi.fr/api/v1/pokemon/${evolution}`
        ).then((res) => res.json());
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["pokemon", evolution],
        queryFn: () => getPokemon(evolution),
    });
    if (error) {
        return <p>error</p>;
    }
    if (isLoading) {
        return <p>loading</p>;
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <picture>
                <img src={data.image} alt="" className="w-32"/>
            </picture>
            <p className="text2">{data.name}</p>
        </div>
    );
};

export default NextPokemon;
