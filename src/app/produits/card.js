import Image from "next/image";

const CardProduit = ({ nomProduit, imageProduit }) => {
    return (
        <div className="shadow-2xl h-[280px] w-full rounded-xl">
            <p className="font-light text-[20px] text-center text-white bg-[#377A00] inline-block px-[15px] rounded-full relative left-[10px] top-[5px]">
                {nomProduit}
            </p>
            <Image
                src={imageProduit}
                alt="Produit snowphyllforte"
                className="object-cover h-[250px] w-full p-[20px] m-auto"
            />
        </div>
    );
};

export default CardProduit;
