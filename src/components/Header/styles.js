import styled from 'styled-components';

export const HeaderBar = styled.header`
  background: ${props => props.theme.colors.elements};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 0px 12px -10px ${props => props.theme.colors.text};
  padding: 1.3rem;

  span {
    font-weight: bold;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text}
  }

  button {
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.elements};
    color: ${props => props.theme.colors.text};
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 600;
    border: none;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s;
    outline: none;
    
    p {
      padding-left: .6rem;
    }
  }
`