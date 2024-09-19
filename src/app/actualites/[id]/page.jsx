"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import HotjarScript from "../../_components/HotjarScript";
import data from "../../data/actualites";
import ShareButtons from '../../_components/ShareButtons';
import Head from 'next/head';

export default function PageActualites({ params }) {
  const actualite = data.find(
    (actualite) => actualite.id === parseInt(params.id)
  );

  const [url, setUrl] = useState('');

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
        <meta property="og:title" content={actualite.title} />
        <meta property="og:description" content={actualite.resume} />
        <meta property="og:image" content={actualite.image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
      </Head>
      <HotjarScript />
      <div className="max-w-screen-lg mx-auto">
        <main className="mt-10">
          <div className="mb-4 md:mb-0 w-full mx-auto relative">
            <div className="px-4 lg:px-0">
              <h2 className="text-xl md:text-4xl font-semibold text-gray-800 leading-tight">
                {actualite.resume}
              </h2>
              <a
                href="#"
                className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                Date: {actualite.date} <br />
                Heure : {actualite.heure} <br />
              </a>
            </div>
            <Image
              src={actualite.image}
              alt="image"
              width={500}
              height={500}
              className="object-cover w-full h-[500px] mx-auto"
            ></Image>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p className="pb-6">
                ✍ La biothérapie cellulaire végétale de phytoscience, une
                alternative sérieuse pour votre bien-être et la prise en charge
                des pathologies lourdes dites incurables
              </p>

              <p className="pb-6">
                ⏰ 18h30 (Côte d&apos;Ivoire, Togo , Burkina Faso , Sénégal ,
                Mali, Guinée Conakry , Guinée Bissau )
              </p>

              <p className="pb-6">
                ⏰ 19h30 (Bénin, Cameroun , Congo-Brazzaville, RDC,
                Guinée Equatoriale , Niger, Nigeria , Gabon , Tchad )
              </p>
              <p className="pb-6">
                ⏰ 21h30 ( Lubumbashi, Madagascar) Informez et invitez
                tous vos partenaires et proches
              </p>
              <div className="px-auto">
                <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                  Lien pour se connecter en ligne sur Zoom 👇
                </h2>

                <button className="animate-pulse hover:animate-none text-[#377A00] text-[15px] bg-cyan-800 hover:bg-[#65973c] hover:text-white font-medium rounded-3xl px-5 py-2.5 w-auto mx-auto">
                  <a
                    href={actualite.lien}
                    className="pb-6 text-white "
                  >
                    {" "}
                    Rejoignez-nous
                  </a>
                </button>
                <p className="py-6">
                  {" "}
                  Informez et invitez tous vos partenaires et proches
                </p>
              </div>
              <p className="py-6">
                Mot de passe: {actualite.code} <br />
                Code réunion: {actualite.mdp}
              </p>
              <p className="pb-6 font-bold">
                Tu peux sauver une vie si tu partages le lien aux amis, familles
                et connaissances. Rien ne vaut la santé!!!
              </p>
            </div>

          </div>
        </main>
        <ShareButtons url={url} title={articleTitle} description={description} />

      </div>
    </div>
  );
}
