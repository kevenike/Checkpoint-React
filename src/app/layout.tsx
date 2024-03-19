import type { Metadata } from "next";
import Header from "./Components/Header/page";



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Pets",
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

    </html>
  );
}
