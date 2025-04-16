'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Dashboard() {
  const [exercises, setExercises] = useState<any[]>([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await supabase.from('exercises').select('*')
      if (data) setExercises(data)
    }
    fetchData()
  }, [])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Übungsliste</h1>
      <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((ex, idx) => (
          <li key={idx} className="p-4 bg-white shadow rounded">
            <h2 className="font-semibold">{ex.name}</h2>
            <p className="text-sm text-gray-600">{ex.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
