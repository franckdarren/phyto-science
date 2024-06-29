"use client";

import Image from "next/image";
import { useState } from "react";

import CardProduit from "./card";
import PreFooter from "../_components/pre-footer";

export default function Produits() {
    const data = [
        { id: 1, nom: "SnowPhyllForte", image: "/assets/SnowPhyllForte.png", description: "Test 1" },
        { id: 2, nom: "Actual+", image: "/assets/actual+.jpg", description: "Test 2" },
        { id: 3, nom: "Cristall Cell", image: "/assets/crystal-cell.jpg", description: "Test 3" },
        { id: 4, nom: "NuForte", image: "/assets/NuForte.jpg", description: "Test 4" },
        { id: 5, nom: "NuLite", image: "/assets/NuLite.jpg", description: "Test 5" },
        { id: 6, nom: "iiQ Plus", image: "/assets/iiQ-plus.jpg", description: "Test 6" },
        { id: 7, nom: "Double Stemcell", image: "/assets/double-stemcell.png", description: "Test 7" },
        { id: 8, nom: "Trible 3", image: "/assets/triple3.jpg", description: "Test 8" },
        { id: 9, nom: "H20", image: "/assets/h20.png", description: "Test 9" },
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
