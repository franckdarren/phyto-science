import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import PreFooter from "./_components/pre-footer";
import HotjarScript from "./_components/HotjarScript";
export const metadata = {
  title: "PhytoScience Gabon Officielle",
  description:
    "Pionnier dans le traitement des pathologies lourdes avec cellules souches végétales, PhytoScience Gabon s'engage à offrir des solutions de pointe pour votre bien-être.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/icon" type="image" />
      </head>
      <body className="flex flex-col min-h-screen ">
        <HotjarScript />
        
          <Navbar />
          <div className="flex-grow">{children}</div>
        <PreFooter />
        <Footer className="mt-auto" />
        
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          defer
        ></script>
      </body>
    </html>
  );
}
