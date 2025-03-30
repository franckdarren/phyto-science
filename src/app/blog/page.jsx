import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Ban from "../_components/ban";

const blogPosts = [
  {
    id: 1,
    title: "Thérapie Cellulaire: Phytosciences inaugure sa première convention au Gabon",
    excerpt:
      "PhytoScience a récemment organisé sa première convention au Gabon, réunissant des experts en thérapie cellulaire et des professionnels de la santé pour discuter des avancées dans le domaine des cellules souches végétales.",
    date: "24 mars 2025",
    author: "Équipe PhytoScience",
    image:
      "https://sjc.microlink.io/yJ8YX-M1e4ZBWFcKXq0rgvirnpSu8GVWJp15HqAEsQM_Z6cqgN-z27AIATczQ2hw_K2IwKXBuVb-LENdnAknGg.jpeg",
    category: "Événements",
    readTime: "5 min",
    featured: true,
  },
  {
    id: 2,
    title: "Les bienfaits des cellules souches végétales pour la santé",
    excerpt:
      "Découvrez comment les cellules souches végétales utilisées dans nos produits peuvent transformer votre santé et améliorer votre qualité de vie.",
    date: "15 février 2025",
    author: "Dr. Marie Ndong",
    image: "/placeholder.svg?height=400&width=600",
    category: "Recherche",
    readTime: "7 min",
    featured: false,
  },
  {
    id: 3,
    title: "PhytoScience Gabon participe au Forum International de la Santé Naturelle",
    excerpt:
      "Notre équipe a représenté le Gabon lors du Forum International de la Santé Naturelle qui s'est tenu à Dubaï le mois dernier.",
    date: "30 janvier 2025",
    author: "Service Communication",
    image: "/placeholder.svg?height=400&width=600",
    category: "Événements",
    readTime: "4 min",
    featured: false,
  },
  {
    id: 4,
    title: "Comment intégrer nos produits dans votre routine quotidienne",
    excerpt:
      "Nos experts vous donnent des conseils pratiques pour maximiser les bienfaits de nos produits dans votre routine quotidienne.",
    date: "12 janvier 2025",
    author: "Équipe Bien-être",
    image: "/placeholder.svg?height=400&width=600",
    category: "Conseils",
    readTime: "6 min",
    featured: false,
  },
  {
    id: 5,
    title: "Témoignage: Ma transformation grâce à Double Stemcell",
    excerpt: "Lisez l'histoire inspirante de Jean, qui a retrouvé sa vitalité et sa santé grâce à notre produit phare.",
    date: "5 décembre 2024",
    author: "Jean Moussavou",
    image: "/placeholder.svg?height=400&width=600",
    category: "Témoignages",
    readTime: "8 min",
    featured: false,
  },
  {
    id: 6,
    title: "PhytoScience s'engage pour l'environnement au Gabon",
    excerpt: "Découvrez notre nouvelle initiative de reforestation et de protection de la biodiversité gabonaise.",
    date: "20 novembre 2024",
    author: "Service Développement Durable",
    image: "/placeholder.svg?height=400&width=600",
    category: "Environnement",
    readTime: "5 min",
    featured: false,
  },
]

export default function BlogPage() {
  // Separate featured post from regular posts
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen flex flex-col">
   

      <main className="flex-1">
        
         <Ban image={"/assets/Acu.gif"} text={"Blog"} paragraph={"Restez informé des dernières nouvelles, événements et recherches de PhytoScience Gabon"}/>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8">À la une</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                  <Image
                    src={"/assets/blog_img.webp"}
                    unoptimized
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#377A00] text-white text-xs font-medium px-2.5 py-1 rounded">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 hover:text-[#377A00] transition-colors">
                    <Link href={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                  </h3>
                  <p className="text-slate-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center text-sm text-black/50 gap-4 mb-6">
                    <div className="flex items-center">
                    <Icon icon="line-md:calendar" width="24" height="24"  style={{color: "#377A00"}} />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                    <Icon icon="solar:user-outline" width="24" height="24"  style={{color: "#377A00"}} />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                    <Icon icon="iconamoon:clock-bold" width="24" height="24"  style={{color: "#377A00"}} />
                      {featuredPost.readTime} de lecture
                    </div>
                  </div>
                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center bg-[#377A00] hover:bg-[#377A00]/80 text-white font-medium rounded-full px-6 py-3 transition-colors"
                  >
                    Lire l&apos;article complet
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Regular Posts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Articles récents</h2>
            {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 hover:text-green-600 transition-colors">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap items-center text-sm text-slate-500 gap-4">
                      <div className="flex items-center">
                      <Icon icon="line-md:calendar" width="24" height="24"  style={{color: "#ffff"}} />
                        {post.date}
                      </div>
                      <div className="flex items-center">
                      <Icon icon="iconamoon:clock-bold" width="24" height="24"  style={{color: "#ffff"}} />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-white border border-green-500 text-green-600 hover:bg-green-50 font-medium rounded-full px-6 py-3 transition-colors">
                Voir plus d'articles
              </button>
            </div> */}

            Aucun autre article pour l&apos;instant
          </div>
        </section>
      </main>

    </div>
  )
}

