import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
`

export const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;

  @media(max-width: 767px) {
    flex-direction: column;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    flex-grow: 1;
    padding-bottom: 1rem;
    color: ${props => props.theme.colors.text};

    @media(max-width: 767px) {
      padding-top: 1rem;
    }
  }

  @media(max-width: 767px) {
    width: 100%;
  }
`

export const InfoSection = styled.section`
  width: 500px;
  padding-top: 1rem;
  padding-bottom: 3.3rem;
  display: flex;

  span {
    font-size: 14px;
    font-weight: 600;
    display: flex;

    p {
      padding-left: 4px;
      font-weight: normal;
    }
  }

  @media(max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100px;
`

export const CountryFlag = styled.img`
  max-width: 500px;
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s ease;
  box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.085);

  :hover {
    transform: scale(1.01);
  }

  @media(max-width: 767px) {
    width: 100%;
  }
`

export const BorderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 600;
    font-size: 14px;
  }
`

export const LeftContainer = styled.div`
  padding-bottom: 12px;

  span {
    padding-bottom: 8px;
    color: ${props => props.theme.colors.text};
  }
`

export const RightContainer = styled.div`
  padding-bottom: 12px;
  
  @media(min-width: 767px) {
    padding-left: 2.5rem;
  }
  
  span {
    padding-bottom: 8px;
    color: ${props => props.theme.colors.text};
  }
`

export const CountryButton = styled.button`
  font-size: 12px;
  cursor: pointer;
  padding: .3rem;
  border: none;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.095);
  width: 100px;
  transition: all .2s ease;
  outline: none;

  :hover {
    transform: translateY(-2px);
  }
`