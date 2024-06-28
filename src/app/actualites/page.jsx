import Image from "next/image";
import product from "../../../public/assets/product-nutrition-removebg-preview.png";

export default function Actualites() {
    return (
        <>
            <div className="flex flex-col justify-center my-[50px] md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3 mx-[3%]">
                {/* Actualité 1 */}
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <Image
                        src={product}
                        alt="Produit"
                        className="object-cover h-[240px] w-auto mx-auto"
                    />
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#377A00] rounded-lg hover:bg-[#65973c]"
                        >
                            Lire plus
                            <svg
                                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Actualité 2 */}
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <Image
                        src={product}
                        alt="Produit"
                        className="object-cover h-[240px] w-auto mx-auto"
                    />
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#377A00] rounded-lg hover:bg-[#65973c]"
                        >
                            Lire plus
                            <svg
                                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Actualité 3 */}
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow mx-auto">
                    <Image
                        src={product}
                        alt="Produit"
                        className="object-cover h-[240px] w-auto mx-auto"
                    />
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                                Noteworthy technology acquisitions 2021
                            </h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700">
                            Here are the biggest enterprise technology
                            acquisitions of 2021 so far, in reverse
                            chronological order.
                        </p>
                        <a
                            href="#"
                            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#377A00] rounded-lg hover:bg-[#65973c]"
                        >
                            Lire plus
                            <svg
                                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
