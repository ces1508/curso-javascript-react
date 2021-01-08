import rawMoviesList from './movies.js'

const movieList = rawMoviesList.reduce((list, movie) => {
  list.set(movie.id, movie)
  return list
}, new Map())

const has = Object.prototype.hasOwnProperty

// const all = rawMoviesList.map(movie => movie.id)

// const popular = rawMoviesList.reduce((list, movie) => {
//   if (movie.vote_average > 7) {
//     list.push(movie.id)
//   }
//   return list
// }, [])

// const notPopular = rawMoviesList.reduce((list, movie) => {
//   if (movie.vote_average <= 7) {
//     list.push(movie.id)
//   }
//   return list
// }, [])


const { notPopular, popular } = rawMoviesList.reduce((prev, movie) => {
  if (movie.vote_average > 7) {
    has.call(prev, 'popular') ? prev.popular.push(movie) : prev.popular = [movie]
  } else {
    has.call(prev, 'notPopular') ? prev.notPopular.push(movie) : prev.notPopular = [movie]
  }
  return prev
}, {})


const all = [...popular, ...notPopular]
export {
  all,
  popular,
  notPopular
}