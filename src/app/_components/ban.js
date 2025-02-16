"use client"

import Image from "next/image";
import { motion } from "framer-motion";

export default function Ban() {
  return (
    <>
      <div className="h-[300px] w-full flex items-center justify-center relative">
        <Image
          src="/assets/Yapily.gif"
          alt="image"
          height={1000}
          width={1000}
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="absolute flex text-center flex-col gap-5">
          {" "}
          <motion.h1
           initial={{ opacity: 0, y: -50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl"
          >
            Découvrez les dernières tendances en phytothérapie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-xl text-center"
          >
            Votre source d&apos;informations sur les cellules souches
          </motion.p>
        </div>
      </div>
    </>
  );
}
