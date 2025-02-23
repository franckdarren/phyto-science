
import Ban from "../_components/ban"



export default function RootLayout({ children }) {
  return (
    <div >
        <Ban image={"/assets/Yapily.gif"} text={"Découvrez les dernières tendances en phytothérapie"} paragraph={"Votre source d&apos;informations sur les cellules souches"}/>
      {children}
    </div>
  );
}
