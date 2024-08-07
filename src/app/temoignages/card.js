// "use client";
import Image from "next/image";
import { Button } from "flowbite-react";
import data from "../data/temoignages.js";
import Temoignages from "./page.jsx";

const CardTemoignage = ({ imageTemoignage, titreTemoignage, idTemoignage }) => {
    return (
        <>
            <div className="shadow-2xl w-full rounded-xl">
                {/* Image du témoignage */}
                <Image
                    src={imageTemoignage}
                    width={200}
                    height={250}
                    alt="Produit snowphyllforte"
                    className="object-cover h-[300px] w-full p-[20px] m-auto"
                />
                <div>
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ml-[20px]">
                            {titreTemoignage}
                        </h5>
                    </a>
                </div>

                <Button
                    href={`/temoignages/${idTemoignage}`}
                    className="text-[#377A00] md:hover:bg-[#377A00] md:hover:text-white font-medium rounded-lg text-sm px-5 text-center mx-auto mb-[10px] active:text-white w-[250px]"
                >
                    Cliquer pour lire la suite
                </Button>
            </div>
        </>
    );
};

export default CardTemoignage;
