export default function LandingPage() {
  return (
    <main className="p-8 text-center space-y-10">
      <h1 className="text-4xl font-bold">Virtueller Physio</h1>
      <p className="text-xl text-gray-600">
        Die digitale Plattform für moderne Rehabilitation
      </p>

      <div className="space-x-4">
        <a
          href="/"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Jetzt starten
        </a>
        <a
          href="/login"
          className="px-6 py-3 bg-gray-200 text-black rounded-xl hover:bg-gray-300"
        >
          Für Therapeut:innen
        </a>
      </div>

      <section className="max-w-3xl mx-auto text-left space-y-4 mt-12">
        <h2 className="text-2xl font-semibold">Was ist Virtueller Physio?</h2>
        <p>
          Eine intelligente Plattform, die Therapie digital denkt: Mit Übungsdatenbank, Feedback-Analyse und persönlicher Betreuung.
        </p>
      </section>
    </main>
  )
}
