import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./components/Provider";
import Footer from "./components/Footer";
import Header from "./components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArtZone App",
  description: "ArtZone is a vibrant online platform that serves as a hub for art enthusiasts, collectors, and creators alike. Boasting an eclectic array of artworks spanning various genres, mediums, and styles, ArtZone offers a dynamic marketplace where art is both showcased and celebrated.",
  keywords:['nextJs','Art App']
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
      <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"
                />
        <Provider>
        {/* <Header/> */}
        
  {children}
  {/* <Footer/> */}
        </Provider>
      
      </body>
    </html>
  );
}
