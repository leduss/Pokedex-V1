import React, {useState} from 'react';
import {motion} from "framer-motion";
import NextPokemon from "./NextPokemon";
import PrevPokemon from "./PrevPokemon";
import Link from "next/link";

const PokemonIdItem = ({data}) => {
    const bla = Object.keys(data.stats).map((key) => { return key } );
    if (bla[0] === "HP") {
        bla[0] = "Point de vie";
    }
    if (bla[1] === "attack") {
        bla[1] = "Attaque";
    }
    if (bla[2] === "defense") {
        bla[2] = "Défense";
    }
    if (bla[3] === "special_attack") {
        bla[3] = "Attaque Spéciale";
    }
    if (bla[4] === "special_defense") {
        bla[4] = "Défense Spéciale";
    }
    if (bla[5] === "speed") {
        bla[5] = "Vitesse";
    }
    const [hover, setHover] = useState();
    let type = data["apiTypes"].map((type) => type.name);
    let color;
    let color2 = "";
    let color3 = "";
    if (type.includes("Feu")) {
        color = "bg-gradient-to-b from-orange-500 to-orange-200";
        color2 = "bg-orange-400";
        color3 = "bg-orange-700";
    } else if (type.includes("Eau")) {
        color = "bg-gradient-to-b from-blue-700 to-blue-400";
        color2 = "bg-blue-400";
        color3 = "bg-blue-700";
    } else if (type.includes("Plante" && "Poison")) {
        color = "bg-gradient-to-b from-green-600 to-green-300";
        color2 = "bg-green-400";
        color3 = "bg-green-700";
    } else if (type.includes("Électrik")) {
        color = "bg-gradient-to-b from-yellow-500 to-yellow-200";
        color2 = "bg-yellow-400";
        color3 = "bg-yellow-700";
    } else if (type.includes("Insecte")) {
        color = "bg-gradient-to-b from-green-400 to-green-100";
        color2 = "bg-green-400";
        color3 = "bg-green-700";
    } else if (type.includes("Poison" && "Plante")) {
        color = "bg-gradient-to-b from-purple-700 to-purple-400";
        color2 = "bg-purple-400";
        color3 = "bg-purple-700";
    } else if (type.includes("Vol")) {
        color = "bg-gradient-to-b from-sky-500 to-sky-200";
        color2 = "bg-sky-400";
        color3 = "bg-sky-700";
    } else if (type.includes("Spectre")) {
        color = "bg-gradient-to-b from-violet-700 to-violet-400";
        color2 = "bg-violet-400";
        color3 = "bg-violet-700";
    } else if (type.includes("Ténèbres")) {
        color = "bg-gradient-to-b from-gray-700 to-gray-400";
        color2 = "bg-gray-400";
        color3 = "bg-gray-700";
    } else if (type.includes("Roche")) {
        color = "bg-gradient-to-b from-gray-600 to-gray-300";
        color2 = "bg-gray-400";
        color3 = "bg-gray-700";
    } else if (type.includes("Acier")) {
        color = "bg-gradient-to-b from-zinc-500 to-zinc-200";
        color2 = "bg-zinc-400";
        color3 = "bg-zinc-700";
    } else if (type.includes("Psy")) {
        color = "bg-gradient-to-b from-pink-500 to-pink-200";
        color2 = "bg-pink-400";
    } else if (type.includes("Combat")) {
        color = "bg-gradient-to-b from-red-600 to-red-300";
        color2 = "bg-red-400";
    } else if (type.includes("Glace")) {
        color = "bg-gradient-to-b from-cyan-300 to-cyan-100";
        color2 = "bg-cyan-400";
    } else if (type.includes("Sol")) {
        color = "bg-gradient-to-b from-amber-700 to-amber-400";
        color2 = "bg-amber-400";
    } else if (type.includes("Dragon")) {
        color = "bg-gradient-to-b from-stone-700 to-stone-400";
        color2 = "bg-stone-400";
    } else if (type.includes("Fée")) {
        color = "bg-gradient-to-b from-pink-700 to-pink-400";
        color2 = "bg-pink-400";
    } else {
        color = "bg-gradient-to-b from-gray-300 to-gray-100";
        color2 = "bg-gray-400";
    }
    return (
        <div className={`${color} w-full flex flex-col h-screen max-sm:h-auto `} >
            <div className="w-full h-1/6 flex gap-28 max-sm:gap-12 justify-center items-center max-sm:pt-20 max-sm:pb-12">
                <h1 className="text">#{data["pokedexId"]}</h1>
                <h1 className="text">{data.name}</h1>
            </div>
        <div className={`w-full h-5/6 flex max-sm:flex-col max-sm:h-auto justify-center gap-4 items-center `}>
            <div className="flex flex-col gap-10 max-sm:gap-8 items-center justify-center w-1/3 h-2/3">
                    {Object.values(data.stats).map((stat, index) => {
                        return (
                            <div key={index} className="w-80 h-6 max-sm:h-5 bg-black rounded-xl ring-2 ring-black flex relative">
                            <motion.div
                                key={index}
                                className={` ${color2} h-[100%] rounded-xl`}
                                initial={{ width: 0 }}
                                animate={{ width: `${stat >= 100 ? 100 : stat }%` }}
                                transition={{ duration: 2 }}
                            >
                            <motion.p
                                initial={{ opacity:0 }}
                                animate={{ opacity:1}}
                                transition={{ duration: 1, delay: 1 }}
                                className=" text-black text-xl max-sm:text-lg flex items-center pl-2 w-full h-full">
                                {stat}
                            </motion.p>
                                <p className="pl-2 absolute -top-7 text-xl">{bla[index]}</p>
                            </motion.div>
                            </div>
                        );
                })}
            </div>
            <div className="w-1/3 max-sm:w-2/3 h-full flex justify-center items-center">
            <picture>
                <img src={data.image} alt={data.name}/>
            </picture>
            </div>
            <div className="w-1/3 max-sm:w-2/3 h-full flex flex-col justify-center items-center gap-20 max-sm:gap-10 max-sm:pb-4" >
                <div className="w-full flex justify-center gap-10">
                    {data["apiTypes"].map((type, index) => (
                        <div key={index} className=" h-1/3 flex flex-col items-center relative"  >
                            <picture className="" >
                                <img src={type.image} alt={type.name} className="w-24"
                                     onMouseEnter={() => setHover(type) }
                                     onMouseLeave={() => setHover(null) }
                                />
                            </picture>
                                <p className={`${type === hover ? `${color3} absolute -top-5 text-lg px-3 px-2 rounded-full text-white` 
                                    : "hidden"} `}>
                                    {type.name}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="flex gap-10 justify-center max-sm:w-full">
                        {data.apiPreEvolution !== "none" && (
                            <div className="w-1/2 flex flex-col items-center text-center">
                                <h3>Évolution<br/>précédente</h3>
                                <Link href={`/${data.apiPreEvolution.pokedexIdd}`}>
                                <PrevPokemon id={data.apiPreEvolution.pokedexIdd} />
                                </Link>
                            </div>
                        )}
                {data.apiEvolutions.length > 0 &&
                    data.apiEvolutions.map((evolution, index) => (
                        <div key={index} className="w-1/2 flex flex-col items-center text-center">
                            <h3>Évolution<br/>suivante</h3>
                            <Link href={`/${evolution.pokedexId}`}>
                            <NextPokemon evolution={evolution.pokedexId} />
                            </Link>
                        </div>
                    ))
                }
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PokemonIdItem;
