import {
  renderMovieList
} from './render.js'

import {
  all,
  popular as mostValued,
  notPopular as leastValued
} from './normalize.js'

filter.addEventListener('change', function () {
  switch (this.value) {
    case 'most-valued':
      return renderMovieList(mostValued)
    case 'least-valued':
      return renderMovieList(leastValued,)
    default:
      return renderMovieList(all)
  }
})