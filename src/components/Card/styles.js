import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
  padding: 1.2rem;

  @media(max-width: 767px) {
    display: flex;
    flex-direction: column;
  }

  @media(min-width: 768px) and (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }
`

export const CountryCard = styled.article`
  background: ${props => props.theme.colors.elements};
  box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.055);
  max-width: 300px;
  border-radius: 5px;
  transition: all .2s ease;

  img {
    max-width: 100%;
    cursor: pointer;
    border-radius: 5px 5px 0 0;
  }

  :hover {
    transform: scale(1.1);
  }

  @media(max-width: 767px) {
    max-width: 100%;
  }

  @media(min-width: 768px) and (max-width: 900px) {
    max-width: 500px;
  }

  @media(min-width: 1464px) {
    max-width: 500px;
  }

`

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: .8rem;
  color: ${props => props.theme.colors.text};

  h4 {
    padding-bottom: 1rem;
  }

  span {
    font-weight: 600;
    font-size: 14px;
    display: flex;

    p {
      margin-left: 4px;
      font-weight: normal;
    }
  }
`