import Image from "next/image";
import product from "../../../public/assets/product-nutrition-removebg-preview.png";

export default function Actualites() {
    return (
        <div className="my-[50px] px-[5%]">
            <h2 className="text-[26px] text-black font-bold mb-[20px] ">
                Actualités
            </h2>
            <div className="flex flex-col justify-center md:grid md:grid-cols-2 gap-[30px] md:gap-6 lg:grid-cols-3">
                {/* Actualité 1 */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <Image
                        src={product}
                        alt="Produit"
                        className="object-cover h-[240px] w-auto mx-auto"
                    />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
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
                        </a>
                    </div>
                </div>

                {/* Actualité 2 */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <Image
                        src={product}
                        alt="Produit"
                        className="object-cover h-[240px] w-auto mx-auto"
                    />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
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
                        </a>
                    </div>
                </div>

                {/* Actualité 3 */}
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <Image
                        src={product}
                        alt="Produit"
                        className="object-cover h-[240px] w-auto mx-auto"
                    />
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
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
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
