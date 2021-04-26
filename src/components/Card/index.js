import React from 'react';

import { Container, CountryCard, InfoSection } from './styles';

import { useHistory } from 'react-router-dom';

function Card({ country }) {
  const history = useHistory();

  function handleFlagClick(name) {
    history.push(`detail/${name}`);
  }

  return (
    <Container>
      {country.map(country => (
        <CountryCard key={country.name}>
          <img src={country.flag} alt="Country flag" onClick={() => handleFlagClick(country.name)}/>

          <InfoSection>
            <h4>{country.name}</h4>
            <span>Population: <p>{country.population.toLocaleString('pt-BR')}</p></span>
            <span>Region: <p>{country.region}</p></span>
            <span>Capital: <p>{country.capital}</p></span>
          </InfoSection>
        </CountryCard>
      ))}
      
    </Container>
  )
}

export default Card
