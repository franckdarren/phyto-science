
import Ban from "../_components/ban"



export default function RootLayout({ children }) {
  return (
    <div >
        <Ban image={"/assets/Hand.gif"} text={"Nos Produits Innovants"} paragraph={"Découvrez la puissance des cellules souches"} />
      {children}
    </div>
  );
}
