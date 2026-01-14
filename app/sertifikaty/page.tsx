"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type DocItem = {
  title: string;
  file: string;
  preview: string;
  badge?: string;
};

const generatorDocs: DocItem[] = [
  {
    title: "Протокол испытаний генераторов",
    file: "/docs/Протокол Испытаний.pdf",
    preview: "/docs/previews/protokol-ispytaniy.png",
    badge: "PDF",
  },
  {
    title: "Добровольный сертификат соответствия",
    file: "/docs/Добро СС Трухачев ВГА.pdf",
    preview: "/docs/previews/sertifikat-dobrovolnyy.png",
    badge: "PDF",
  },
  {
    title: "ISO 9001 (RU)",
    file: "/docs/ИСО Трухачев рус.pdf",
    preview: "/docs/previews/iso-9001-ru.png",
    badge: "PDF",
  },
  {
    title: "ISO 9001 (EN)",
    file: "/docs/ИСО Трухачев анг.pdf",
    preview: "/docs/previews/iso-9001-en.png",
    badge: "PDF",
  },
];

const oilDocs: DocItem[] = [
  {
    title: "Протокол испытаний — масла индустриальные",
    file: "/docs/oil/oil-protocol-industrial.pdf",
    preview: "/docs/previews/oil/oil-protocol-industrial.png",
  },
  {
    title: "Протокол испытаний — масла трансмиссионные",
    file: "/docs/oil/oil-protocol-transmission.pdf",
    preview: "/docs/previews/oil/oil-protocol-transmission.png",
  },
  {
    title: "Протокол испытаний — масла моторные",
    file: "/docs/oil/oil-protocol-motor.pdf",
    preview: "/docs/previews/oil/oil-protocol-motor.png",
  },
  {
    title: "Сертификат — масла индустриальные",
    file: "/docs/oil/oil-cert-industrial.pdf",
    preview: "/docs/previews/oil/oil-cert-industrial.png",
  },
  {
    title: "Сертификат — масла моторные",
    file: "/docs/oil/oil-cert-motor.pdf",
    preview: "/docs/previews/oil/oil-cert-motor.png",
  },
  {
    title: "Сертификат — масла трансмиссионные",
    file: "/docs/oil/oil-cert-transmission.pdf",
    preview: "/docs/previews/oil/oil-cert-transmission.png",
  },
];

function Card({ d }: { d: DocItem }) {
  return (
    <a
      href={d.file}
      target="_blank"
      className="group rounded-2xl border border-white/10 bg-white/5 p-3 hover:border-white/20 transition"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/40">
        <Image
          src={d.preview}
          alt={d.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition"
        />
      </div>
      <div className="mt-2 text-sm font-medium text-white">
        {d.title}
      </div>
    </a>
  );
}

export default function CertificatesPage() {
  const [tab, setTab] = useState<"gen" | "oil">("gen");
  const docs = useMemo(
    () => (tab === "gen" ? generatorDocs : oilDocs),
    [tab]
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Сертификаты</h1>
        <Link href="/" className="text-sm text-white/60 hover:text-white">
          ← На главную
        </Link>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={() => setTab("gen")}
          className={`rounded-xl px-4 py-2 text-sm ${
            tab === "gen"
              ? "bg-[#FD7900] text-black"
              : "bg-white/5 text-white/70"
          }`}
        >
          Генераторы
        </button>
        <button
          onClick={() => setTab("oil")}
          className={`rounded-xl px-4 py-2 text-sm ${
            tab === "oil"
              ? "bg-[#FD7900] text-black"
              : "bg-white/5 text-white/70"
          }`}
        >
          Масла
        </button>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {docs.map((d) => (
          <Card key={d.file} d={d} />
        ))}
      </div>
    </div>
  );
}
