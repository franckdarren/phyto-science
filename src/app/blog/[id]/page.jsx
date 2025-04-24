"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { notFound } from "next/navigation";
import ShareButtons from "../../_components/ShareButtons";

// This would typically come from a database or API
const blogPosts = [
  {
    id: "1",
    title: "Thérapie Cellulaire: Phytosciences inaugure sa première convention au Gabon",
    content: `
      <p class="mb-4">PhytoScience a récemment organisé sa première convention au Gabon, réunissant des experts en thérapie cellulaire et des professionnels de la santé pour discuter des avancées dans le domaine des cellules souches végétales.</p>
      
      <p class="mb-4">L'événement, qui s'est tenu le 24 mars 2025 à Libreville, a attiré plus de 200 participants, dont des médecins, des chercheurs et des passionnés de médecine naturelle. La convention a été inaugurée par Madame Thècle Valérie MPIGA Ep. HOLA, représentante de PhytoScience au Gabon, en présence de Madame Ela Tan, directrice internationale de PhytoScience.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Un événement majeur pour la santé au Gabon</h3>
      
      <p class="mb-4">Cette première convention marque une étape importante dans le développement de PhytoScience au Gabon et en Afrique centrale. Les participants ont pu découvrir les dernières innovations en matière de thérapie cellulaire à base de plantes et comprendre comment ces avancées peuvent transformer le paysage de la santé au Gabon.</p>
      
      <p class="mb-4">"Nous sommes ravis de l'enthousiasme et de l'intérêt manifestés par les professionnels de la santé gabonais pour nos solutions naturelles", a déclaré Madame Ela Tan lors de son discours d'ouverture. "Notre mission est d'apporter des solutions de santé innovantes et accessibles à tous, et cette convention est une étape cruciale dans cette direction."</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Des produits innovants basés sur la recherche scientifique</h3>
      
      <p class="mb-4">Au cours de la convention, les experts de PhytoScience ont présenté leurs produits phares, notamment le Double Stemcell, qui utilise des cellules souches végétales pour stimuler la régénération cellulaire et améliorer la santé globale.</p>
      
      <p class="mb-4">Des témoignages de clients satisfaits ont également été partagés, illustrant l'impact positif que ces produits ont eu sur leur santé et leur bien-être. Plusieurs médecins présents ont exprimé leur intérêt pour intégrer ces solutions naturelles dans leurs pratiques médicales.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Perspectives d'avenir</h3>
      
      <p class="mb-4">PhytoScience prévoit d'organiser d'autres événements similaires dans différentes régions du Gabon pour sensibiliser davantage de personnes aux bienfaits de la thérapie cellulaire à base de plantes.</p>
      
      <p class="mb-4">"Notre objectif est de rendre ces solutions accessibles à tous les Gabonais, quelle que soit leur région", a expliqué Madame MPIGA. "Nous croyons fermement que la santé naturelle est l'avenir, et nous sommes déterminés à jouer un rôle de premier plan dans cette révolution."</p>
      
      <p class="mb-4">La convention s'est conclue par une session de questions-réponses animée, suivie d'une exposition des produits PhytoScience où les participants ont pu découvrir et tester les différentes solutions proposées par l'entreprise.</p>
    `,
    date: "24 mars 2025",
    author: "Équipe PhytoScience",
    image:
      "https://sjc.microlink.io/yJ8YX-M1e4ZBWFcKXq0rgvirnpSu8GVWJp15HqAEsQM_Z6cqgN-z27AIATczQ2hw_K2IwKXBuVb-LENdnAknGg.jpeg",
    category: "Événements",
    readTime: "5 min",
    tags: ["convention", "thérapie cellulaire", "santé", "Gabon", "cellules souches"],
  },
  {
    id: "2",
    title: "Les bienfaits des cellules souches végétales pour la santé",
    content: `
      <p class="mb-4">Découvrez comment les cellules souches végétales utilisées dans nos produits peuvent transformer votre santé et améliorer votre qualité de vie.</p>
      
      <p class="mb-4">Les cellules souches végétales représentent une avancée majeure dans le domaine de la santé naturelle. Contrairement aux cellules souches animales ou humaines, elles ne posent aucun problème éthique et offrent des bienfaits remarquables pour la santé humaine.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Qu'est-ce que les cellules souches végétales?</h3>
      
      <p class="mb-4">Les cellules souches végétales sont des cellules non différenciées présentes dans les plantes, capables de se transformer en n'importe quel type de cellule végétale. Elles possèdent une capacité de régénération exceptionnelle qui peut être bénéfique pour les cellules humaines lorsqu'elles sont correctement extraites et formulées.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Bienfaits pour la santé</h3>
      
      <p class="mb-4">Les recherches scientifiques ont démontré que les cellules souches végétales peuvent offrir de nombreux avantages pour la santé humaine:</p>
      
      <ul class="list-disc pl-6 mb-4">
        <li class="mb-2">Stimulation de la régénération cellulaire</li>
        <li class="mb-2">Renforcement du système immunitaire</li>
        <li class="mb-2">Amélioration de la circulation sanguine</li>
        <li class="mb-2">Réduction de l'inflammation</li>
        <li class="mb-2">Ralentissement du vieillissement cellulaire</li>
      </ul>
      
      <p class="mb-4">Ces bienfaits font des cellules souches végétales un allié précieux pour maintenir une bonne santé et prévenir diverses affections.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Les produits PhytoScience à base de cellules souches végétales</h3>
      
      <p class="mb-4">Chez PhytoScience, nous avons développé une gamme de produits innovants utilisant les cellules souches de plantes soigneusement sélectionnées pour leurs propriétés bénéfiques.</p>
      
      <p class="mb-4">Notre produit phare, le Double Stemcell, combine les cellules souches de deux plantes puissantes: la pomme suisse et l'arganier du Maroc. Cette formulation unique offre une synergie d'action qui maximise les bienfaits pour votre santé.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Témoignages et résultats</h3>
      
      <p class="mb-4">De nombreux utilisateurs de nos produits à base de cellules souches végétales ont rapporté des améliorations significatives de leur santé et de leur bien-être général:</p>
      
      <blockquote class="border-l-4 border-green-500 pl-4 italic my-4">
        "Après deux mois d'utilisation du Double Stemcell, j'ai constaté une amélioration remarquable de mon énergie et de ma vitalité. Mes problèmes digestifs chroniques ont également diminué considérablement." - Marie N., 52 ans
      </blockquote>
      
      <p class="mb-4">Ces témoignages confirment ce que la science nous a déjà montré: les cellules souches végétales représentent une approche prometteuse pour améliorer la santé de façon naturelle.</p>
      
      <h3 class="text-xl font-bold mt-8 mb-4">Conclusion</h3>
      
      <p class="mb-4">Les cellules souches végétales offrent une solution naturelle et efficace pour améliorer votre santé et votre bien-être. Chez PhytoScience, nous sommes fiers d'être à l'avant-garde de cette innovation et de proposer des produits de qualité qui peuvent transformer votre vie.</p>
      
      <p class="mb-4">Pour en savoir plus sur nos produits à base de cellules souches végétales, n'hésitez pas à nous contacter ou à consulter notre catalogue de produits.</p>
    `,
    date: "15 février 2025",
    author: "Dr. Marie Ndong",
    image: "/placeholder.svg?height=400&width=600",
    category: "Recherche",
    readTime: "7 min",
    tags: ["cellules souches", "santé naturelle", "recherche", "bien-être", "innovation"],
  },
]

export default function BlogPostPage({ params }) {
  const post = blogPosts.find((post) => post.id === params.id)


  

  const articleTitle = post.title;
  const description = post.content;


  const [url, setUrl] = useState("");
  
    useEffect(() => {
      // Récupérer l'URL complète côté client
      const currentUrl = window.location.href;
      setUrl(currentUrl);
    }, []);

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
 

      <main className="flex-1">
        <article>
          {/* Hero section with image */}
          <div className="relative h-[300px] ">
            <Image src={"/assets/blog_img.webp"} alt={post.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="container mx-auto">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
                >
                  {/* <ArrowLeft className="h-4 w-4 mr-2" /> */}
                  Retour au blog
                </Link>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center text-sm text-white/80 gap-4">
                  <div className="flex items-center">
                  <Icon className="mr-2" icon="line-md:calendar" width="24" height="24"  style={{color: "#fff"}} />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                  <Icon className="mr-2" icon="solar:user-outline" width="24" height="24"  style={{color: "#fff"}} />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                  <Icon className="mr-2" icon="iconamoon:clock-bold" width="24" height="24"  style={{color: "#fff"}} />
                    {post.readTime} de lecture
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Article content */}
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-12 gap-8">
              {/* Main content */}
              <div className="col-span-12 lg:col-span-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }}></div>

    

                {/* Share */}
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-lg font-bold mb-4 flex items-center">
                    {/* <Share2 className="h-5 w-5 mr-2" /> */}
                    Partager cet article
                  </h3>
                  <div className="flex gap-4">
                  <ShareButtons
                    url={url}
                    title={articleTitle}
                    description={description}
                  />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-span-12 lg:col-span-4">
                <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
                  <h3 className="text-xl font-bold mb-6">Articles similaires</h3>
                  <div className="space-y-6">
                    {/* {blogPosts
                      .filter((p) => p.id !== post.id)
                      .slice(0, 3)
                      .map((relatedPost) => (
                        <div key={relatedPost.id} className="flex gap-4">
                          <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                            <Image
                              src={"/assets/card.jpg"}
                              alt={relatedPost.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium hover:text-green-600 transition-colors">
                              <Link href={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                            </h4>
                            <p className="text-sm text-gray-500 mt-1">{relatedPost.date}</p>
                          </div>
                        </div>
                      ))} */}


                      Restez à l&apos;affut de nos évènements
                  </div>

                  <div className="mt-8 pt-6 border-t">
                    <h3 className="text-xl font-bold mb-4">Catégories</h3>
                    <div className="flex flex-wrap gap-2">
                      {Array.from(new Set(blogPosts.map((p) => p.category))).map((category) => (
                        <Link
                          key={category}
                          href={`/blog/categorie/${category.toLowerCase()}`}
                          className="bg-white hover:bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full border transition-colors"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>


    </div>
  )
}

