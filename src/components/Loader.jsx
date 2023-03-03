import React from 'react';
import Image from "next/image";
import pokeball from "../assets/pngaaa.com-4750599.png";

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center fixed top-0" id="home">
            <Image
                 src={pokeball}
                 alt="pokeball"
                 className="animate-spin"
                    width={200}
                    height={200}
            />
        </div>
    );
};

export default Loader;
