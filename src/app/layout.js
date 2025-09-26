import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kamran's Portfolio",
  description: "Welcome to my personal portfolio website where I showcase my projects, skills, and experiences as a web developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <TransitionProvider>{children}</TransitionProvider>  
      </body>
    </html>
  );
}
