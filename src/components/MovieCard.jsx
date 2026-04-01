import "./MovieCard.css"

function MovieCard({ movie }) {
  const { title, poster, year, rating, overview } = movie

  return (
    <div className="movie-card">
      <img
        className="movie-poster"
        src={poster}
        alt={title}
        onError={(e) => { e.target.src = "/placeholder.png" }}
      />
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <div className="movie-meta">
          <span className="movie-year">{year}</span>
          <span className="movie-rating">★ {rating}</span>
        </div>
        <p className="movie-overview">{overview}</p>
      </div>
    </div>
  )
}

export default MovieCard