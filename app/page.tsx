export default function LandingPage() {
  return (
    <main className="p-8 space-y-16 text-gray-800">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-700">
          Virtueller Physio
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Die digitale Plattform für moderne Rehabilitation – individuell, motivierend und effizient.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
          >
            Jetzt starten
          </a>
          <a
            href="#vorteile"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50"
          >
            Mehr erfahren
          </a>
        </div>
      </section>

      {/* Vorteile */}
      <section id="vorteile" className="max-w-5xl mx-auto space-y-10">
        <h2 className="text-3xl font-semibold text-center">Deine Vorteile</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Individuelle Therapiepläne",
              text: "Basierend auf Anamnese & Feedback automatisch angepasst.",
            },
            {
              title: "Echtes Patientenfeedback",
              text: "Direkt integriert: Schmerzlevel, Ausführung & Motivation.",
            },
            {
              title: "Effizient für Therapeut:innen",
              text: "Trainingsplanung & Fortschritt auf einen Blick.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white shadow p-6 rounded-xl text-center">
              <img
                src="https://via.placeholder.com/80"
                alt={item.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
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
            <footer className="mt-2 text-sm text-right">– Physiotherapeutin Anna M.</footer>
          </blockquote>
          <blockquote className="bg-white p-6 rounded-xl shadow">
            <p className="italic">
              "Ich sehe meine Fortschritte und bleibe dran. Das macht echt Spaß."
            </p>
            <footer className="mt-2 text-sm text-right">– Patient Jonas K.</footer>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10">
        &copy; {new Date().getFullYear()} Virtueller Physio. Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
