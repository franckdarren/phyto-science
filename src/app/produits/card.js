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
                    width={100}
                    height={100}
                    alt="Produit snowphyllforte"
                    className="object-cover h-[250px] w-full p-[20px] m-auto"
                />

                {/* Modal */}
                <Button
                    onClick={() => setOpenModal(true)}
                    className="text-black hover:bg-[#377A00] hover:text-white font-medium rounded-lg text-sm px-5 text-center mx-auto mb-[10px]"
                >
                    Cliquer pour voir les détails
                </Button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>
                        Détail du produit - {nomProduit}
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-6">
                            <p className="text-base leading-relaxed text-gray-900">
                                {description}
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        </>
    );
};

export default CardProduit;
