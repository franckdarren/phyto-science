"use client";

import Image from "next/image";
import { useState } from "react";

import CardProduit from "./card";
import PreFooter from "../_components/pre-footer";

export default function Produits() {
    const data = [
        {
            id: 1,
            nom: "SnowPhyllForte",
            image: "/assets/SnowPhyllForte.png",
            description: "<ul> <li>- Permet de détoxifier l’organisme</li><li>- Transforme le pH d’un corps acide à unpHalcalin</li><li>- Favorise le transit intestinal</li><li>- Inhibe les radicaux libres présents dans l’organisme</li><li>- Favorisé une bonne oxygénation des cellules et des tissus ce qui accélère leur régénération</li><li>- Riche en protéines, en fibres, en vitaminesE,B1,B6,B9,en minéraux ( Zinc, Fer, Magnésium) et enacidesaminés.</li><li>- Riche en phytostérols qui favorisent labaisseducholestérol.</li><li>- Riche en lutéine, un antioxydant protecteur delarétine.</li><li>- Contribue à soigner les troubles urinaires, intestinaux,les angines.</li><li>- Il a des propriétés anti bactériens, anti bronchiques,hypoglycémiques, hypotenseurs, anti cholestérol,antithrombotiques, anti athérosclérotiques.</li></ul>",
        },
        {
            id: 2,
            nom: "Actual+",
            image: "/assets/actual+.jpg",
            description: "<p>La meilleur option qui vous aide à guérir et à récupérer de toutes les maladies, en particulier le diabète.<br>La meilleure façon de stimuler, de renforcer et de construire votre système immunitaire.</p>",
        },
        {
            id: 3,
            nom: "Cristall Cell",
            image: "/assets/crystal-cell.jpg",
            description: "<ul><li>- Riche en caroténoïdes, puissants antioxydantsqui</li><li>- Permettent de neutraliser les radicaux libres</li><li>- Bloque les effets nocifs des rayons UV</li><li>- Stimule la cicatrisation interne et externe</li><li>- Répare les cellules endommagées ou dysfonctionnantes</li><li>- Régule la pression artérielle grâce à la présencedulycopène</li><li>- Puissant anti-inflammatoire naturel et antidouleur</li><li>- Inhibe les sécrétions des toxines</li><li>- Améliore la fonction mentale</li><li>- Préserve la vision</li><li>- Redonne de l’éclat à la peau</li><li>- Stimule le système immunitaire.</li></ul>",
        },
        {
            id: 4,
            nom: "NuForte",
            image: "/assets/NuForte.jpg",
            description: "<ul><li>- Soutenir la construction musculaire</li><li>- Apporter de la satiété</li><li>- Aide à la digestion</li><li>- Augmenter le métabolisme</li><li>- Augmenter la combustion des graisses</li><li>- Réduire le cholestérol</li><li>- Prévenir l’ostéoporose</li><li>- Convient aux végétariens</li></ul>",
        },
        {
            id: 5,
            nom: "NuLite",
            image: "/assets/NuLite.jpg",
            description: "<ul><li>- Selles régulières</li><li>- Soulager la constipation</li><li>- Soutenir la santé digestive</li><li>- Renforcer l’immunité</li><li>- Aide à la perte de poids</li><li>- La combustion des graisses</li><li>- Améliorer le taux de cholestérol</li><li>- Maintenir le contrôle de la glycémie</li></ul>",
        },
        {
            id: 6,
            nom: "iiQ Plus",
            image: "/assets/iiQ-plus.jpg",
            description: "<p>AMÉLIORATION DE LA MÉMOIRE ET DE L’APPRENTISSAGE CHEZ L’ENFANT: Favorisez un meilleur rappel et une meilleure rétention de la mémoire pour améliorer vos compétences en communication, améliorer l’apprentissage et l’accès aux souvenirs.</p><br><p>AMÉLIORE LA CIRCULATION VASCULAIRE DES YEUX: Contient une variété de vitamines et de minéraux bénéfiques pour la santé des yeux qui peuvent améliorer la circulation sanguine globale autour des yeux.</p><br><p>DIMINUER LE RISQUE DE DÉMENCE CHEZ LES PERSONNES ÂGÉES: Une perte de mémoire et un déclin mental peuvent survenir en vieillissant. Boostez la puissance de votre cerveau et aiguisez la concentration.</p>",
        },
        {
            id: 7,
            nom: "Double Stemcell",
            image: "/assets/double-stemcell.png",
            description: "<ul><li>- La bonne circulation sanguine</li><li>- Stimule la régénération des cellules et réduit les cellules affectées à 86%</li><li>- Réduit les risques de prolifération des tumeurs grâce à sa teneur en polyphénols</li><li>- Régule l’index glycémique</li><li>- La présence de l’anthocyanine favorise le bon fonctionnement du cœur et régule le cholestérol</li><li>- Renforce le système immunitaire</li><li>- Booste l’énergie</li><li>- Améliore la digestion</li><li>- Prévient la régression oculaires et les rétinopathies Favorise la perte de poids</li><li>- Aide à la prévention des pathologies liées à l’insuffisance veineuse (Hémorroïdes, thrombose, artériosclérose, phlébite)</li><li>- Traite les infections urinaires grâce à ses propriétés antibiotiques.</li></ul>",
        },
        {
            id: 8,
            nom: "Triple Stemcell Miracle",
            image: "/assets/triple3.jpg",
            description: "<ul><li>- Réduire les tâches</li><li>- Réduire les rides</li><li>- Meilleure texture des compétences et teint</li><li>- Peau humide et souple</li><li>- Vitalité de peau améliorée</li></ul>",
        },
        { id: 9, nom: "H20 Stemcell", image: "/assets/h20.png", description: "<p>- Réparation et recharge des cellules</p><p>- Effet anti-libres radicaux et anti-viellissement</p><p>- Anti UV</p><p>- Apaisant, hydratant, blanchissant, restaure, nourrir, egayer et raffermir</p><p>- Efface les rides et réduit</p>" },
    ];

    return (
        <div className="my-[50px] px-[5%]">
            <h2 className="text-[26px] text-black font-bold mb-[20px] ">
                Tous les Produits
            </h2>
            <div className="flex flex-col items-center justify-center gap-[50px] md:grid md:grid-cols-2 lg:grid-cols-3">
                {/* Liste des produits */}
                {data.map((product) => (
                    <CardProduit
                        key={product.id}
                        nomProduit={product.nom}
                        imageProduit={product.image}
                        description={product.description}
                    />
                ))}
            </div>
        </div>
    );
}
