"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const nav: NavItem[] = useMemo(
    () => [
      { label: "Генераторы", href: "/generators" },
      { label: "Масло", href: "/maslo" },
      { label: "Сертификаты", href: "/certificates" },
      { label: "FAQ", href: "/faq" },
      { label: "Контакты", href: "/#contacts" },
    ],
    []
  );

  // Закрываем меню при смене маршрута
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Блокируем скролл под оверлеем
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
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-white"
            aria-label="На главную"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
              H2
            </span>
            <span className="hidden sm:inline text-white/90">H2 ELEMENT</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/80 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons (optional, stays as you had) */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/#calc"
              className="inline-flex h-10 items-center justify-center rounded-2xl bg-[#FD7900] px-4 text-sm font-semibold text-black hover:bg-[#FA7800] transition"
            >
              Рассчитать экономию
            </Link>
            <Link
              href="/#request"
              className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white/90 hover:border-white/25 transition"
            >
              Отправить заявку
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 text-white/90 hover:border-white/25 transition"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            {/* Icon */}
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

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 right-0 top-0 border-b border-white/10 bg-black/90 backdrop-blur">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-semibold text-white"
                  onClick={() => setOpen(false)}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                    H2
                  </span>
                  <span className="text-white/90">H2 ELEMENT</span>
                </Link>

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

              <div className="grid gap-2 pb-4">
                <Link
                  href="/#calc"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-2xl bg-[#FD7900] px-4 text-sm font-semibold text-black hover:bg-[#FA7800] transition"
                >
                  Рассчитать экономию
                </Link>
                <Link
                  href="/#request"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white/90 hover:border-white/25 transition"
                >
                  Отправить заявку
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
