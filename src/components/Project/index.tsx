import * as S from './styles'

const Project = () => {
  return (
    <S.Container>
      <h2>Countries App</h2>
      <img
        src="https://raw.githubusercontent.com/saullbrandao/countries-app/main/demo-dark.png"
        alt="demo"
      />
      <S.Wrapper>
        <a href="https://github.com/saullbrandao/countries-app" target="_blank">
          Source
        </a>
        <a
          href="https://countries-app-saullbrandao.vercel.app/"
          target="_blank"
        >
          Visit
        </a>
      </S.Wrapper>
      <ul>
        <li>
          Use data from the REST Countries API to display
          information(population, languages, currencies, capital, border
          countries, etc.) about the countries
        </li>
        <li>You can filter by region and search by country name</li>
        <li>There is a light and dark mode</li>
        <li>
          Clicking on a card will open a new page which display more information
          about the country selected
        </li>
      </ul>
    </S.Container>
  )
}

export default Project
