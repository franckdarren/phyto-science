import Image from "next/image";
import africa from "../../../public/assets/africa.png";
import CardTemoignage from "./card";
import data from "../data/temoignages.js"
export default function Temoignages() {

    
    return (
        <div className="my-[50px] px-[5%]">
            <h2 className="text-[26px] text-black font-bold mb-[20px] ">
                Témoignages
            </h2>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-[30px] md:gap-6 lg:grid-cols-3">
                {/* Liste des témoignages */}
                {data.map((temoignage) => (
                    <CardTemoignage
                        key={temoignage.id}
                        titreTemoignage={temoignage.titre}
                        imageTemoignage={temoignage.image}
                        description={temoignage.description}
                        idTemoignage={temoignage.id}
                    />
                ))}
            </div>
        </div>
    );
}
