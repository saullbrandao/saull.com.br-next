import * as S from './styles'

const Project = () => {
  return (
    <S.Wrapper>
      <h2>Countries App</h2>
      <img
        src="https://raw.githubusercontent.com/saullbrandao/countries-app/main/demo-dark.png"
        alt=""
      />
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
    </S.Wrapper>
  )
}

export default Project
