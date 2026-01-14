import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
        <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FD7900] text-black font-extrabold">
                <span className="text-xl leading-none">
                  H<span className="align-super text-xs">2</span>
                </span>
              </div>

              <div className="flex flex-col leading-none">
                <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                  H2 Element
                </span>
                <span className="text-[11px] md:text-xs text-white/50 tracking-wide">
                  Hydrogen Technology
                </span>
              </div>
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex gap-6 text-sm text-white/80">
              <Link href="/generatory" className="hover:text-white">
                Генераторы
              </Link>
              <Link href="/maslo" className="hover:text-white">
                Масло
              </Link>
              <Link href="/sertifikaty" className="hover:text-white">
                Сертификаты
              </Link>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
              <Link href="/#contacts" className="hover:text-white">
                Контакты
              </Link>
            </nav>

            {/* CTA */}
            <Link
              href="/#economy"
              className="rounded-2xl bg-[#FD7900] px-4 py-2 text-sm font-semibold text-black transition hover:bg-[#FA7800]"
            >
              Рассчитать экономию
            </Link>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 py-10 text-center text-xs text-white/50">
          © {new Date().getFullYear()} H2 Element
        </footer>
      </body>
    </html>
  );
}
