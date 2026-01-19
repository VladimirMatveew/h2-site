import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "H2 Element",
  description: "Водородные генераторы и обслуживание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className="min-h-screen bg-black text-white"
        style={{ scrollbarGutter: "stable" }}
      >
        <Header />

        <main>{children}</main>

        <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} H2 Element
        </footer>
      </body>
    </html>
  );
}
