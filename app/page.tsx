"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

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
    | "smoke"
    | "truck"
    | "power"
    | "shield"
    | "arrow"
    | "chart"
    | "wrench"
    | "calc"
    | "play";
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
    case "smoke":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M7 14c-1.5 0-3-1-3-2.5S5 9 7 9c.5-2 2.5-3 4.5-2.5"
          />
          <path
            className={common}
            d="M10 16c-1.5 0-3-1-3-2.5S8 11 10 11c.7-1.8 2.6-2.6 4.4-2"
          />
          <path
            className={common}
            d="M13 18c-1.5 0-3-1-3-2.5S11 13 13 13c.8-1.7 2.8-2.4 4.6-1.7"
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
    case "power":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" />
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
    case "arrow":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M5 12h12" />
          <path className={common} d="M13 6l6 6-6 6" />
        </svg>
      );
    case "chart":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M4 19V5" />
          <path className={common} d="M4 19h16" />
          <path className={common} d="M7 15l3-4 3 2 4-6" />
        </svg>
      );
    case "wrench":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path
            className={common}
            d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.2 2.2-2.2-2.2 1.4-1.4z"
          />
        </svg>
      );
    case "calc":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M7 3h10v18H7V3z" />
          <path className={common} d="M9 7h6" />
          <path className={common} d="M9 11h2M13 11h2M9 15h2M13 15h2M9 19h6" />
        </svg>
      );
    case "play":
      return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
          <path className={common} d="M8 5l12 7-12 7V5z" />
        </svg>
      );
  }
}

/* ============ HELPERS ============ */
function parseNum(v: string): number {
  const cleaned = v
    .replace(/\s+/g, "")
    .replace(",", ".")
    .replace(/[^\d.]/g, "");
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function rub(n: number): string {
  const safe = Number.isFinite(n) ? n : 0;
  return new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 0 }).format(
    Math.round(safe)
  );
}

/* ============ VIDEO SLIDER (local mp4 in /public/videos) ============ */
const reviewVideos = [
  { src: "/videos/review-1.mp4", title: "Видео-отзыв клиента #1" },
  { src: "/videos/review-2.mp4", title: "Видео-отзыв клиента #2" },
  { src: "/videos/review-3.mp4", title: "Видео-отзыв клиента #3" },
];

function VideoReviewsSlider() {
  const [index, setIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const prev = () =>
    setIndex((i) => (i === 0 ? reviewVideos.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === reviewVideos.length - 1 ? 0 : i + 1));

  useEffect(() => {
    videoRefs.current.forEach((v) => {
      try {
        if (!v) return;
        v.pause();
        v.currentTime = 0;
      } catch {}
    });
    setPlayingIndex(null);
  }, [index]);

  const playVideo = async (i: number) => {
    const v = videoRefs.current[i];
    if (!v) return;

    videoRefs.current.forEach((x, idx) => {
      if (x && idx !== i) {
        try {
          x.pause();
          x.currentTime = 0;
        } catch {}
      }
    });

    try {
      v.muted = false;
      await v.play();
      setPlayingIndex(i);
    } catch {
      setPlayingIndex(i);
    }
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {reviewVideos.map((v, i) => (
            <div
              key={v.src}
              className="min-w-full px-2 md:min-w-[50%] lg:min-w-[33.333%]"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition">
                <div className="relative">
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    controls
                    preload="metadata"
                    className="aspect-[9/16] w-full rounded-2xl bg-black"
                  >
                    <source src={v.src} type="video/mp4" />
                  </video>

                  {playingIndex !== i && (
                    <button
                      type="button"
                      onClick={() => playVideo(i)}
                      className="absolute inset-0 m-auto flex h-14 w-14 items-center justify-center rounded-full bg-black/70 text-white hover:bg-black"
                      aria-label="Play review"
                    >
                      <Icon name="play" className="h-6 w-6" />
                    </button>
                  )}
                </div>

                <div className="mt-3 text-sm text-white/80">{v.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 hover:bg-black"
        aria-label="Previous"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-3 hover:bg-black"
        aria-label="Next"
      >
        →
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {reviewVideos.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-[#FD7900]" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ============ PAGE ============ */
export default function HomePage() {
  const benefits = [
    { icon: "fuel" as const, text: "Снижение расхода топлива" },
    { icon: "engine" as const, text: "Улучшение работы двигателя" },
    { icon: "smoke" as const, text: "Меньше нагара и дымности" },
    { icon: "truck" as const, text: "Подбор под любой транспорт" },
    { icon: "power" as const, text: "Мощность возрастает до 30%" },
    { icon: "shield" as const, text: "Продлевает срок службы двигателя" },
  ];

  // calculator state
  const [fuel, setFuel] = useState<"diesel" | "petrol">("diesel");
  const [consumption, setConsumption] = useState("20"); // l/100km
  const [price, setPrice] = useState("65"); // ₽/l
  const [kmPerMonth, setKmPerMonth] = useState("3000"); // km/month
  const [savingPct, setSavingPct] = useState(20); // %

  useEffect(() => {
    const current = parseNum(price);
    const isDefaultLike =
      current === 0 || current === 65 || current === 62 || current === 70;
    if (!isDefaultLike) return;

    if (fuel === "diesel") setPrice("65");
    else setPrice("62");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fuel]);

  const calc = useMemo(() => {
    const c = Math.max(0, parseNum(consumption));
    const p = Math.max(0, parseNum(price));
    const km = Math.max(0, parseNum(kmPerMonth));
    const s = Math.min(65, Math.max(0, savingPct));

    const litersPerMonth = (km / 100) * c;
    const costPerMonth = litersPerMonth * p;

    const savedPerMonth = costPerMonth * (s / 100);
    const savedPerYear = savedPerMonth * 12;
    const litersSavedPerMonth = litersPerMonth * (s / 100);

    return {
      litersPerMonth,
      litersSavedPerMonth,
      costPerMonth,
      savedPerMonth,
      savedPerYear,
      s,
    };
  }, [consumption, price, kmPerMonth, savingPct]);

  return (
    <div>
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 py-10 md:py-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            custom={0}
            variants={fadeUp}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
              Экономия топлива до{" "}
              <span className="text-[#FD7900]">65%</span> с помощью водородных
              генераторов
            </h1>

            <p className="mt-3 text-white/70 max-w-6xl mx-auto whitespace-nowrap overflow-hidden text-ellipsis">
              Подбор под любой транспорт. Улучшение сгорания топлива, меньше
              нагара и стабильнее работа двигателя.
            </p>
          </motion.div>

          {/* BENEFITS */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <motion.div
                key={b.text}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.65 }}
                custom={i + 1}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </div>
                  <div className="text-white/90 font-medium">{b.text}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* POWER */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.55 }}
            custom={8}
            variants={fadeUp}
            className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                <Icon name="chart" className="h-5 w-5" />
              </div>

              <div>
                <div className="text-sm font-semibold text-[#FD7900]">
                  Эффект по мощности
                </div>
                <div className="mt-1 text-xl md:text-2xl font-semibold">
                  Мощность возрастает до{" "}
                  <span className="text-[#FD7900]">30%</span>
                </div>
                <div className="mt-2 text-white/70">
                  За счёт более полного сгорания топливной смеси двигатель
                  работает стабильнее и отзывчивее, особенно под нагрузкой.
                </div>
              </div>
            </div>

            <div className="mt-5 text-xs text-white/45">
              Примечание: фактический эффект зависит от двигателя, состояния
              системы, топлива и режима эксплуатации.
            </div>
          </motion.div>

          {/* RESOURCE */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.55 }}
            custom={9}
            variants={fadeUp}
            className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                <Icon name="wrench" className="h-5 w-5" />
              </div>

              <div>
                <div className="text-sm font-semibold text-[#FD7900]">
                  Ресурс двигателя
                </div>
                <div className="mt-1 text-xl md:text-2xl font-semibold">
                  Продлевает срок службы двигателя
                </div>
                <div className="mt-2 text-white/70">
                  Снижение отложений и более стабильная работа двигателя помогают
                  уменьшать нагрузку на систему в долгосрочной эксплуатации.
                </div>
              </div>
            </div>

            <div className="mt-5 text-xs text-white/45">
              Примечание: ресурс зависит от состояния двигателя, топлива,
              регулярности обслуживания и режима эксплуатации.
            </div>
          </motion.div>

          {/* CALCULATOR */}
          <motion.div
            id="economy"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            custom={10}
            variants={fadeUp}
            className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 scroll-mt-24"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                <Icon name="calc" className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#FD7900]">
                  Калькулятор
                </div>
                <div className="mt-1 text-xl md:text-2xl font-semibold">
                  Сколько вы сэкономите
                </div>
                <div className="mt-2 text-white/70">
                  Расчёт обновляется сразу при вводе значений.
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {/* Inputs */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="grid gap-3">
                  <label className="grid gap-1">
                    <span className="text-xs text-white/60">Тип топлива</span>
                    <select
                      value={fuel}
                      onChange={(e) =>
                        setFuel(e.target.value as "diesel" | "petrol")
                      }
                      className="h-11 rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-[#FD7900]"
                    >
                      <option value="diesel">Дизель</option>
                      <option value="petrol">Бензин</option>
                    </select>
                  </label>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <label className="grid gap-1">
                      <span className="text-xs text-white/60">
                        Расход (л / 100 км)
                      </span>
                      <input
                        value={consumption}
                        onChange={(e) => setConsumption(e.target.value)}
                        inputMode="decimal"
                        className="h-11 rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-[#FD7900]"
                        placeholder="Напр. 20"
                      />
                    </label>

                    <label className="grid gap-1">
                      <span className="text-xs text-white/60">
                        Цена топлива (₽/л)
                      </span>
                      <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        inputMode="decimal"
                        className="h-11 rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-[#FD7900]"
                        placeholder="Напр. 65"
                      />
                    </label>
                  </div>

                  <label className="grid gap-1">
                    <span className="text-xs text-white/60">
                      Пробег в месяц (км)
                    </span>
                    <input
                      value={kmPerMonth}
                      onChange={(e) => setKmPerMonth(e.target.value)}
                      inputMode="numeric"
                      className="h-11 rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-[#FD7900]"
                      placeholder="Напр. 3000"
                    />
                  </label>

                  <div className="mt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/60">
                        Экономия по расходу
                      </span>
                      <span className="text-xs font-semibold text-[#FD7900]">
                        {savingPct}%
                      </span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={65}
                      value={savingPct}
                      onChange={(e) => setSavingPct(Number(e.target.value))}
                      className="mt-2 w-full"
                    />
                    <div className="mt-1 flex justify-between text-[11px] text-white/45">
                      <span>5%</span>
                      <span>65%</span>
                    </div>

                    <div className="mt-2 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => setSavingPct(20)}
                        className="rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-xs text-white/80 hover:border-white/25"
                      >
                        20%
                      </button>
                      <button
                        type="button"
                        onClick={() => setSavingPct(35)}
                        className="rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-xs text-white/80 hover:border-white/25"
                      >
                        35%
                      </button>
                      <button
                        type="button"
                        onClick={() => setSavingPct(65)}
                        className="rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-xs text-white/80 hover:border-white/25"
                      >
                        65%
                      </button>
                    </div>
                  </div>

                  <div className="mt-2 text-xs text-white/45">
                    Подсказка: вводите числа как{" "}
                    <span className="text-white/70">20</span> или{" "}
                    <span className="text-white/70">20,5</span>.
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
                <div className="text-sm font-semibold text-white/80">
                  Результат (примерно)
                </div>

                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="text-xs text-white/60">
                      Расход топлива в месяц
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      {Math.round(calc.litersPerMonth)} л
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="text-xs text-white/60">
                      Стоимость топлива в месяц
                    </div>
                    <div className="mt-1 text-lg font-semibold text-white">
                      {rub(calc.costPerMonth)} ₽
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="text-xs text-white/60">
                      Экономия в месяц ({calc.s}%)
                    </div>
                    <div className="mt-1 text-2xl font-semibold text-[#FD7900]">
                      {rub(calc.savedPerMonth)} ₽
                    </div>
                    <div className="mt-1 text-xs text-white/55">
                      Это примерно {Math.round(calc.litersSavedPerMonth)} л
                      топлива в месяц
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <div className="text-xs text-white/60">Экономия в год</div>
                    <div className="mt-1 text-xl font-semibold text-white">
                      {rub(calc.savedPerYear)} ₽
                    </div>
                  </div>
                </div>

                <a
                  href="#calc"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FD7900] px-5 py-3 font-semibold text-black transition hover:bg-[#FA7800]"
                >
                  Получить расчёт под мой транспорт{" "}
                  <Icon name="arrow" className="h-5 w-5" />
                </a>

                <div className="mt-3 text-xs text-white/45">
                  Это ориентировочный расчёт. Точный результат зависит от
                  двигателя, состояния, топлива и режима эксплуатации.
                </div>
              </div>
            </div>
          </motion.div>

          {/* ✅ VIDEO REVIEWS — NOW AFTER CALCULATOR */}
          <motion.div
            id="reviews"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            custom={11}
            variants={fadeUp}
            className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7 scroll-mt-24"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#FD7900] text-black">
                <Icon name="play" className="h-5 w-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-[#FD7900]">
                  Отзывы клиентов
                </div>
                <div className="mt-1 text-xl md:text-2xl font-semibold">
                  Видео-отзывы после установки
                </div>
                <div className="mt-2 text-white/70">
                  Реальные ролики клиентов. Нажмите ▶︎ для запуска.
                </div>
              </div>
            </div>

            <div className="mt-6">
              <VideoReviewsSlider />
            </div>
          </motion.div>

          {/* FORM — centered laconic */}
        </div>
      </section>

      {/* CONTACTS — centered + telegram + phone */}
      <section id="contacts" className="py-12 md:py-16 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl md:text-3xl font-semibold text-white text-center">
            Контакты
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8">
            <div className="mx-auto max-w-xl text-center">
              <div className="text-white/85 text-lg font-semibold">
                Свяжитесь с нами
              </div>
              <p className="mt-2 text-white/60">
                Ответим на вопросы и подберём оборудование под ваш транспорт
              </p>

              <div className="mt-6 grid gap-3">
                <a
                  href="tel:+79933391989"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-white/90 hover:border-white/20 transition"
                >
                  📞 +7 993 339 1989
                </a>

                <a
                  href="https://t.me/H2_element_21"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-white/90 hover:border-white/20 transition"
                >
                  Telegram: @H2_element_21
                </a>

                 <a
                  href="https://vk.ru/h2element21"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-white/90 hover:border-white/20 transition"
                >
                  Вконтакте: https://vk.ru/h2element21
                </a>

                <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-white/60">
                  ✉️ Почта: mayorovst62@gmail.com
                </div>
              </div>



              <div className="mt-3 text-xs text-white/45">
                Мы на связи в Telegram и по телефону.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
