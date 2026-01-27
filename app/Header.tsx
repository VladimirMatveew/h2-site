"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Генераторы", href: "/generatory" },
      { label: "Масло", href: "/maslo" },
      { label: "Сертификаты", href: "/sertifikaty" },
      { label: "FAQ", href: "/faq" },
      { label: "Контакты", href: "/#contacts" },
    ],
    []
  );

  // Закрываем меню при смене страницы
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Блокируем скролл, когда меню открыто
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
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

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 text-sm text-white/80">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="ml-auto md:ml-0 flex items-center gap-2">
          {/* MOBILE BURGER */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/90 hover:border-white/25 transition"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-[2px] w-5 bg-current transition ${
                  open ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-current transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] block h-[2px] w-5 bg-current transition ${
                  open ? "translate-y-[-7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-0 border-b border-white/10 bg-black/90 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="text-white/90 font-semibold">Меню</div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/90 hover:border-white/25 transition"
                  aria-label="Закрыть меню"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-4 grid gap-2 pb-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-base font-semibold text-white/90 hover:border-white/20 transition"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
