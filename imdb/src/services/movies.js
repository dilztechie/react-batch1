export default function getTopMovies() {
    return fetch('http://localhost:3333/movies').then(data => data.json())
}

export function setMovie(movie) {
    return fetch('http://localhost:3333/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ movie })
    }).then(data => data.json())
}