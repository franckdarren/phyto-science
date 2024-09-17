import Image from "next/image";
import actualites from "../data/actualites";
import Link from "next/link";
import HotjarScript from "../_components/HotjarScript";

export default function Actualites() {
    const lim = 90;

    return (
        <div className="my-[50px] px-[5%]">
            <HotjarScript />
            <h2 className="text-[26px] text-black font-bold mb-[20px] ">
                Actualités
            </h2>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-[30px] md:gap-6 lg:grid-cols-3">

                {/* Actualités */}
                {actualites.map((actualite) => (
                    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto" key={actualite.id}>
                        <Image
                            src={actualite.image}
                            width={300}
                            height={240}
                            alt="Produit"
                            className="object-cover h-[240px] w-auto mx-auto"
                        />
                        <div className="p-5">
                            <a href={actualite.lien}>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                    {actualite.titre}
                                </h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">
                                {actualite.resume.length>lim? actualite.resume.substring(0, lim) + "...": actualite.resume}
                            </p>
                            <Link
                                href={actualite.lien}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#377A00] rounded-lg hover:bg-[#65973c]"
                            >
                                Lire plus
                                <svg
                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
