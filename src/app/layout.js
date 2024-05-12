import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Cartpopup from "@/components/cartpopup/Cartpopup";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Licchi E-Market",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />{children}<Cartpopup /> <Footer />
      </body>
    </html>
  );
}