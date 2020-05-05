import getData from '../utils/getData'
import Tarjeta from '../templates/Tarjeta'
import '../styles/styles.css'

const Home = async () => {
  const champions = await getData()

  return (`
    <div class="Characters">
      ${champions.map(Tarjeta).join('')}
    </div>
  `)
}

export default Home