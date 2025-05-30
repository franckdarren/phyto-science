"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HotjarScript from "../../_components/HotjarScript";
import data from "../../data/actualites";
import ShareButtons from "../../_components/ShareButtons";
import Head from "next/head";

export default function PageActualites({ params }) {
  const actualite = data.find(
    (actualite) => actualite.id === parseInt(params.id)
  );

  const [url, setUrl] = useState("");

  useEffect(() => {
    // Récupérer l'URL complète côté client
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  }, []);

  const articleTitle = actualite.titre;
  const description = actualite.resume;

  return (
    <div>
      <Head>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={articleTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={actualite.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="PhytoScience Gabon" />
        <meta property="og:locale" content="fr_FR" />
      </Head>
      <HotjarScript />
      <div className="md:mx-20">
        <main className="mt-10">
          <div className="container mx-auto px-4">
            {/* Header Section */}
            <div className="mb-8 flex flex-col-reverse lg:flex-row gap-8">
              {/* Text Section */}
              <div className="lg:w-full">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                  {actualite.resume}
                </h2>
                <p className="text-xl text-green-700">
                  <strong>Date :</strong> {actualite.date} <br />
                  <strong>Heure :</strong> {actualite.heure}
                </p>
                {/* Image Section */}
                <div className="lg:flex hidden items-center justify-center w-full my-5">
                  <Image
                    src={actualite.image}
                    alt="Actualité"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-md lg:w-[50%]  object-cover  h-auto"
                  />
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row lg:gap-12">
                  {/* Main Text Content */}
                  <div className="lg:w-full mt-5 text-gray-700 text-lg leading-relaxed">
                    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                      {[
                        actualite.text1,
                        actualite.text2,
                        actualite.text3,
                        actualite.text4,
                      ].map((text, index) => (
                        <p key={index} className="font-semibold text-xl pb-6">
                          {text}
                        </p>
                      ))}
                    </div>


                    {/* Zoom Link Section */}
                    <div className="flex flex-col justify-center items-center mt-6">
                      <h2 className="md:text-2xl text-center text-gray-800 font-bold mb-4">
                        {actualite.text5}
                      </h2>
                      <a
                        href={actualite.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center text-white bg-[#5e9432] hover:bg-[#5e9432]/80 shadow-xl font-medium rounded-3xl px-3 py-2 transition-all duration-300 animate-shimmer bg-[linear-gradient(110deg,transparent,45%,#84cf46,55%,transparent)] bg-[length:200%_100%] duration-400 ease-out overflow-hidden group"
                      >
                        Rejoignez-nous
                      </a>
                      {/* <p className="text-gray-600 text-sm mt-4">
                        Informez et invitez tous vos partenaires et proches.
                      </p> */}
                    </div>

                    {/* Zoom Details */}
                    <div className="flex flex-col justify-center items-center mt-6">
                      <p className="text-lg">
                        {/* <strong>Mot de passe :</strong> */}
                        {actualite.code}
                      </p>
                      <p className="text-lg">
                        {/* <strong>Code réunion :</strong> */}
                        {actualite.mdp}
                      </p>
                    </div>

                    {/* Call to Action */}
                    <p className="mt-8 text-gray-800 text-center font-bold text-lg">
                      Tu peux sauver une vie si tu partages le lien aux amis,
                      familles et connaissances. Rien ne vaut la santé !!!
                    </p>
                  </div>
                </div>
                {/* Share Buttons Section */}
                <div className="w-full flex justify-center mt-10">
                  <ShareButtons
                    url={url}
                    title={articleTitle}
                    description={description}
                  />
                </div>
              </div>

              {/* Image Section */}
              <div className="flex lg:hidden lg:w-[50%] ">
                <Image
                  src={actualite.image}
                  alt="Actualité"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-md object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
