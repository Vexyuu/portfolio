// import { Geist, Geist_Mono } from "next/font/google";
// import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Killian Fievet",
  description: "Découvrez le portfolio de Killian Fievet, développeur passionné. Projets, compétences et contact.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="fr">
//       <body
//         // className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
//         className={`antialiased bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
