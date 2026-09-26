import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Garden of Eden Ministries — Growing in Faith, Bearing Fruit for Christ",
  description: "Welcome to Garden of Eden Ministries. Join us for Sunday worship, uplifting sermons, vibrant community ministries, and prayer.",
  keywords: ["Church", "Garden of Eden Ministries", "Sermons", "Christian", "Worship", "Faith", "Prayer"],
  openGraph: {
    title: "Garden of Eden Ministries",
    description: "Growing in Faith, Bearing Fruit for Christ",
    url: "https://gardenofeden.org",
    siteName: "Garden of Eden Ministries",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-church-cream text-church-navy antialiased selection:bg-church-gold selection:text-church-navy">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
