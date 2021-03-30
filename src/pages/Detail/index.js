import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import api from '../../services/api';

import Button from '../../components/Button';

import {
  Container,
  DetailContainer,
  CountryFlag,
  InfoContainer,
  InfoSection,
  LeftContainer,
  RightContainer
} from './styles';

function Detail() {
  const [country, setCountry] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  const [languages, setLanguages] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const loadCountry = async () => {
      const { data } = await api.get(`name/${name}`);

      setCountry(data);

      const currencies = data.map(data => {
        return data.currencies.map(currency => currency.name);
      });

      const languages = data.map(data => {
        return data.languages.map(language => language.name);
      });

      console.log(currencies);

      setCurrencies(currencies);
      setLanguages(languages);
    }

    loadCountry();
  }, [name]);

  return (
    <Container>
      <Button />

      <DetailContainer>
        {country.map(country => (
          <>
            <CountryFlag src={country.flag} />
            <InfoContainer>
              <h1>{country.name}</h1>

              <InfoSection>
                <LeftContainer>
                  <span>Native name: <p>{country.nativeName}</p></span>
                  <span>Population: <p>{country.population.toLocaleString('pt-BR')}</p></span>
                  <span>Region: <p>{country.region}</p></span>
                  <span>Subregion: <p>{country.subregion}</p></span>
                  <span>Capital: <p>{country.capital}</p></span>
                </LeftContainer>
                <RightContainer>
                  <span>Top Level Domain: <p>{country.topLevelDomain}</p></span>
                  <span>Currencies: {currencies.map(currency => <p>{currency}</p>)}</span>
                  <span>Languages: {languages.map(language => <p>{' ' + language + ' '}</p>)}</span>
                </RightContainer>
              </InfoSection>

            </InfoContainer>
          </>
        ))}
      </DetailContainer>
    </Container>
  )
}

export default Detail;
