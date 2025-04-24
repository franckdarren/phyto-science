"use client";
import Image from "next/image";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { motion } from "framer-motion";

const CardProduit = ({ nomProduit, imageProduit, imageHover, description }) => {
    const [openModal, setOpenModal] = useState(false);
    const [isHovered, setIsHovered] = useState(false); // État pour gérer le survol

    return (
        <>
            <div
                className="shadow-2xl w-full rounded-xl p-4 bg-white"
                onMouseEnter={() => setIsHovered(true)} // Activer le survol
                onMouseLeave={() => setIsHovered(false)} // Désactiver le survol
            >
                {/* Nom du produit */}
                <p className="font-semibold text-lg text-center text-white bg-[#377A00] px-4 py-1 rounded-full w-fit mx-auto mt-2">
                    {nomProduit}
                </p>

                {/* Conteneur pour les images superposées */}
                <div className="relative h-[300px] w-full p-4 rounded-lg overflow-hidden">
                    {/* Image principale (toujours visible) */}
                    <Image
                        src={imageProduit}
                        width={1000}
                        height={1000}
                        alt={`Produit ${nomProduit}`}
                        className="object-cover h-full w-full"
                    />

                    {/* Image de survol (superposée avec animation d'opacité) */}
                    <motion.div
                        className="absolute top-0 left-0 w-full h-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }} // Gestion de l'opacité
                        transition={{ duration: 0.5 }} // Durée de l'animation
                    >
                        <Image
                            src={imageHover}
                            width={1000}
                            height={1000}
                            alt={`Produit ${nomProduit} (survol)`}
                            className="object-cover h-full w-full"
                        />
                    </motion.div>
                </div>

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