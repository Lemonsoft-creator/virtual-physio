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

      {/* Vorteile */}
      <section id="vorteile" className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-center">Deine Vorteile</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Individuelle Therapie"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Individuelle Therapiepläne</h3>
            <p>Basierend auf Anamnese & Feedback automatisch angepasst.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Feedback"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Echtes Patientenfeedback</h3>
            <p>Direkt integriert: Schmerzlevel, Ausführung & Motivation.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-xl text-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Zeit sparen"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="font-bold text-lg">Effizient für Therapeut:innen</h3>
            <p>Trainingsplanung & Fortschritt auf einen Blick.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-blue-50 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Was Nutzer sagen</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic">
              "Endlich eine Plattform, die meine Patient:innen wirklich motiviert!"
            </p>
            <footer className="mt-2 text-sm text-right">- Physiotherapeutin Anna M.</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic">
              "Ich sehe meine Fortschritte und bleibe dran. Das macht echt Spaß."
            </p>
            <footer className="mt-2 text-sm text-right">- Patient Jonas K.</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10">
        &copy; {new Date().getFullYear()} Virtueller Physio. Alle Rechte vorbehalten.
      </footer>
    </main>
  )
} 
