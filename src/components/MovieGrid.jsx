import MovieCard from "./MovieCard"
import "./MovieGrid.css"

const EMOTION_LABELS = {
  sadness:  { label: "Feeling sad",      color: "#4a90d9" },
  joy:      { label: "Feeling joyful",   color: "#f5a623" },
  anger:    { label: "Feeling angry",    color: "#e74c3c" },
  fear:     { label: "Feeling anxious",  color: "#8e44ad" },
  disgust:  { label: "Feeling disgusted",color: "#27ae60" },
  surprise: { label: "Feeling surprised",color: "#16a085" },
  neutral:  { label: "Feeling neutral",  color: "#7f8c8d" },
}

function MovieGrid({ emotion, movies }) {
  const meta = EMOTION_LABELS[emotion] || { label: emotion, color: "#555" }

  return (
    <div className="movie-grid-wrap">
      <div className="emotion-badge" style={{ background: meta.color }}>
        {meta.label}
      </div>
      <div className="movie-grid">
        {movies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default MovieGrid