import Image from "next/image";
import snowphyllforte from "../../../public/assets/SnowPhyllForte.png";
import actual from "../../../public/assets/actual+.jpg";
import crystal from "../../../public/assets/crystal-cell.jpg";
import NuForte from "../../../public/assets/NuForte.jpg";
import NuLite from "../../../public/assets/NuLite.jpg";
import iiQ from "../../../public/assets/iiQ-plus.jpg";
import double from "../../../public/assets/double-stemcell.png";
import triple3 from "../../../public/assets/triple3.jpg";
import h20 from "../../../public/assets/h20.png";
import certificat from "../../../public/assets/certificat.jpg";
import CardProduit from "./card";

export default function Produits() {
    return (
        <>
            <div className="my-[50px] px-[5%]">
                <h2 className="text-[26px] text-black font-bold mb-[20px] ">
                    Tous les Produits
                </h2>
                <div className="flex flex-col items-center justify-center gap-[50px]">
                    {/* Produit 1 */}
                    <CardProduit
                        nomProduit={"SnowPhyllForte"}
                        imageProduit={snowphyllforte}
                    />

                    {/* Produit 2 */}
                    <div className="shadow-2xl h-[250px] w-full rounded-xl">
                        <p className="font-light text-[20px] text-center text-white bg-[#377A00] inline-block px-[15px] rounded-full relative left-[10px] top-[5px]">
                          Actual+
                        </p>
                        <Image
                            src={actual}
                            alt="Produit snowphyllforte"
                            className="object-cover h-[200px] w-auto mx-auto"
                        />
                    </div>

                    {/* Produit 3 */}
                    <CardProduit
                        nomProduit={"Cristall Cell"}
                        imageProduit={crystal}
                    />

                    {/* Produit 4 */}
                    <CardProduit
                        nomProduit={"NuForte"}
                        imageProduit={NuForte}
                    />

                    {/* Produit 5 */}
                    <CardProduit nomProduit={"NuLite"} imageProduit={NuLite} />

                    {/* Produit 6 */}
                    <div className="shadow-2xl h-[250px] w-full rounded-xl">
                        <p className="font-light text-[20px] text-center text-white bg-[#377A00] inline-block px-[15px] rounded-full relative left-[10px] top-[5px]">
                          iiQ Plus+
                        </p>
                        <Image
                            src={iiQ}
                            alt="Produit snowphyllforte"
                            className="object-cover h-[200px] w-auto mx-auto"
                        />
                    </div>

                    {/* Produit 7 */}
                    <CardProduit
                        nomProduit={"Double Stemcell"}
                        imageProduit={double}
                    />

                    {/* Produit 8 */}
                    <CardProduit
                        nomProduit={"Trible 3"}
                        imageProduit={triple3}
                    />

                    {/* Produit 9 */}
                    <CardProduit nomProduit={"H20"} imageProduit={h20} />
                </div>
                <div className="mt-[50px]">
                  <h2 className="font-bold text-[22px]">Phyto Science Gabon</h2>
                  <p className="font-regular text-[16px] leading-[24px]">
                      Pionnier du traitement des pathologies lourdes avec les
                      cellules souches végétales, Phyto science Gabon s&apos;engage à
                      offrir des solutions de pointe pour votre bien-être.
                  </p>
                  <Image
                        src={certificat}
                        alt="Certificat"
                        className="object-cover h-[230px] w-[90%] p-[10px] mx-auto mt-[30px]"
                  />
                </div>
            </div>
        </>
    );
}
