
import { Outfit } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
import InstallBootstrap from "./_components/InstallBootstrap";


const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Adogan Restaurant",
  description: "This is a food ordring application built to order food online",
};


export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={outfit.className}>
        <InstallBootstrap />
        {children}
      </body>
    </html>
  );
}
