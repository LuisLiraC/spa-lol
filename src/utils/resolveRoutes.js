import getChampion from './getChampion'

const resolveRoutes = (route) => {
  switch (route) {
    case '/':
      return '/'
    case '/about':
      return '/about'
    default:
      if (getChampion(route)) {
        return '/:name'
      }
      return `/${route}`
  }
}

export default resolveRoutes