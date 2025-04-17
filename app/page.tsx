// ❌ Diese hier bitte löschen!
export default function LandingPage() {
  return (
    <main className="p-10 text-center text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">
        Willkommen zu deinem Virtuellen Physio
      </h1>
      <p className="text-lg max-w-xl mx-auto">
        Wir helfen dir zu einem besseren Wohlbefinden mit deinem interaktiven Trainingsplan.
      </p>
      <div className="mt-6 space-x-4">
        <a href="/therapeuten" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Für Therapeut:innen
        </a>
        <a href="/patienten" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Für Trainierende
        </a>
      </div>
    </main>
  )
}
