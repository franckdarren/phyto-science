import Image from "next/image";
import HotjarScript from "../../_components/HotjarScript";
import data from "../../data/actualites";
import ga from "../../../../public/assets/flag/🇬🇦 Gabon Flag Unveiled_ Colors, Meaning, Coat of Arms, Flag Map, and Similar Flags _ Mappr.jpeg";
import ci from "../../../../public/assets/flag/Image du drapeau de la Côte d'Ivoire.jpeg";
import gn from "../../../../public/assets/flag/Bandera 77 - Guinea.jpeg";
import ml from "../../../../public/assets/flag/Mali - Wikipedia.jpeg";
import bj from "../../../../public/assets/flag/Benín - Wikipedia, la enciclopedia libre.jpeg";
import cm from "../../../../public/assets/flag/drapeau du Cameroun.jpeg";
import gw from "../../../../public/assets/flag/Guinea-Bissau.jpeg";
import sn from "../../../../public/assets/flag/Fichier_Flag of Senegal_svg — Wikipédia.jpeg";
import cd from "../../../../public/assets/flag/Flag of Republic of the Congo.jpeg";
import cg from "../../../../public/assets/flag/Flag of DR Congo.jpeg";
import gq from "../../../../public/assets/flag/10 Reasons To Visit Equatorial Guinea.jpeg";
import mg from "../../../../public/assets/flag/Madagascar.jpeg";
import ne from "../../../../public/assets/flag/Drapeau du Niger — Wikipédia.jpeg";
import ng from "../../../../public/assets/flag/téléchargement.jpeg";
import td from "../../../../public/assets/flag/Flag of Chad.jpeg";

export default function PageActualites({ params }) {
  const actualite = data.find(
    (actualite) => actualite.id === parseInt(params.id)
  );
  return (
    <div>
      <HotjarScript />
      <div class="max-w-screen-lg mx-auto">
        <main class="mt-10">
          <div class="mb-4 md:mb-0 w-full mx-auto relative">
            <div class="px-4 lg:px-0">
              <h2 class="text-xl md:text-4xl font-semibold text-gray-800 leading-tight">
                {actualite.resume}
              </h2>
              <a
                href="#"
                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
              >
                Date: {actualite.date} <br />
                Heure : {actualite.heure} <br />
              </a>
            </div>
            <Image
              src={actualite.image}
              alt="image"
              width={300}
              height={100}
              className="object-cover w-[50%] mx-auto"
            ></Image>
          </div>

          <div class="flex flex-col lg:flex-row lg:space-x-12">
            <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
              <p class="pb-6">
                ✍ La biothérapie cellulaire végétale de phytoscience, une
                alternative sérieuse pour votre bien-être et la prise en charge
                des pathologies lourdes dites incurables
              </p>

              <p class="pb-6">
                ⏰ 18h30 (Côte d&apos;Ivoire, Togo , Burkina Faso , Sénégal ,
                Mali, Guinée Conakry , Guinée Bissau )
              </p>

              <p class="pb-6">
                ⏰ 19h30 (Bénin, Cameroun , Congo-Brazzaville, RDC,
                Guinée Equatoriale , Niger, Nigeria , Gabon , Tchad )
              </p>
              <p class="pb-6">
                ⏰ 21h30 ( Lubumbashi, Madagascar) Informez et invitez
                tous vos partenaires et proches
              </p>
              <div className="px-auto">
                <h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">
                  Lien pour se connecter en ligne sur Zoom 👇
                </h2>

                <button className="animate-pulse hover:animate-none text-[#377A00] text-[15px] bg-cyan-800 hover:bg-[#65973c] hover:text-white font-medium rounded-3xl px-5 py-2.5 w-auto mx-auto">
                  <a
                    href={actualite.lien}
                    class="pb-6 text-white "
                  >
                    {" "}
                    Rejoignez-nous
                  </a>
                </button>
                <p class="py-6">
                  {" "}
                  Informez et invitez tous vos partenaires et proches
                </p>
              </div>
              <p class="py-6">
                Mot de passe: {actualite.code} <br />
                Code réunion: {actualite.mdp}
              </p>
              <p class="pb-6 font-bold">
                Tu peux sauver une vie si tu partages le lien aux amis, familles
                et connaissances. Rien ne vaut la santé!!!
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
