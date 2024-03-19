import type { Metadata } from "next";



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
      
    </html>
  );
}
