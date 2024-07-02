import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import PreFooter from "./_components/pre-footer";

export const metadata = {
    title: "PhytoScience",
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
                <link
                    rel="icon"
                    href="/icon"
                    type="image"
                />
            </head>
            <body>
                <Navbar />
                <div>{children}</div>
                <PreFooter />
                <Footer />
                <script
                    src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
                    defer
                ></script>
            </body>
        </html>
    );
}
