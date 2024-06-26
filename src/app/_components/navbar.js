import "../globals.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <Link className="px-[5px]" href="/">
        Accueil
      </Link>
      <Link className="px-[5px]" href="/produits">
        Produits
      </Link>
      <Link className="px-[5px]" href="/temoignages">
        Témoignages
      </Link>
      <Link className="px-[5px]" href="/actualites">
        Actualités
      </Link>
      <Link className="px-[5px]" href="/a-propos">
        A propos
      </Link>
    </>
  );
}
