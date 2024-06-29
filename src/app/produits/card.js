"use client";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const CardProduit = ({ nomProduit, imageProduit, description }) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <div className="shadow-2xl w-full rounded-xl">
                {/* Nom du produit */}
                <p className="font-light text-[20px] text-center text-white bg-[#377A00] inline-block px-[15px] rounded-full relative left-[10px] top-[5px]">
                    {nomProduit}
                </p>

                {/* Image du produit */}
                <Image
                    src={imageProduit}
                    width={200}
                    height={250}
                    alt="Produit snowphyllforte"
                    className="object-cover h-[300px] w-full p-[20px] m-auto"
                />

                {/* Modal */}
                <Button
                    onClick={() => setOpenModal(true)}
                    className="text-[#377A00] md:hover:bg-[#377A00] md:hover:text-white font-medium rounded-lg text-sm px-5 text-center mx-auto mb-[10px] active:text-white"
                >
                    Cliquer pour voir les détails
                </Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>
                        Détails
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                        <div dangerouslySetInnerHTML={{ __html: description }} />
                            {/* <p className="text-base leading-relaxed text-gray-900">
                                {description}
                            </p> */}
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default CardProduit;
