import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-black text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
