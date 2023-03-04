import React from 'react';
import Button from "../components/Button";
import {useRouter} from "next/router";

export default function Error404() {
    const router = useRouter();
    const handleClick = () => {
        router.push("/");
    }
    return (
        <div className="w-full h-full relative" id="home">
            <div className="absolute top-28 left-28">
            <Button handleClick={handleClick} label="Pokedex" color="button1" classSpan="go1" />
            </div>
        </div>
    );
};

