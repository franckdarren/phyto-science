
import Ban from "../_components/ban"



export default function RootLayout({ children }) {
  return (
    <div >
        <Ban />
      {children}
    </div>
  );
}
