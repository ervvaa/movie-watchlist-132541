
import { useState } from 'react'
import { movies as initialMovies } from '../utils/movies'

function MoviesPage() {
    const [movies, setMovies] = useState(initialMovies)
    const [title, setTitle] = useState('')
    const [director, setDirector] = useState('')
    const [genre, setGenre] = useState('')
    const [watched, setWatched] = useState(false)
    const [errors, setErrors] = useState({})

    const handleAdd = () => {
        const newErrors = {}
        if (!title.trim()) newErrors.title = 'Title is required'
        if (!director.trim()) newErrors.director = 'Director is required'

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const newMovie = {
            id: Date.now(),
            title: title.trim(),
            director: director.trim(),
            genre: genre.trim(),
            watched,
        }

        setMovies([...movies, newMovie])
        setTitle('')
        setDirector('')
        setGenre('')
        setWatched(false)
        setErrors({})
    }

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Movies</h1>

            {/* Add Movie Form */}
            <div className="border border-gray-200 rounded-lg p-4 mb-8">
                <h2 className="text-xl font-bold mb-4">Add a Movie</h2>
                <div className="flex flex-col gap-3">
                    <div>
                        <input
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder="Director"
                            value={director}
                            onChange={e => setDirector(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                        {errors.director && <p className="text-red-500 text-sm mt-1">{errors.director}</p>}
                    </div>
                    <input
                        type="text"
                        placeholder="Genre"
                        value={genre}
                        onChange={e => setGenre(e.target.value)}
                        className="border border-gray-300 rounded px-3 py-2 w-full"
                    />
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={watched}
                            onChange={e => setWatched(e.target.checked)}
                        />
                        Watched
                    </label>
                    <button
                        onClick={handleAdd}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
                    >
                        Add Movie
                    </button>
                </div>
            </div>

            {/* Movie List */}
            <div className="flex flex-col gap-4">
                {movies.map(movie => (
                    <div key={movie.id} className="border border-gray-200 rounded-lg p-4">
                        <h2 className="text-xl font-bold">{movie.title}</h2>
                        <p className="text-gray-600">Director: {movie.director}</p>
                        <p className="text-gray-600">Genre: {movie.genre}</p>
                        <p className="text-gray-600">
                            Status: {movie.watched ? 'Watched' : 'Not Watched'}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MoviesPage