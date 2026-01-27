"use client";

import { motion } from "framer-motion";

/* ============ ANIMATION ============ */
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.42, ease: "easeOut" },
  }),
};

/* ============ ICONS (inline, no deps) ============ */
function Icon({
  name,
  className = "h-5 w-5",
}: {
  name:
    | "fuel"
    | "engine"
    | "shield"
    | "spark"
    | "drop"
    | "truck"
    | "arrow"
    | "check";
  className?: string;
}) {
  const common =
    "fill-none stroke-current stroke-2 stroke-linecap-round stroke-linejoin-round";

  switch (name) {
    case "fuel":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M7 3h6v8H7V3zm6 4h2l2 2v10a2 2 0 0 1-2 2h-2"
          />
          <path className={common} d="M7 11v10a2 2 0 0 0 2 2h4" />
        </svg>
      );
    case "engine":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M4 10h3l1-2h7l1 2h4v6h-4l-1 2H8l-1-2H4v-6z"
          />
          <path className={common} d="M8 8V6h3v2" />
          <path className={common} d="M14 8V6h3v2" />
          <path className={common} d="M6 13h2M16 13h2" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z"
          />
          <path className={common} d="M9 12l2 2 4-5" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M12 2l1.5 6L20 12l-6.5 4L12 22l-1.5-6L4 12l6.5-4L12 2z" />
        </svg>
      );
    case "drop":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M12 2s6 7 6 12a6 6 0 0 1-12 0c0-5 6-12 6-12z"
          />
        </svg>
      );
    case "truck":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M3 7h11v10H3V7zm11 3h4l3 3v4h-7v-7z"
          />
          <path
            className={common}
            d="M6.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          />
          <path
            className={common}
            d="M17.5 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
          />
        </svg>
      );
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M5 12h12" />
          <path className={common} d="M13 6l6 6-6 6" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M20 6L9 17l-5-5" />
        </svg>
      );
  }
}

/* ============ DATA ============ */
const gallery = [
  {
    src: "/oil/hero.jpg",
    title: "X-ELEMENT — линейка масел",
    desc: "Моторные и трансмиссионные масла. Форматы от 1L до бочек 205L.",
  },
  {
    src: "/oil/motor-10w40.jpg",
    title: "Premium Motor Oil 10W-40 HeavyDuty DPF",
    desc: "Для тяжёлых условий, стабильная вязкость и защита под нагрузкой.",
  },
  {
    src: "/oil/motor-10w30.jpg",
    title: "Premium Motor Oil 10W-30 HeavyDuty DPF",
    desc: "Подходит для современных моторов, мягкая работа и чистота.",
  },
  {
    src: "/oil/lineup-studio.jpg",
    title: "Фасовки под любую задачу",
    desc: "1L / 4L / 20L / 205L — удобно для частных и корпоративных клиентов.",
  },
  {
    src: "/oil/trans-80w90.jpg",
    title: "Trans 80W-90",
    desc: "Трансмиссионное масло для стабильной работы узлов и защиты при нагрузках.",
  },
  {
    src: "/oil/canister-20l.jpg",
    title: "Канистры 20L",
    desc: "Оптимально для автопарков, СТО, коммерческого транспорта.",
  },
  {
    src: "/oil/lineup-dark.jpg",
    title: "Полная линейка в едином стиле",
    desc: "Современная упаковка и чёткая маркировка продуктов.",
  },
  {
    src: "/oil/trans-set.jpg",
    title: "Trans-линейка: комплекты поставки",
    desc: "Удобно под закупки и регулярные замены.",
  },
  {
    src: "/oil/g-wagon.jpg",
    title: "Для города и тяжёлых условий",
    desc: "Подбор масла под двигатель, пробег, режим эксплуатации и климат.",
  },
];

const bullets = [
  {
    icon: "engine" as const,
    title: "Защита двигателя",
    text: "Стабильная масляная плёнка и защита в режимах нагрузки.",
  },
  {
    icon: "spark" as const,
    title: "Чистота и стабильность",
    text: "Мягкая работа, снижение отложений и стабильный режим.",
  },
  {
    icon: "shield" as const,
    title: "Ресурс и износ",
    text: "Снижение трения и аккуратная работа узлов в долгую.",
  },
  {
    icon: "drop" as const,
    title: "Удобные фасовки",
    text: "От 1L до 205L — под личный авто и под автопарки.",
  },
];

/* ============ PAGE ============ */
export default function MasloPage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.85 }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Масло <span className="text-[#FD7900]">X-ELEMENT</span>
            </h1>
            <p className="mt-3 text-white/70 max-w-3xl mx-auto">
              Моторные и трансмиссионные масла. Подбор под двигатель, пробег и
              режим эксплуатации. Доступны фасовки: 1L / 4L / 20L / 205L.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FD7900] px-6 py-3 font-semibold text-black transition hover:bg-[#FA7800]"
              >
                Смотреть каталог <Icon name="arrow" className="h-5 w-5" />
              </a>
              <a
                href="#request"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-6 py-3 font-semibold text-white/90 hover:border-white/25 transition"
              >
                Подобрать масло <Icon name="truck" className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* FEATURES */}
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {bullets.map((b, i) => (
              <motion.div
                key={b.title}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.6 }}
                custom={i + 1}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/5 p-4 hover:border-white/20 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-white/90 font-semibold">{b.title}</div>
                    <div className="mt-1 text-sm text-white/70">{b.text}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* NOTE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={6}
            variants={fadeUp}
            className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                <Icon name="check" className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#FD7900]">
                  Подбор под вашу технику
                </div>
                <div className="mt-1 text-white/80">
                  Напишите марку/модель, двигатель и условия эксплуатации — мы
                  предложим подходящую вязкость и формат поставки (1L / 4L / 20L /
                  205L).
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GALLERY / CATALOG */}
      <section id="catalog" className="py-12 md:py-14 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-white">
              Каталог и фото продукции
            </h2>
            <p className="mt-2 text-white/70">
              Ниже — примеры упаковки и линейки. Тексты можно уточнить под точные
              спецификации (вязкость, допуски, назначение).
            </p>
          </motion.div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <motion.div
                key={g.src}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.45 }}
                custom={i + 1}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:border-white/20 transition"
              >
                <div className="aspect-[16/10] bg-black/40">
                  {/* Используем обычный img, чтобы не требовать настройки next/image */}
                  <img
                    src={g.src}
                    alt={g.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                <div className="p-5">
                  <div className="text-white/90 font-semibold">{g.title}</div>
                  <div className="mt-2 text-sm text-white/70">{g.desc}</div>

                  <a
                    href="#request"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#FD7900] hover:text-[#FFA24A]"
                  >
                    Узнать цену / подобрать <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUEST / CTA */}
      <section id="request" className="py-12 md:py-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.42 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8"
          >
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-xl md:text-2xl font-semibold">
                Подбор масла и расчёт поставки
              </div>
              <p className="mt-2 text-sm text-white/70">
                Напишите марку авто/техники, двигатель и пробег — подскажем
                продукт и фасовку.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="https://t.me/H2_element_21rus"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FD7900] px-6 py-3 font-semibold text-black transition hover:bg-[#FA7800]"
                >
                  Написать в Telegram <Icon name="arrow" className="h-5 w-5" />
                </a>

                <a
                  href="tel:+79933391989"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-black/30 px-6 py-3 font-semibold text-white/90 hover:border-white/25 transition"
                >
                  +7 (993) 339-19-89
                </a>
              </div>

              <div className="mt-4 text-xs text-white/45">
                Подбор зависит от двигателя, условий эксплуатации и регламента
                обслуживания.
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
