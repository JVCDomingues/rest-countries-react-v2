import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem;

  @media(max-width: 650px) {
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .box {
    display: flex;
    align-items: center;
    background-color: ${props => props.theme.colors.elements};
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.055);
    padding: 1rem;
    width: 400px;
    border-radius: 5px;
    justify-content: space-between;

    .search-icon {
      color: ${props => props.theme.colors.text}
    }

    @media(max-width: 650px) {
      width: 100%;
    }
  }
`