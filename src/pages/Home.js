import getData from '../utils/getData'
import '../styles/styles.css'

const Home = async () => {
  const champions = await getData()
  return (`
    <div class="Characters">
      ${champions.map(champion => `      
        <article class="Characters-item">
          <a href="#/${champion.name}/">
            <img src="${champion.champion_image}" alt="${champion.name}" loading="lazy"/>
            <h2>${champion.name}</h2>
          </a>
        </article>
      `).join('')}
    </div>
  `)
}

export default Home