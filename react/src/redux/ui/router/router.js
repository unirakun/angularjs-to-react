import { routerForBrowser } from 'redux-little-router'

const basename = process.env.NODE_ENV === 'production' ? '/react' : ''

export const { reducer, enhancer, middleware } = routerForBrowser({
  routes: {
    '/': { title: 'ALL',
      '/active': { title: 'ACTIVE' },
      '/completed': { title: 'COMPLETED' },
    },
  },
  basename,
})
