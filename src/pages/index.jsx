import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../components/Loader";
import PokemonListItem from "../components/PokemonListItem";
import Link from "next/link";
import Popup from "../components/Popup";
import Button from "../components/Button";


const getPokemon = async () =>
      fetch("https://pokebuildapi.fr/api/v1/pokemon")
         .then((res) => res.json());

export default function Pokemon() {
    const [search, setSearch] = useState("");
    const [popup, setPopup] = useState(false);
    const handlePopup = () => {
        setPopup(!popup);
    }
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const { data, isLoading, error, isSuccess } = useQuery({
        queryKey: ["pokemon"],
        queryFn: getPokemon,
    });
    console.log(data)
    if (error) {
        return <p>error</p>;
    }
    return (
        <>
        <div className="flex flex-col items-center w-screen h-screen relative" id="home">
            <div className="absolute top-2 right-2">
                <Button handleClick={handlePopup} label="Crédits" color="button1" classSpan="go1" />
            </div>
            {popup && <Popup popup={popup} setPopup={setPopup} /> }
            <div className="container ">
                <input placeholder="Nom, numéro pokedex ou type" className="input" type="search" onChange={handleChange} value={search} />
                    <div className="icon">
                        <svg viewBox="0 0 512 512" className="" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-width="32" stroke-miterlimit="10" stroke="currentColor" fill="none"
                                  d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                            <path d="M338.29 338.29L448 448" stroke-width="32" stroke-miterlimit="10"
                                  stroke-linecap="round" stroke="currentColor" fill="none"></path>
                        </svg>
                    </div>
            </div>
            <div className="w-full h-[90%] flex justify-center items-center relative ">
            {isLoading && <Loader />}
                <div className="flex flex-wrap justify-center h-full gap-10 overflow-y-auto duration-500 px-10  ">
                    {isSuccess &&
                         data
                            .filter((poke) =>
                                poke.name.toLowerCase().includes(search.toLowerCase()) ||
                                    poke["pokedexId"].toString().includes(search) ||
                                    poke["apiTypes"].some((type) => type.name.toLowerCase().includes(search.toLowerCase()))
                                    )
                                .map((pokemon) => (
                                    <Link href={`/${pokemon.id}`} key={pokemon.id}>
                                        <PokemonListItem data={pokemon} />
                                    </Link>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}

