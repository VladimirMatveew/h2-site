import Link from "next/link";
import Image from "next/image";

type GenItem = {
  name: string;
  subtitle: string;
  image: string;
  specs: { label: string; value: string }[];
  pdf: string;
};

const generators: GenItem[] = [
  {
    name: "H1",
    subtitle: "Для ДВС до 2 литров",
    image: "/img/generators/h1-passport-product.png",
    pdf: "/docs/generators/h1-passport.pdf",
    specs: [
      { label: "Объём ДВС", value: "до 2 л" },
      { label: "Объём воды", value: "1,8 л" },
      { label: "Потребление", value: "65 Вт" },
      { label: "Вес", value: "4,5 кг" },
    ],
  },
  {
    name: "H2",
    subtitle: "Для ДВС 2–6,5 литров",
    image: "/img/generators/h2-passport-product.png",
    pdf: "/docs/generators/h2-passport.pdf",
    specs: [
      { label: "Объём ДВС", value: "2–6,5 л" },
      { label: "Объём воды", value: "2,8 л" },
      { label: "Потребление", value: "75 Вт" },
      { label: "Вес", value: "5 кг" },
    ],
  },
  {
    name: "H3",
    subtitle: "Для ДВС 6,5–12 литров",
    image: "/img/generators/h3-passport-product.png",
    pdf: "/docs/generators/h3-passport.pdf",
    specs: [
      { label: "Объём ДВС", value: "6,5–12 л" },
      { label: "Объём воды", value: "5,6 л" },
      { label: "Потребление", value: "150 Вт" },
      { label: "Вес", value: "10 кг" },
    ],
  },
];

export default function GeneratorsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold">Генераторы</h1>
          <p className="mt-2 text-white/70 text-sm">
            Линейка водородных генераторов H2 Element
          </p>
        </div>
        <Link href="/" className="text-white/60 hover:text-white text-sm">
          ← На главную
        </Link>
      </div>

      {/* 🔥 HIT SALES — SMART */}
      <div className="mt-6 rounded-[32px] border border-[#FD7900]/40 bg-[#FD7900]/10 p-7">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FD7900] px-5 py-1.5 text-xs font-extrabold tracking-wide text-black">
          🔥 ХИТ ПРОДАЖ
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          H2 Element SMART
        </h2>

        <p className="mt-3 max-w-3xl text-base md:text-lg font-medium text-white/90">
          Самая эффективная модель в линейке. Повышенная производительность,
          сниженное энергопотребление и стабильная работа в холодном климате.
        </p>

        <div className="mt-6 grid gap-5 lg:grid-cols-2">
          <div className="relative aspect-[16/10] rounded-2xl bg-black/40">
            <Image
              src="/img/generators/element-smart.jpg"
              alt="H2 Element SMART"
              fill
              className="object-contain p-4"
              priority
            />
          </div>

          <div className="grid gap-3">
            <SmartSpec label="Производительность" value="0,8 л/мин" />
            <SmartSpec label="Потребление энергии" value="52 Вт" />
            <SmartSpec label="Макс. ток ячейки" value="50 А" />
            <SmartSpec label="Рабочая температура" value="до −25°C" />
          </div>
        </div>

        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="/#calc"
            className="rounded-xl bg-[#FD7900] px-6 py-2.5 text-sm font-extrabold text-black"
          >
            Рассчитать экономию
          </a>
          <a
            href="/docs/generators/element-smart.pdf"
            target="_blank"
            className="rounded-xl border border-white/25 px-6 py-2.5 text-sm font-semibold text-white"
          >
            Презентация PDF
          </a>
        </div>
      </div>

      {/* OTHER GENERATORS */}
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {generators.map((g) => (
          <div
            key={g.name}
            className="rounded-3xl border border-white/10 bg-white/5 p-4"
          >
            <h3 className="text-xl font-semibold">{g.name}</h3>
            <p className="text-sm text-white/60">{g.subtitle}</p>

            <div className="relative mt-3 aspect-[4/3] rounded-xl bg-black/40">
              <Image
                src={g.image}
                alt={g.name}
                fill
                className="object-contain p-3"
              />
            </div>

            <div className="mt-3 grid gap-1">
              {g.specs.map((s) => (
                <Spec key={s.label} label={s.label} value={s.value} />
              ))}
            </div>

            <a
              href={g.pdf}
              target="_blank"
              className="mt-3 block rounded-xl bg-[#FD7900] px-4 py-2 text-center text-sm font-semibold text-black"
            >
              Паспорт PDF
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* SMART — жирнее */
function SmartSpec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between rounded-xl bg-black/40 px-4 py-2">
      <span className="text-sm font-medium text-white/70">{label}</span>
      <span className="text-sm font-extrabold text-white">{value}</span>
    </div>
  );
}

/* обычные */
function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between rounded-lg bg-black/30 px-3 py-1 text-xs">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
