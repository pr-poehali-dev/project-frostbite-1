export default function FooterSection() {
  return (
    <footer className="bg-black py-10 px-6 md:px-16">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-sm">
          © 2026 Жиганов Филипп Ишханович — Методический блог учителя истории
        </p>
        <p className="text-white/20 text-xs">
          Все материалы доступны для использования в образовательных целях
        </p>
      </div>
    </footer>
  );
}
