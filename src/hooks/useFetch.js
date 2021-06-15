import useSWR from 'swr';

const baseURL = 'https://restcountries.eu/rest/v2';

export default function useFetch(path) {
  const { data, error } = useSWR(baseURL + path, async baseURL => {
    const response = await fetch(baseURL);
    const data = await response.json();

    return data;
  })

  return { data, error };
}