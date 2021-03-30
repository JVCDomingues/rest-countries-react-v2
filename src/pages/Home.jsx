import React, { useEffect, useState, useRef } from 'react';

import { debounce } from 'lodash';

import { FiSearch } from 'react-icons/fi';

import { Input } from '../components/Input/styles';
import { Select } from '../components/Select/styles';
import { InputContainer } from './Home.styles';
import Card from '../components/Card';

import api from '../services/api';

function Home() {
  const [countries, setCountries] = useState([]);
  const [filterCountry, setFilterCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');

  const delayed = useRef(debounce(e => setFilterCountry(e), 1000)).current;

  useEffect(() => {
    const loadAllCountries = async () => {
      const { data } = await api.get('/all');
      
      setCountries(data);
    }

    loadAllCountries();
  }, []);

  useEffect(() => {
    const loadCountryByName = async () => {
      const { data } = await api.get(`name/${filterCountry}`);

      setCountries(data);
    }

    loadCountryByName();
  }, [filterCountry]);

  useEffect(() => {
    const loadCountriesByRegion = async () => {
      const { data } = await api.get(`region/${selectedRegion}`);

      setCountries(data);
    }

    loadCountriesByRegion();
  }, [selectedRegion]);

  return (
    <div>
      <InputContainer>
        <div className="box">
          <FiSearch className="search-icon"/>
          <Input 
            type="text"
            name="country"
            placeholder="Search for a country..."
            onChange={e => delayed(e.target.value)}
          />
        </div>

        <Select 
          name="region"
          id="region"
          onChange={e => setSelectedRegion(e.target.value)}
        >
          <option selected value="" disabled hidden>Filter by region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </Select>
      </InputContainer>

      <Card country={countries}/>
    </div>
  )
}

export default Home;
