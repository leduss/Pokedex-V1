import React from 'react';
import Image from "next/image";
import pokeball from "../assets/pokemon-g69524327d_1280.png";

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center fixed top-0" id="home">
            <Image
                 src={pokeball}
                 alt="pokeball"
                 className="animate-spin"
                    width={300}
                    height={300}
            />
        </div>
    );
};

export default Loader;
