"use client";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardProduit = ({ nomProduit, imageProduit, description }) => {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <div className="shadow-2xl w-full rounded-xl p-4 bg-white">
                {/* Nom du produit */}
                <p className="font-semibold text-lg text-center text-white bg-[#377A00] px-4 py-1 rounded-full w-fit mx-auto mt-2">
                    {nomProduit}
                </p>

                {/* Image du produit */}
                <Image
                    src={imageProduit}
                    width={1000}
                    height={1000}
                    alt={`Produit ${nomProduit}`}
                    className="object-cover h-[300px] w-full p-4 rounded-lg"
                />

                {/* Bouton d'ouverture de la modal */}
                <Button
                    onClick={() => setOpenModal(true)}
                    className="text-[#377A00] border border-[#377A00] hover:bg-[#377A00] hover:text-white font-medium rounded-lg text-sm px-5 py-2 mt-4 transition-all duration-300 ease-in-out w-full"
                >
                    Voir les détails
                </Button>
            </div>

            {/* Modal */}
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    <Modal.Header>
                        <span className="text-xl font-bold text-[#377A00]">{nomProduit}</span>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4 text-gray-700">
                            <Image
                                src={imageProduit}
                                width={500}
                                height={500}
                                alt={`Produit ${nomProduit}`}
                                className="object-cover h-[200px] w-full rounded-lg mb-4"
                            />
                            <div dangerouslySetInnerHTML={{ __html: description }} className="text-md leading-relaxed" />
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={() => setOpenModal(false)} className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg">
                            Fermer
                        </Button>
                    </Modal.Footer>
                </motion.div>
            </Modal>
        </>
    );
};

export default CardProduit;
