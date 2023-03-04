import React from 'react';
import {useQuery} from "@tanstack/react-query";

const PrevPokemon = ({id}) => {
    const getPokemon = (id) => {
        return fetch(
            `https://pokebuildapi.fr/api/v1/pokemon/${id}`
        ).then((res) => res.json());
    }
    const { data, isLoading, error } = useQuery({
        queryKey: ["pokemon", id],
        queryFn: () => getPokemon(id),
    });
    if (error) {
        return <p>error</p>;
    }
    if (isLoading) {
        return <p>loading</p>;
    }
    return (
        <div className="flex flex-col justify-center items-center w-full">
            <picture>
                <img src={data.image} alt="" className="w-32 max-sm:w-44"/>
            </picture>
            <p className="text2">{data.name}</p>
        </div>
    );
};

export default PrevPokemon;
