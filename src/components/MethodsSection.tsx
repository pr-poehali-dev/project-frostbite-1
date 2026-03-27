import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Древний мир', 'Средние века', 'Новое время', 'XX век'];

const articles = [
  {
    id: 1,
    category: 'Древний мир',
    title: 'Урок-исследование «Цивилизации Древнего Египта»',
    description: 'Методическая разработка урока с применением технологии критического мышления. Учащиеся анализируют первоисточники, сравнивают жизнь разных слоёв египетского общества и делают самостоятельные выводы.',
    tags: ['5 класс', 'Исследование', 'Первоисточники'],
    readTime: '12 мин',
    date: '15 марта 2026',
  },
  {
    id: 2,
    category: 'Средние века',
    title: 'Интерактивный урок «Рыцарство и феодализм»',
    description: 'Разработка урока с ролевыми элементами: учащиеся «примеряют» роли сеньора, вассала и крестьянина. Включает раздаточный материал, карточки-задания и итоговую дискуссию о справедливости феодального строя.',
    tags: ['6 класс', 'Ролевая игра', 'Дискуссия'],
    readTime: '15 мин',
    date: '5 марта 2026',
  },
  {
    id: 3,
    category: 'Новое время',
    title: 'Технологическая карта «Великие географические открытия»',
    description: 'Подробная технологическая карта урока с поминутным планом, вопросами для беседы и заданиями для работы с картой. Особый акцент — на последствиях открытий для коренных народов Америки.',
    tags: ['7 класс', 'Технол. карта', 'Картография'],
    readTime: '10 мин',
    date: '22 февраля 2026',
  },
  {
    id: 4,
    category: 'XX век',
    title: 'Методика изучения Первой мировой войны',
    description: 'Серия из трёх уроков: причины, ход и итоги войны. Включает работу с документами, анализ плакатов военного времени и проектное задание «Письмо с фронта». Формирует понимание трагедии войны через личные истории.',
    tags: ['9 класс', 'Серия уроков', 'Документы'],
    readTime: '20 мин',
    date: '10 февраля 2026',
  },
  {
    id: 5,
    category: 'Древний мир',
    title: 'Дебаты «Демократия Афин: миф или реальность?»',
    description: 'Урок-дебаты для старшеклассников. Учащиеся делятся на две группы и отстаивают противоположные точки зрения, опираясь на источники. Развивает аргументацию, умение работать с текстом и навыки публичного выступления.',
    tags: ['10 класс', 'Дебаты', 'Риторика'],
    readTime: '18 мин',
    date: '28 января 2026',
  },
  {
    id: 6,
    category: 'XX век',
    title: 'Урок памяти «Великая Отечественная война»',
    description: 'Методическая разработка к 9 Мая. Включает работу с воспоминаниями ветеранов, анализ фотографий военных лет и создание учениками «Книги памяти» своей семьи. Глубокое эмоциональное погружение в тему.',
    tags: ['8–11 класс', 'Патриотизм', 'Проект'],
    readTime: '25 мин',
    date: '15 января 2026',
  },
];

export default function MethodsSection() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered = activeCategory === 'Все'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <section className="bg-neutral-950 py-24 px-6 md:px-16">
      <div className="container mx-auto max-w-6xl">

        <div className="mb-16 flex flex-col gap-4">
          <p className="text-sm font-medium tracking-widest text-amber-400 uppercase">
            Материалы
          </p>
          <h2 className="text-3xl font-light text-white md:text-4xl">
            Методические разработки
          </h2>
          <p className="max-w-xl text-white/50 text-base leading-relaxed">
            Авторские разработки уроков, технологические карты и дидактические материалы. Все материалы опробованы в классе.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-amber-400 text-neutral-900'
                  : 'border border-white/20 text-white/60 hover:border-amber-400/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <div
              key={article.id}
              className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-amber-400/30 hover:bg-white/8"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-medium text-amber-400">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-white/40">
                  <Icon name="Clock" size={12} />
                  {article.readTime}
                </span>
              </div>

              <h3 className="text-lg font-medium text-white leading-snug group-hover:text-amber-100 transition-colors">
                {article.title}
              </h3>

              <p className={`text-sm text-white/55 leading-relaxed ${expanded === article.id ? '' : 'line-clamp-3'}`}>
                {article.description}
              </p>

              <button
                onClick={() => setExpanded(expanded === article.id ? null : article.id)}
                className="self-start text-xs text-amber-400/70 hover:text-amber-400 transition-colors"
              >
                {expanded === article.id ? 'Свернуть ↑' : 'Читать далее →'}
              </button>

              <div className="mt-auto flex flex-wrap gap-2 pt-2 border-t border-white/10">
                {article.tags.map((tag) => (
                  <span key={tag} className="text-xs text-white/40">
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-xs text-white/30">{article.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
