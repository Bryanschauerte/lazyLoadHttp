if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
// import { injectAsyncReducer } from '../../store'

export default {
    path: 'home',
    getComponents (location, cb) {
      require.ensure([
        './components/Home',
        // './reducer'
      ], (require) => {
        let Home = require('./components/Home').default


        cb(null, Home)
      })
    }
  }



// import Home from './components/Home'
//
// export default Home
