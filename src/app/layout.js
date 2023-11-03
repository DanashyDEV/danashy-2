import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Danashy - Servicios Imtegrales",
  description:
    "Servicios integrales, mantenimiento preventivo, transporte vertical, sistemas de monitoreo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
