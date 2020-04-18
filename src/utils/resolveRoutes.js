import getChampion from './getChampion'

const resolveRoutes = (route) => {
  switch (route) {
    case '/':
      return '/'
    case '/about':
      return '/about'
    default:
      route = route.includes('mundo') ? 'dr-mundo' : route.replace("'", '-')
      if (getChampion(route)) {
        return '/:name'
      }
      return `/${route}`
  }
}

export default resolveRoutes