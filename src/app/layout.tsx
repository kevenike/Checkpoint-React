import type { Metadata } from "next";
import Header from "./Components/Header/page";
import Footer from "./Components/Footer/page";
import "./Global.css"



export const metadata: Metadata = {
  title: "Pet Amigo",
  description: "Pets",
  icons:{
    icon:['/favicon.ico?v=4']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
        <Header />
        {children}
        <Footer />
    </html>
  );
}
