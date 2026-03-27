import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section className="bg-neutral-900 py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-sm font-medium tracking-widest text-amber-400 uppercase">
                Об авторе
              </p>
              <h2 className="text-3xl font-light text-white md:text-4xl">
                Жиганов Филипп Ишханович
              </h2>
            </div>
            <div className="space-y-4 text-white/60 text-base leading-relaxed">
              <p>
                Учитель истории и обществознания с многолетним опытом работы в общеобразовательной школе.
                Убеждён, что история — это не набор дат и фактов, а живая наука о людях и их выборе.
              </p>
              <p>
                В своей работе использую технологии проблемного обучения, дебаты, ролевые игры и работу
                с первоисточниками. Каждый урок строю так, чтобы ученик не просто запомнил, а осмыслил.
              </p>
              <p>
                На этом сайте публикую разработки, которые реально работают в классе — без «воды»
                и лишней теории.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
              <div className="flex gap-3 items-start">
                <Icon name="BookOpen" size={20} className="text-amber-400 mt-0.5 shrink-0" />
                <p className="text-white/70 text-sm leading-relaxed">
                  Все материалы блога находятся в открытом доступе. Вы можете использовать их
                  в своей работе со ссылкой на автора.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://cdn.poehali.dev/projects/719794a2-ba3f-467c-85bb-0250599076ef/files/4d712bbb-2b97-4d60-946a-e43273a73aa6.jpg"
              alt="Исторические карты и манускрипты"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
