"use client";

import Button from "./_components/button";
import Image from "next/image";
import team from "../../public/assets/equipe.png";
import cellule from "../../public/assets/cellule.jpg";
import traitement from "../../public/assets/traitement.jpg";
import prevention from "../../public/assets/prevention.jpeg";
import recherche from "../../public/assets/recherche.jpeg";
import nuforte from "../../public/assets/NuForte.jpg";
import nulite from "../../public/assets/NuLite.jpg";
import snowphy from "../../public/assets/SnowPhyllForte.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import logo from "../../public/assets/logo phyto.png";
import certificat from "../../public/assets/certificat.jpg";
import iiQ from "../../public/assets/iiQ-plus.jpg";
import Bienvenue from "../../public/assets/Bienvenue12.png";
import baniereMpiga from "../../public/assets/mpiga-baniere.png";
import loba from "../../public/assets/loba.png";
import temoignage1 from "../../public/assets/temoignage1.jpg";
import temoignage2 from "../../public/assets/temoignage2.jpg";
import temoignage3 from "../../public/assets/temoignage3.jpg";
import temoignage4 from "../../public/assets/temoignage4.jpg";
import HotjarScript from "./_components/HotjarScript";
import { motion } from "framer-motion";

export default function Accueil() {
    return (
        <>
            <HotjarScript />
            {/* Header Carrousel */}

            <HeaderCarousel />
            {/* <BasicSlider /> */}

            {/* Section Qui sommes nous? */}
            <PresentationPhytoScience />

            {/* Section Présentation */}
            <Presentation />

            {/* Section fil d'actualité */}
            <Actualites />

            {/* Section Les Cellules Souches? */}
            <CelluleSouche />

            {/* Offres */}
            <OffreService />

            {/* Section témoignage */}
            <Temoignage />

            {/* Section Nos Produits */}
            <Produits />

            {/* Section Révolution technologique */}
            <RevolutionTechnologique />

            {/* Section localisation */}
            <Localisation />

            {/* Section contacts */}
            <Contacts />
        </>
    );
}

const HeaderCarousel = () => {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }} className="md:mx-10 my-5 md:my-14 h-[400px] gap-16 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-[80%] lg:w-[60%] flex flex-col gap-10">
                <div className="flex flex-col gap-4">
                    <motion.h1 initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }} className="text-5xl font-bold">Phytoscience Gabon</motion.h1>
                    <motion.p initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }} className="text-[#377A00] text-xl">                        Rejoignez une révolution du bien-être grâce à des solutions naturelles qui transforment la santé et ouvrent des perspectives uniques pour votre avenir financier.</motion.p>
                </div>
                <div className="flex gap-7"> <a
                    href="https://wa.me/+24107849012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-2 text-center text-white bg-[#5e9432] hover:bg-[#5e9432]/80 shadow-xl font-medium rounded-3xl px-3 py-2 transition-all duration-300 animate-shimmer bg-[linear-gradient(110deg,transparent,45%,#84cf46,55%,transparent)] bg-[length:200%_100%] duration-400 ease-out overflow-hidden group"
                >
                    Contactez-nous <Icon icon="stash:social-whatsapp-duotone" width="24" height="24" style={{ color: "#ffff" }} />
                </a>
                    <a className="hover:text-white duration-700 text-[#377A00] font-medium px-3 py-2 text-center hover:bg-[#377A00] border rounded-3xl border-[#377A00]" href="/actualites">En savoir plus</a></div>
            </div>
            <motion.div
                id="default-carousel"
                className="relative w-full"
                data-carousel="slide"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }} className="relative h-56 overflow-hidden md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <Image
                            src={Bienvenue}
                            alt="Banière"
                            className="bg-cover bg-center absolute block rounded-3xl w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:h-full lg:w-auto"
                        />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <Image
                            src={baniereMpiga}
                            alt="Banière madame Mpiga"
                            className="absolute bg-cover bg-center  block w-full rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:h-full lg:w-auto"
                        />
                    </div>
                    {/* <!-- Item trois --> */}
                    <div
                        className="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <Image
                            src={loba}
                            alt="Photo de madame Mpiga"
                            className="absolute bg-cover bg-center  block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 lg:h-full lg:w-auto"
                        />
                    </div>
                </motion.div>
                {/* <!-- Slider indicators --> */}
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="true"
                        aria-label="Slide 1"
                        data-carousel-slide-to="0"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 2"
                        data-carousel-slide-to="1"
                    ></button>
                    <button
                        type="button"
                        className="w-3 h-3 rounded-full"
                        aria-current="false"
                        aria-label="Slide 3"
                        data-carousel-slide-to="2"
                    ></button>
                </div>
                {/* <!-- Slider controls --> */}
                <button
                    type="button"
                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#377A00]/80 group-hover:bg-[#377A00]/80  group-focus:ring-4 dark:group-focus:ring-gray-800/70 group-focus:ring-white group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#377A00]/80 group-hover:bg-[#377A00]/80  group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </motion.div>
        </motion.div>
    );
};

const PresentationPhytoScience = () => {
    return (
        <div className="mt-80 lg:mt-10">
            <motion.div
                className="my-[50px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-[16px] lg:text-[20px] text-[#377A00] font-bold ">
                    Qui sommes-nous?
                </h2>
                <h2 className="text-center text-[26px] lg:text-[35px] text-black font-bold ">
                    PhytoScience GABON LTD.
                </h2>
            </motion.div>
            <div className="flex flex-col justify-center bg-[#EAF7EB] md:flex-row md:px-[20px] md:gap-[100px] md:py-[50px]">
                <div className="flex flex-col justify-center lg:w-[500px]">
                    <motion.p
                        className="text-black font-regular text-[18px] mb-[30px] px-[5%] md:px-[0] pt-[15px]"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Phyto Science est une entreprise mondiale de santé et de
                        bien-être, à la pointe de l&apos;innovation de produits et
                        engagée à aider les gens à prendre le contrôle de leur
                        santé, tant physique que financier.
                    </motion.p>
                </div>
                <Image
                    src={team}
                    alt="Team phytoscience"
                    className="object-cover h-[250px] w-full mt-[50px] lg:mt-[25px] mb-[25px] md:h-[150px] md:w-auto lg:h-[300px]"
                />
            </div>
        </div>
    );
};

const Presentation = () => {
    return (
        <div className="" id="a-propos">
            <motion.div
                className="my-[50px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-[16px] lg:text-[20px] text-[#377A00] font-bold ">
                    The GABON country Stokist
                </h2>
                <h2 className="text-center text-[26px] lg:text-[35px] text-black font-bold px-[15%]">
                    Thècle Valérie MPIGA Ep. HOLA
                </h2>
            </motion.div>
            <div className="flex flex-col justify-center bg-[#C9F0CD] shadow-xl md:flex-row md:gap-[70px] md:px-[50px] lg:px-[300px] lg:pb-[50px]">
                <div className="flex flex-col justify-center">
                    <motion.p
                        className="text-black text-center font-regular text-[18px] mb-[30px] px-[5%] md:px-[0] pt-[30px] md:pt-[0] lg:w-[500px]"
                        initial={{ opacity: 0, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        Chez PhytoScience, nous nous engageons à offrir des
                        produits de bien-être innovants et naturels, conçus pour
                        améliorer la santé et la qualité de vie de chacun.
                        <br />
                        Je suis ravie de partager avec vous notre vision et nos
                        solutions pour un avenir plus sain et équilibré. Merci
                        de votre attention et de votre intérêt pour nos
                        produits…
                    </motion.p>
                </div>
                <motion.img
                    src="assets/mme-mpiga.jpeg"
                    alt="Photo de madame Mpiga"
                    className="object-cover h-[400px] w-[300px] mt-[50px] mb-[100px] mx-auto lg:h-[450px] lg:w-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                />
            </div>
        </div>
    );
};

const Actualites = () => {
    return (
        <div className="bg-white flex flex-col justify-center py-[40px] mx-[8%] lg:mx-[25%] relative top-[-50px] lg:top-[-100px] rounded-[15px] shadow-xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200">
            <h2 className="text-[20px] font-bold text-center px-[60px] mb-[10px]">
                Soyez à jour sur notre fil d&apos;actualité
            </h2>
            <p className="font-regular text-[15.5px] leading-[23.3px] text-center px-[40px] mb-[30px]">
                Explorez notre science innovante des cellules souches végétales
                pour traiter les pathologies lourdes et bien plus encore.
            </p>
            <Button text="En savoir plus" route={"/actualites"} />
        </div>
    );
};

const CelluleSouche = () => {
    return (
        <div className="px-[8%] md:px-[4%] mb-[50px] lg:mb-[100px] md:flex md:flex-row md:gap-[50px] md:items-center">
            <Image
                src={cellule}
                alt="Team phytoscience"
                className="object-cover h-[250px] w-full mt-[40px] rounded-[15px] md:h-[200px] md:w-auto"
            />
            <div>
                <div className="mt-[40px] mb-[20px]">
                    <h2 className="text-[16px] text-[#377A00] font-bold ">
                        QU&apos;EST CE QUE
                    </h2>
                    <h2 className="text-[26px] text-black font-bold ">
                        Les cellules souches ?
                    </h2>
                </div>

                <div className="flex flex-col justify-center lg:block">
                    <p className="text-black font-regular text-[18px] mb-[30px]">
                        Les cellules souches sont des cellules spéciales
                        capables de se transformer en différents types de
                        cellules du corps (comme des cellules musculaires,
                        nerveuses, etc.) et de se renouveler. Elles sont
                        cruciales pour la réparation et le remplacement des
                        cellules endommagées, et ont un grand potentiel pour
                        traiter diverses maladies.
                    </p>
                </div>
            </div>
        </div>
    );
};

const OffreService = () => {
    return (
        <div className="bg-[#D0EBCF] px-[8%] md:px-[3%] pb-[70px]">
            <motion.div
                className="pt-[50px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-[16px] lg:text-[20px] text-[#377A00] font-bold  ">
                    Nos offres de services exclusives
                </h2>
                <h2 className="text-center text-[26px] lg:text-[35px] text-black font-bold mb-[25px]">
                    Services Principaux
                </h2>
            </motion.div>
            <div className="flex flex-col justify-center gap-[50px] md:grid md:grid-cols-3 md:gap-[10px] lg:px-[15%] lg:gap-[25px]">
                {/* Card 1 */}
                <div className="w-[95%] md:w-[100%] mx-auto bg-white rounded-lg shadow-xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200">
                    <Image
                        src={traitement}
                        alt="Image traitement"
                        className="object-cover h-[200px] w-full rounded-t-lg"
                    />
                    <div className="my-[20px] px-[40px] md:px-[10px]">
                        <h3 className="font-bold text-[20px] text-center mb-[10px]">
                            Traitement
                        </h3>
                        <p className="font-regular text-[15.5px] text-center leading-[24px] pb-[10px]">
                            Traitement unique et efficace grâce aux cellules
                            souches végétales.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="w-[95%]md:w-[100%] mx-auto bg-white rounded-lg shadow-xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200">
                    <Image
                        src={prevention}
                        alt="Image traitement"
                        className="object-cover h-[200px] w-full rounded-t-lg"
                    />
                    <div className="my-[20px] px-[40px] md:px-[10px]">
                        <h3 className="font-bold text-[20px] text-center mb-[10px]">
                            Prévention
                        </h3>
                        <p className="font-regular text-[15.5px] text-center leading-[24px] pb-[10px]">
                            Programmes de prévention personnalisés pour une
                            santé globale et optimale.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="w-[95%] md:w-[100%] mx-auto bg-white rounded-lg shadow-xl transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-200">
                    <Image
                        src={recherche}
                        alt="Image traitement"
                        className="object-cover h-[200px] w-full rounded-t-lg"
                    />
                    <div className="my-[20px] px-[40px] md:px-[10px]">
                        <h3 className="font-bold text-[20px] text-center mb-[10px]">
                            Recherche
                        </h3>
                        <p className="font-regular text-[15.5px] text-center leading-[24px] pb-[10px]">
                            Recherche continue pour offrir les meilleurs soins
                            naturels possibles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Temoignage = () => {
    return (
        <div className="mb-[50px]">
            <motion.div
                className="my-[50px]"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-[16px] lg:text-[20px] text-[#377A00] font-bold ">
                    Témoignages Vérifiés
                </h2>
                <h2 className="text-center text-[26px] lg:text-[35px] px-[20px] text-black font-bold ">
                    Découvrez les différents récits
                </h2>
            </motion.div>
            <div className="">
                <div className="grid grid-cols-2 gap-3 lg:px-[200px] px-[2%]">
                    {/* Témoignage 1 */}
                    <a href="/temoignages">
                        <Image
                            src={temoignage1}
                            alt="Image traitement"
                            className="h-[150px] md:h-[300px] w-full rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                        />
                    </a>
                    {/* Témoignage 2 */}
                    <a href="/temoignages">
                        <Image
                            src={temoignage2}
                            alt="Image traitement"
                            className="h-[150px] md:h-[300px] w-full rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                        />
                    </a>
                    {/* Témoignage 3 */}
                    <a href="/temoignages">
                        <Image
                            src={temoignage3}
                            alt="Image traitement"
                            className="h-[150px] md:h-[300px] w-full rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                        />
                    </a>
                    {/* Témoignage 4 */}
                    <a href="/temoignages">
                        <Image
                            src={temoignage4}
                            alt="Image traitement"
                            className="h-[150px] md:h-[300px] w-full rounded-lg transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-105 duration-200"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Produits = () => {
    return (
        <div className="mb-[80px]">
            <div className="my-[50px]">
                <h2 className="text-center text-[16px] lg:text-[20px] text-[#377A00] font-bold mb-[5px]">
                    Nos Produits
                </h2>
                <h2 className="text-center text-[26px] lg:text-[35px] text-black font-bold px-[10px] leading-[26px]">
                    100% Bio à base de cellule souche
                </h2>
            </div>
            <div className="h-[200px]">
                {/* Carrousel produit */}
                <div className="">
                    <div
                        id="default-carousel"
                        className="relative w-full"
                        data-carousel="slide"
                    >
                        <div className="relative h-56 overflow-hidden md:h-96">
                            {/* <!-- Item 1 --> */}
                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <Image
                                    src={nuforte}
                                    alt="Image NuForte"
                                    className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-[500px] md:w-auto h-[300px] w-auto lg:h-[400px]"
                                />
                            </div>
                            {/* <!-- Item 2 --> */}
                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <Image
                                    src={nulite}
                                    alt="Image NuLite"
                                    className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-[500px] md:w-auto h-[300px] w-auto lg:h-[400px]"
                                />
                            </div>
                            {/* <!-- Item 3 --> */}
                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <Image
                                    src={snowphy}
                                    alt="Image Snowphy"
                                    className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-[500px] md:w-auto lg:h-[300px]"
                                />
                            </div>
                            {/* <!-- Item 4 --> */}
                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <Image
                                    src={iiQ}
                                    alt="Image iiG Plus"
                                    className="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 md:h-[400px] md:w-auto h-[240px] w-auto lg:h-[300px]"
                                />
                            </div>
                        </div>
                        {/* <!-- Slider indicators --> */}
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="true"
                                aria-label="Slide 1"
                                data-carousel-slide-to="0"
                            ></button>
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 2"
                                data-carousel-slide-to="1"
                            ></button>
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 3"
                                data-carousel-slide-to="2"
                            ></button>
                            <button
                                type="button"
                                className="w-3 h-3 rounded-full"
                                aria-current="false"
                                aria-label="Slide 4"
                                data-carousel-slide-to="3"
                            ></button>
                        </div>
                        {/* <!-- Slider controls --> */}
                        <button
                            type="button"
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 1 1 5l4 4"
                                    />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button
                            type="button"
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next
                        >
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg
                                    className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 9 4-4-4-4"
                                    />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="my-[50px] flex flex-col md:mt-[250px] md:flex-row md:items-center md:justify-between lg:mx-[15%]">
                <div className="md:w-[70%]">
                    <h2 className="text-center md:text-left  text-[26px] text-black font-bold px-[10px] md:px-0 leading-[26px]">
                        Produits phytoscience
                    </h2>
                    <p className="md:text-left text-black text-center font-regular text-[20px] mb-[30px] px-[30px] md:px-0 pt-[20px] md:pl-[30px]">
                        N&apos;hésitez pas à en apprendre un peu plus sur les biens
                        faits de nos différents produits.
                    </p>
                </div>
                <Link
                    href="/produits"
                    className="text-white text-[15px] bg-[#377A00] hover:bg-[#65973c]  font-medium rounded-3xl px-5 py-2.5 w-auto mx-auto"
                >
                    Voir plus de produits
                </Link>
            </div>
        </div>
    );
};

const RevolutionTechnologique = () => {
    return (
        <div className="bg-[#377A00] flex flex-col justify-center py-[40px] mx-[5%] rounded-[15px] shadow-xl">
            <h2 className="text-white text-[26px] lg:text-[32px] font-bold text-center px-[10px] mb-[10px]">
                Rejoignez la Révolution Biotechnologique
            </h2>
            <p className="text-white font-regular text-[18px] leading-[23.3px] text-center px-[40px] mb-[30px] lg:px-[30%]">
                Contactez-nous dès aujourd&apos;hui pour découvrir comment nos
                traitements par cellules souches peuvent vous aider.
            </p>

            {/* Bouton personalisé */}
            <Link
                href="https://wa.me/+24107849012"
                target="_blank"
                className=" hover:animate-none flex gap-3 text-[#377A00] text-[15px] bg-[#EFEFEF] hover:scale-110 duration-200 font-medium rounded-3xl px-5 py-2.5 w-auto mx-auto"
            >
                Nous contacter <Icon icon="stash:social-whatsapp-duotone" width="24" height="24" style={{ color: "#377A00" }} />
            </Link>
        </div>
    );
};

const Localisation = () => {
    return (
        <div>
            <motion.div
                className="mt-[70px] mb-[30px] flex flex-col"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-center text-[26px] lg:text-[32px] text-black font-bold px-[30px] leading-[26px]">
                    Découvrez notre magasin en personne!
                </h2>
                <p className="text-black text-center font-regular text-[18px] px-[30px] pt-[20px] lg:px-[30%]">
                    Utilisez la carte interactive sur notre site pour trouver
                    facilement notre emplacement et profiter d&apos;une expérience
                    d&apos;achat exceptionnelle.
                </p>
            </motion.div>
            <div className="h-[300px] md:h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d34846.70753050023!2d9.414189763506515!3d0.40919691942453285!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjQnMzMuNyJOIDnCsDI2JzIxLjciRQ!5e1!3m2!1sfr!2sga!4v1719524659687!5m2!1sfr!2sga"
                    width=""
                    className="w-full h-[300px] md:h-[400px]"
                    height=""
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

const Contacts = () => {
    return (
        <div className="bg-[#F3F7EC] md:hidden">
            <Image
                src={logo}
                alt="Team phytoscience"
                className="object-cover h-[100px] w-auto mx-auto"
            />
            <p className="text-black text-center font-regular text-[20px] pt-[30px]">
                Lundi-vendredi: 9h - 17h <br />
                Samedi: 9h - 14h
            </p>
            <p className="text-black text-center font-medium text-[20px] pt-[50px]">
                Nos réseaux sociaux:
            </p>
            {/* Logo des reseaux sociaux */}
            <div className="flex justify-center">
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=61562905713043" className="inline-flex items-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="black"
                            d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                        />
                    </svg>
                </a>

                {/* Tiktok */}
                <a
                    href="#"
                    className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40px"
                        height="40px"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="black"
                            d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2m5.939 7.713v.646a.37.37 0 0 1-.38.37a5.364 5.364 0 0 1-2.903-1.108v4.728a3.938 3.938 0 0 1-1.18 2.81a4.011 4.011 0 0 1-2.87 1.17a4.103 4.103 0 0 1-2.862-1.17a3.98 3.98 0 0 1-1.026-3.805c.159-.642.48-1.232.933-1.713a3.58 3.58 0 0 1 2.79-1.313h.82v1.703a.348.348 0 0 1-.39.348a1.918 1.918 0 0 0-1.23 3.631c.27.155.572.246.882.267c.24.01.48-.02.708-.092a1.928 1.928 0 0 0 1.313-1.816V5.754a.359.359 0 0 1 .359-.36h1.415a.359.359 0 0 1 .359.34a3.303 3.303 0 0 0 1.282 2.245a3.25 3.25 0 0 0 1.641.636a.37.37 0 0 1 .338.35z"
                        />
                    </svg>
                </a>
            </div>
            <p className="text-black text-center font-medium text-[20px] pt-[50px]">
                Contactez-nous
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                className="mx-auto"
            >
                <path
                    fill="black"
                    d="M12 2C7.589 2 4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12c0-4.411-3.589-8-8-8m0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4"
                />
            </svg>
            <p className="text-black text-center font-regular text-[17px] pt-[5px]">
                Phyto Science Gabon LTD
            </p>
            <p className="text-black text-center font-regular text-[17px] px-[10%] pt-[5px] pb-[50px]">
                Nous sommes situé aux tours Santullo derrière le Ministère des
                Eaux et Forêt
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                className="mx-auto"
            >
                <path
                    fill="black"
                    d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"
                />
            </svg>
            <p className="text-blue-700 text-center font-regular text-[17px] pt-[5px]">
                <a href="tel:+241062104650">+ 241 062 10 46 50</a>
            </p>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                className="mx-auto mt-[50px]"
            >
                <g fill="none" stroke="currentColor" strokeWidth="2">
                    <rect width="16" height="12" x="4" y="6" rx="2" />
                    <path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9" />
                </g>
            </svg>
            <p className="text-blue-600 text-center font-regular text-[17px] pt-[5px] pb-[50px]">
                <a href="mailto:phytoscience@gmail.com">phytoscience@gmail.com</a>
            </p>
            <div className="pb-[50px]">
                <p className="text-black text-center font-medium text-[20px] pt-[5px] pb-[10px]">
                    Nos certificats
                </p>
                <Image
                    src={certificat}
                    alt="Certificat"
                    className="object-cover h-[150px] w-[210px] mx-auto"
                />
            </div>
        </div>
    );
};
