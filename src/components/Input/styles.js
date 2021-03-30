import styled from 'styled-components';

export const Input = styled.input`
  border: none;
  border-radius: 5px;
  font-weight: 600;
  background: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};
  font-size: .8rem;
  width: 400px;
  outline: none;
  padding-left: 1rem;

  ::placeholder {
    color: ${props => props.theme.colors.text};
  }

  @media(max-width: 650px) {
    width: 100%;
  }
`