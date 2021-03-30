import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const LinkButton = styled(Link)`
  text-decoration: none;
  color: #000;
`

export const BackButton = styled.button`
  background: ${props => props.theme.colors.elements};
  color: ${props => props.theme.colors.text};
  font-size: 13px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: .5rem;
  border: none;
  border-radius: 5px;
  background: ${props => props.theme.colors.elements};
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.095);
  width: 100px;
  transition: all .2s ease;
  outline: none;

  :hover {
    transform: translateY(-2px);
  }

`