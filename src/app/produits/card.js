import Image from "next/image";

const CardProduit = ({ nomProduit, imageProduit, description }) => {
    return (
        <>
            <div className="shadow-2xl w-full rounded-xl">
                <p className="font-light text-[20px] text-center text-white bg-[#377A00] inline-block px-[15px] rounded-full relative left-[10px] top-[5px]">
                    {nomProduit}
                </p>
                <Image
                    src={imageProduit}
                    alt="Produit snowphyllforte"
                    className="object-cover h-[250px] w-full p-[20px] m-auto"
                />
                {/*  Modal toggle  */}
                <button
                    data-modal-target="static-modal"
                    data-modal-toggle="static-modal"
                    class="block text-[#377A00]  hover:bg-[#377A00] hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center relative top-[-10px] mx-auto "
                    type="button"
                >
                    Cliquez pour voir les détails
                </button>
            </div>

            {/* Modal */}

            <div
                id="static-modal"
                data-modal-backdrop="static"
                tabindex="-1"
                aria-hidden="true"
                class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    {/*  Modal content  */}
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/*  Modal header  */}
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Description du produit
                            </h3>
                            <button
                                type="button"
                                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="static-modal"
                            >
                                <svg
                                    class="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/*  Modal body  */}
                        <div class="p-4 md:p-5 space-y-4">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardProduit;
