export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-2xl tracking-wide">
          LILAINIE ADJEI-ADDO
        </p>
        <p className="text-sm text-cream/60">
          &copy; {new Date().getFullYear()} &mdash; Built with intention.
        </p>
      </div>
    </footer>
  );
}
