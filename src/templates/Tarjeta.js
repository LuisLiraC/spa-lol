const Tarjeta = (champion) => (`
  <article class="Characters-item">
    <a href="#/${champion.name}/">
      <img src="${champion.champion_image}" alt="${champion.name}" loading="lazy"/>
      <h2>${champion.name}</h2>
    </a>
  </article>
`)

export default Tarjeta
