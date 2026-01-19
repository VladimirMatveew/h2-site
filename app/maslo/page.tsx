"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.45, ease: "easeOut" },
  }),
};

function BlockTitle({
  kicker,
  title,
  desc,
}: {
  kicker?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <div className="text-sm font-semibold text-[#FD7900]">{kicker}</div>
      )}
      <h1 className="mt-2 text-3xl md:text-5xl font-semibold">{title}</h1>
      {desc && <p className="mt-4 text-white/75">{desc}</p>}
    </div>
  );
}

function Section({
  id,
  title,
  desc,
  children,
}: {
  id?: string;
  title: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14 md:py-20 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-semibold">{title}</h2>
          {desc && <p className="mt-3 text-white/70 max-w-3xl">{desc}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function Card({
  title,
  desc,
  footer,
}: {
  title: string;
  desc: string;
  footer?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <div className="text-[#FD7900] font-semibold text-lg">{title}</div>
      <div className="mt-2 text-white/80">{desc}</div>
      {footer && <div className="mt-4 text-xs text-white/55">{footer}</div>}
    </div>
  );
}

export default function MasloPage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <div className="py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          custom={0}
          variants={fadeUp}
        >
          <BlockTitle
            kicker="ELEMENT • Премиальные масла"
            title="Масло и обслуживание"
            desc="Линейка премиальных масел российского производства с акцентом на стабильную работу в условиях эксплуатации в РФ: перепады температур, пыль, влага, вибрации. Ниже — кратко про технологию, ориентиры характеристик, ассортимент и условия поставки."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={1}
          variants={fadeUp}
          className="mt-10 grid gap-4 md:grid-cols-3"
        >
          <Card
            title="Сделано в России"
            desc="Производство и контроль качества ориентированы под эксплуатацию и сервис в РФ."
          />
          <Card
            title="Контроль партий"
            desc="Лабораторный контроль каждой партии в производственном цикле."
          />
          <Card
            title="Технология активации"
            desc="Заявлен технологический этап активации и смешивания для стабильности состава."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          custom={2}
          variants={fadeUp}
          className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6"
        >
          <div className="text-white/80">
            Важно: значения ниже — ориентиры из материалов/внутренних тестов.
            Фактические результаты зависят от техники, режима эксплуатации и
            состояния агрегатов.
          </div>
        </motion.div>
      </div>

      {/* TECHNOLOGY */}
      <Section
        id="tech"
        title="Технология"
        desc="Ключевые технологические этапы, заявленные как часть производства."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={0}
            variants={fadeUp}
          >
            <Card
              title="Электромагнитная активация"
              desc="Технологический этап, который заявлен как часть производственного процесса."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={1}
            variants={fadeUp}
          >
            <Card
              title="Кавитационное смешивание"
              desc="Смешивание для стабильности состава и свойств, чтобы масло работало предсказуемо."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            custom={2}
            variants={fadeUp}
          >
            <Card
              title="Контроль качества"
              desc="Лабораторная проверка партий и контроль параметров в производственном цикле."
            />
          </motion.div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            [
              "Повышенный ресурс агрегатов",
              "Заявляется как эффект стабильной работы масла при нагрузках.",
            ],
            [
              "Снижение затрат на обслуживание",
              "Ожидаемый экономический эффект раскрывается через расход/ТО.",
            ],
            [
              "Устойчивость к условиям",
              "Акцент на влагу, пыль, вибрации и перепады температур.",
            ],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={fadeUp}
            >
              <Card title={t} desc={d} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* METRICS */}
      <Section
        id="compare"
        title="Ориентиры характеристик"
        desc="Коротко по цифрам, которые приводятся как ориентиры в сравнительных материалах."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              t: "Температура застывания",
              d: "Ориентир: до -61°C",
              f: "Фактические значения зависят от партии и условий.",
            },
            {
              t: "NOACK",
              d: "Ориентир: ~8.1%",
              f: "Показатель испаряемости/угара (ориентир).",
            },
            {
              t: "Интервал замены",
              d: "Ориентир: до 15 000 км",
              f: "Зависит от двигателя, топлива, режима и сервиса.",
            },
            {
              t: "Цена",
              d: "Ориентир: ~1 200 ₽/л",
              f: "Ориентир из материалов; зависит от фасовки/условий.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={fadeUp}
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-white/70 text-sm">{x.t}</div>
                <div className="mt-2 text-xl font-semibold text-[#FD7900]">
                  {x.d}
                </div>
                <div className="mt-3 text-xs text-white/55">{x.f}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ECONOMY */}
      <Section
        id="economy"
        title="Экономика для автопарка"
        desc="Оценка эффекта обычно считается по расходу, интервалам ТО и стоимости владения."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              t: "Экономия в год",
              d: "Ориентир: от 22 000 ₽ в год на 1 авто (как пример оценки).",
            },
            {
              t: "Расход топлива",
              d: "Ориентир: потенциальное снижение до ~20% (зависит от условий).",
            },
            {
              t: "Интервалы ТО",
              d: "Ориентир: ТО может быть реже (до ~1.5 раза) при корректной эксплуатации.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={fadeUp}
            >
              <Card
                title={x.t}
                desc={x.d}
                footer="Все значения — ориентиры; результаты зависят от техники и обслуживания."
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-white/80 font-semibold">
            Хотите расчёт под ваш транспорт?
          </div>
          <p className="mt-2 text-white/70 max-w-3xl">
            Оставьте контакты — соберём вводные (тип ДВС, пробег, режим,
            интервал ТО) и предложим схему внедрения.
          </p>

          <form
            className="mt-6 grid gap-3 max-w-md"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              placeholder="Телефон"
              className="h-12 rounded-2xl border border-white/10 bg-black/40 px-4 outline-none focus:border-[#FD7900]"
            />
            <button className="h-12 rounded-2xl bg-[#FD7900] font-semibold text-black transition hover:bg-[#FA7800]">
              Получить расчёт
            </button>
            <div className="text-xs text-white/50">
              Нажимая кнопку, вы соглашаетесь с политикой обработки данных.
            </div>
          </form>
        </div>
      </Section>

      {/* ASSORTMENT */}
      <Section
        id="assortment"
        title="Ассортимент"
        desc="Основные группы продуктов, которые заявлены в линейке."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              t: "Моторные масла",
              d: "Для легковых/грузовых, сельхозтехники и спецтранспорта.",
            },
            {
              t: "Компрессорные масла",
              d: "Фокус на термостабильность и ресурс в компрессорах.",
            },
            {
              t: "Гидравлические масла (HLP)",
              d: "Для тяжёлого оборудования и промышленного применения.",
            },
            {
              t: "Трансмиссионные (GL-4 / GL-5)",
              d: "Для редукторов, мостов и коробок передач.",
            },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={fadeUp}
            >
              <Card title={x.t} desc={x.d} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* AREAS */}
      <Section
        id="use"
        title="Сферы применения"
        desc="Примеры отраслей и сценариев, где линейка заявлена к применению."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Промышленность", "Металлургия, машиностроение, переработка."],
            ["АПК", "Тракторы, комбайны, опрыскиватели."],
            ["Транспорт и логистика", "Автопарки, карьерная техника, спецтранспорт."],
            ["Энергетика", "Компрессорные и турбинные масла."],
            ["СТО и сервис", "Линейки для сервисного применения."],
            ["Спецжидкости", "Производство по техзаданию клиента."],
          ].map(([t, d], i) => (
            <motion.div
              key={t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={fadeUp}
            >
              <Card title={t} desc={d} />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* COOP */}
      <Section
        id="coop"
        title="Условия сотрудничества"
        desc="Если вы — автопарк/СТО/дистрибуция: базовые условия поставки и сопровождения."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { t: "Фасовка", d: "1л / 4л / 20л / 60л / 208л" },
            { t: "Минимальный заказ", d: "Ориентир: от 20 литров" },
            { t: "Логистика по РФ", d: "Ориентир: от одного дня" },
            { t: "Поддержка", d: "Менеджер на этапах внедрения и использования" },
          ].map((x, i) => (
            <motion.div
              key={x.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              custom={i}
              variants={fadeUp}
            >
              <Card title={x.t} desc={x.d} />
            </motion.div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="text-white/80">
            Сертификация заявлена как соответствующая ГОСТ/ISO/ТР ТС (уточняется
            по партии и документам поставки).
          </div>
        </div>
      </Section>

      {/* CONTACTS */}
     

      <div className="h-10" />
    </div>
  );
}
