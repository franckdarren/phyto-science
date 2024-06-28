import Image from "next/image";
import certificat from "../../../public/assets/certificat.jpg";

export default function PreFooter() {
    return (
        <div className="mt-[50px] md:flex md:gap-[100px] md:items-center px-[5%] hidden">
            <div>
                <h2 className="font-bold text-[22px]">Phyto Science Gabon</h2>
                <p className="font-regular text-[16px] leading-[24px] lg:pr-[300px]">
                    Pionnier du traitement des pathologies lourdes avec les
                    cellules souches végétales, Phyto science Gabon
                    s&apos;engage à offrir des solutions de pointe pour votre
                    bien-être.
                </p>
            </div>
            <Image
                src={certificat}
                alt="Certificat"
                className="object-cover h-[230px] w-[90%] p-[10px] mx-auto lg:h-[220px] lg:w-auto"
            />
        </div>
    );
}
