import getHash from '../utils/getHash'
import getData from '../utils/getData'

const Character = async () => {
  const name = getHash()
  const champion = await getData(name)

  console.log(champion)

  return (`
    <div class="Characters-inner">

      <article class="Characters-card">
        <img src="${champion.champion_image}" alt="${champion.name}" />
        <h2>${champion.name}</h2>
      </article>

      <article class="Characters-card">
        <h3>Alias: ${champion.alias}</h3>
        <h3>Role: ${champion.role}</h3>
        <h3>Region: ${champion.region}</h3> 
      </article>
    </div>

    <article class="Character-skins">
      ${champion.skins.map(skin =>
        `<figure>
          <img src="${skin}" />  
        </figure>`
      ).join('')}
      </article>
  `)
}

export default Character