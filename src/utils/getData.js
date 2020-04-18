const API = 'http://api-lol.herokuapp.com/api/champions'

const getData = async (name) => {
  const apiURL = name ? `${API}/${name}` : API

  try {
    const data = await fetch(apiURL).then(res => res.json())
    return data
  } catch (error) {
    console.log('Fetch error', error)
  }
}

export default getData