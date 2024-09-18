import Image from "next/image";
import imageArticle from "../../../../../public/assets/celule.jpg"
import HotjarScript from "../../../_components/HotjarScript";

export default function PageSeminaire() {
    return (
        <div>
            <HotjarScript />
            <div class="max-w-screen-lg mx-auto">
                <main class="mt-10">
                    <div class="mb-4 md:mb-0 w-full mx-auto relative">
                        <div class="px-4 lg:px-0">
                            <h2 class="text-xl md:text-4xl font-semibold text-gray-800 leading-tight">
                            BONJOUR  Une thérapie novatrice s'invite chez vous grâce au  Zoom conférence.
                            </h2>
                            <a
                                href="#"
                                class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                            >
                                Date: Mardi 17/09/2024 <br />
Heure : 19h30

                            </a>
                        </div>
                        <Image
                            src={imageArticle}
                            alt="image"
                            className="object-cover w-[50%] mx-auto">
                        </Image>
                    </div>

                    <div class="flex flex-col lg:flex-row lg:space-x-12">
                        <div class="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p class="pb-6">✍ La biothérapie cellulaire végétale de phytoscience, une alternative sérieuse pour votre bien-être et la prise en charge des pathologies lourdes dites incurables
                            </p>

                            <p class="pb-6">⏰ 18h30 (Côte d'Ivoire🇨🇮, Togo 🇹🇬, Burkina Faso 🇧🇫, Sénégal 🇸🇳, Mali🇲🇱, Guinée Conakry 🇬🇳, Guinée Bissau 🇬🇼) 
                            </p>

                            <p class="pb-6">⏰ 19h30 (Bénin 🇧🇯 Cameroun 🇨🇲 , Congo-Brazzaville 🇨🇬 
🇨🇩 RDC, Guinée Equatoriale 🇬🇶, Niger 🇳🇪, Nigeria 🇳🇬, Gabon 🇬🇦, Tchad 🇹🇩) 

                                </p>
                                <p class="pb-6">⏰ 21h30 ( 🇨🇩 RDC Lubumbashi,🇲🇬 Madagascar)  
                             Informez et invitez tous vos partenaires et proches
</p>
<div className="px-auto">
    
<h2 class="text-2xl text-gray-800 font-semibold mb-4 mt-4">Lien pour se connecter en ligne sur Zoom 👇</h2>

<button className="animate-pulse hover:animate-none text-[#377A00] text-[15px] bg-cyan-800 hover:bg-[#65973c] hover:text-white font-medium rounded-3xl px-5 py-2.5 w-auto mx-auto"><a href=" https://us02web.zoom.us/j/9227805479?pwd=OGtyaWF6NG1SaWplc1JaeVphMDFJUT09" class="pb-6 text-white "> Rejoignez-nous
</a></button>
<p class="py-6"> Informez et invitez tous vos partenaires et proches
</p>
</div>
<p class="py-6">Mot de passe: 000 <br />
Code réunion: 9227805479
</p>
<p class="pb-6 font-bold">Tu peux sauver une vie si tu partages le lien aux amis, familles et connaissances. Rien ne vaut la santé
</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}