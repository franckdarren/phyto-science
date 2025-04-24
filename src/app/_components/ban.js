"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react"; // Ajout de useRef pour cibler le conteneur

export default function Ban( {image, text, paragraph}) {
  const ref = useRef(null); // Référence pour le conteneur
  const { scrollYProgress } = useScroll({
    target: ref, // Cible le conteneur pour le défilement
    offset: ["start start", "end start"], // Déclenche l'animation dès le début du conteneur
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Déplace l'image de 0% à 50%

  return (
    <div ref={ref} className="h-[300px] w-full flex items-center justify-center relative overflow-hidden">
      <motion.div
        style={{ y }}
        className="w-full h-full"
      >
        <Image
          src={image}
          alt="image"
          height={1000}
          width={1000}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute flex text-center flex-col gap-5">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-3xl md:text-4xl lg:text-5xl"
        >
         {text} 
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-xl text-center"
        >
         {paragraph} 
        </motion.p>
      </div>
    </div>
  );
}