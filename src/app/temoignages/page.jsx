import Image from "next/image";
import africa from "../../../public/assets/africa.png";
import CardTemoignage from "./card";

export default function Temoignages() {

    const data = [
        {
            id: 1,
            titre: "Titre 1",
            image: "/assets/temoignage1.jpg",
            description: "<p>Description 1</p>",
        },
        {
            id: 2,
            titre: "Titre 2",
            image: "/assets/temoignage2.jpg",
            description: "<p>Description 2</p>",
        },
        {
            id: 3,
            titre: "Titre 3",
            image: "/assets/temoignage3.jpg",
            description: "<p>Description 3</p>",
        },
        {
            id: 4,
            titre: "Titre 4",
            image: "/assets/temoignage4.jpg",
            description: "<p>Description 4</p>",
        },
    ];

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
                    />
                ))}
            </div>
        </div>
    );
}
