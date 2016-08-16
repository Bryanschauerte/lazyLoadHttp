if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
// import { injectAsyncReducer } from '../../store'

export default {

    path: '/landing',
    getComponents (location, cb) {
      require.ensure([
        './components/Landing',
        // './reducer'
      ], (require) => {
        let Landing = require('./components/Landing').default


        cb(null, Landing)
      })
    }
  }




//
// import Landing from './components/Landing'
//
// export default Landing
