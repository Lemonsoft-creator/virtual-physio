export default function LandingPage() {
  return (
    <main className="p-8 space-y-24 text-gray-800 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center space-y-6 pt-12">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700">
          Willkommen zu deinem Virtuellen Physio
        </h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700">
          Wir helfen dir zu einem besseren Wohlbefinden mit deinem interaktiven Trainingsplan.
        </p>
        <div className="space-x-4 mt-6">
          <a
            href="/therapeuten"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 text-lg"
          >
            Für Therapeut:innen
          </a>
          <a
            href="/patienten"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 text-lg"
          >
            Für Trainierende
          </a>
          <a
            href="/login"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 text-lg"
          >
            Jetzt starten
          </a>
          <a
            href="#vorteile"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 text-lg"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* ...Vorteile, Testimonials, Footer... */}
    </main>
  )
}
