"use client";
import Image from "next/image";
import data from "../../data/temoignages";

export default function Temoignages({ params }) {
    const temoignage = data.find(
        (temoignage) => temoignage.id === parseInt(params.id)
    );
    return (
        <div className="my-[50px]">
            <h2 className="text-center text-[16px] lg:text-[20px] text-[#377A00] font-bold mb-[5px]">
                Témoignages
            </h2>
            <h2 className="text-center text-[26px] lg:text-[35px] text-black font-bold px-[10px] leading-[26px] mb-[20px]">
                {temoignage.titre}
            </h2>
            {/* Liste des photos */}
            {temoignage.photos.map((photo, index) => (
                <div key={index}>
                    <Image
                        src={photo}
                        width={200}
                        height={250}
                        alt="Témoignages"
                        className="object-cover h-[500px] w-auto p-[20px] m-auto"
                    />
                </div>
            ))}
        </div>
    );
}
