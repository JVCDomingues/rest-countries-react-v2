import styled from 'styled-components';

export const Select = styled.select`
  font-weight: 600;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 1px 1px 2px rgba(0, 0, 0, 0.055);
  background: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};
  width: 200px;

  option {
    font-weight: 600;
  }

  @media(max-width: 650px) {
    width: 100%;
    margin-top: 1rem;
    flex: 1;
  }
`