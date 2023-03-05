import React from 'react';
import { motion } from "framer-motion";

const PokemonListItem = ({data}) => {
    const cardVariants = {
        offscreen: {
            y: 50,
            rotate: 10,
            opacity: 0.5,
        },
        onscreen: {
            y: 0,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 1
            }
        }
    }
    let type = data["apiTypes"].map((type) => type.name);
    let colori;
    let color2;
    if (type.includes("Feu")) {
        colori = "bg-gradient-to-b from-orange-500 to-orange-200";
        color2 = "bg-gradient-to-b from-orange-300 to-white";
    } else if (type.includes("Eau")) {
        colori = "bg-gradient-to-b from-blue-700 to-blue-400";
        color2 = "bg-gradient-to-b from-blue-300 to-white";
    } else if (type.includes("Plante")) {
        colori = "bg-gradient-to-b from-green-600 to-green-300";
        color2 = "bg-gradient-to-b from-green-300 to-white";
    } else if (type.includes("Électrik")) {
        colori = "bg-gradient-to-b from-yellow-500 to-yellow-200";
        color2 = "bg-gradient-to-b from-yellow-300 to-white";
    } else if (type.includes("Insecte")) {
        colori = "bg-gradient-to-b from-green-400 to-green-100";
        color2 = "bg-gradient-to-b from-green-300 to-white";
    } else if (type.includes("Poison")) {
        colori = "bg-gradient-to-b from-purple-700 to-purple-400";
        color2 = "bg-gradient-to-b from-purple-300 to-white";
    } else if (type.includes("Vol")) {
        colori = "bg-gradient-to-b from-sky-500 to-sky-200";
        color2 = "bg-gradient-to-b from-sky-300 to-white";
    } else if (type.includes("Spectre")) {
        colori = "bg-gradient-to-b from-violet-700 to-violet-400";
        color2 = "bg-gradient-to-b from-violet-300 to-white";
    } else if (type.includes("Ténèbres")) {
        colori = "bg-gradient-to-b from-gray-700 to-gray-400";
        color2 = "bg-gradient-to-b from-gray-300 to-white";
    } else if (type.includes("Roche")) {
        colori = "bg-gradient-to-b from-gray-600 to-gray-300";
        color2 = "bg-gradient-to-b from-gray-300 to-white";
    } else if (type.includes("Acier")) {
        colori = "bg-gradient-to-b from-zinc-500 to-zinc-200";
        color2 = "bg-gradient-to-b from-zinc-300 to-white";
    } else if (type.includes("Psy")) {
        colori = "bg-gradient-to-b from-pink-500 to-pink-200";
        color2 = "bg-gradient-to-b from-pink-300 to-white";
    } else if (type.includes("Combat")) {
        colori = "bg-gradient-to-b from-red-600 to-red-300";
        color2 = "bg-gradient-to-b from-red-300 to-white";
    } else if (type.includes("Glace")) {
        colori = "bg-gradient-to-b from-cyan-300 to-cyan-100";
        color2 = "bg-gradient-to-b from-cyan-300 to-white";
    } else if (type.includes("Sol")) {
        colori = "bg-gradient-to-b from-amber-700 to-amber-400";
        color2 = "bg-gradient-to-b from-amber-300 to-white";
    } else if (type.includes("Dragon")) {
        colori = "bg-gradient-to-b from-stone-700 to-stone-400";
        color2 = "bg-gradient-to-b from-stone-300 to-white";
    } else if (type.includes("Fée")) {
        colori = "bg-gradient-to-b from-pink-700 to-pink-400";
        color2 = "bg-gradient-to-b from-pink-300 to-white";
    } else {
        colori = "bg-gradient-to-b from-gray-300 to-gray-100";
        color2 = "bg-gradient-to-b from-gray-300 to-white";
    }
    return (
        <motion.div
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className={`${colori} w-64 max-sm:w-44 h-96 max-sm:h-64 rounded-2xl drop-shadow-xl flex items-center justify-center relative`}
        >
            <div className="h-[93%] w-[92%] bg-white rounded-2xl">
                <div className="h-20 max-sm:h-16 flex justify-between items-center p-2">
                    <div className="flex gap-2 max-sm:gap-1">
                        {data["apiTypes"].map((type) => (
                            <picture key={type.id}>
                                <img src={type.image} alt={type.name} className="w-8 h-8 max-sm:w-5 max-sm:h-5" />
                            </picture>
                        ))}
                    </div>
                        <h1 className="text-2xl max-sm:text-lg font-bold flex">{data.name}</h1>
                </div>
                <div className={`h-32 flex flex-col justify-end p-1 ${color2}`} />
                <div className="h-3"/>
                <picture>
                    <img src={data.image} alt={data.name} className="absolute top-28 max-sm:top-20 right-0 max-sm:right-3 w-64 max-sm:w-40" />
                </picture>
            </div>
        </motion.div>
    );
};

export default PokemonListItem;
