import { useState } from "react"
import MoodInput from "./components/MoodInput"
import MovieGrid from "./components/MovieGrid"
import "./App.css"

function App() {
  const [emotion, setEmotion] = useState(null)
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(text) {
    setLoading(true)
    setError(null)
    setMovies([])
    setEmotion(null)

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/recommend`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      })

      const data = await res.json()

      if (data.error) {
        setError(data.error)
      } else {
        setEmotion(data.emotion)
        setMovies(data.movies)
      }
    } catch (err) {
      setError("Could not reach the backend. Is it running?")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app">
      <h1 className="app-title">Mood Movies</h1>
      <p className="app-subtitle">Tell us how you feel — we'll find the right movie.</p>

      <MoodInput onSubmit={handleSubmit} isLoading={loading} />

      {error && <p className="error">{error}</p>}

      {emotion && movies.length > 0 && (
        <MovieGrid emotion={emotion} movies={movies} />
      )}
    </div>
  )
}

export default App