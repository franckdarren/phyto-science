import Button from "./_components/button";

export default function Accueil() {
    return (
        <>
            {/* Carrousel */}
            <div className="h-[240px] bg-[#80B42A]"></div>

            {/* Section Qui sommes nous? */}
            <div className="">
                <h2 className="text-center text-[16px] text-[#377A00] font-bold ">
                    Qui sommes-nous?
                </h2>
                <h2 className="text-center text-[26px] text-black font-bold ">
                    PhytoScience GABON LTD.
                </h2>
                <div className="flex flex-col justify-center bg-[#EAF7EB]">
                    <p className="text-black font-regular text-[20px] mb-[30px] px-[5%]">
                        Phyto Science est une entreprise mondiale de santé et de
                        bien-être, à la pointe de l’innovation de produits et
                        engagée à aider les gens à prendre le contrôle de leur
                        santé, tant physique que financier.
                    </p>
                    <Button text="Lire la suite" route={"/produits"} />
                </div>
            </div>
        </>
    );
}
