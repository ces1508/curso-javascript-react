import movies from './movies.js'
import render from './render.js'

const search = window['search-form']

search.addEventListener('submit', function (event) {
  event.preventDefault()
  const formData = new FormData(this)
  const query = formData.get('title')
  const movies = searchMovie(query)
  if (movies.length > 0) {
    return render(movies)
  }
  return alert('No enconramos tu película')
})

function filterByTitle(title) {
  return movies.filter((movie) => {
    return movie.title.toLowerCase().includes(title.toLowerCase())
  })
}

function findById(id) {
  // return movies.filter((movie) => {
  return movies.find((movie) => {
    return movie.id === parseInt(id, 10)
  })
}

function searchMovie(query) {
  if (isNaN(parseInt(query))) {
    return filterByTitle(query)
  }

  const movie  = findById(query)
  if (movie) return [movie]
  return []
  // return findById(query)
}
