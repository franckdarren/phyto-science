
import Ban from "../_components/ban"



export default function RootLayout({ children }) {
  return (
    <div >
        <Ban image={"/assets/Yapily.gif"} text={"Découvrez les dernières tendances en phytothérapie"} paragraph={"Votre source d'informations sur les cellules souches"}/>
      {children}
    </div>
  );
}
