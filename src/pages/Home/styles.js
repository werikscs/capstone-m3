import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  max-width: 1440px;

  margin: 0 auto;
`;

export const ContainerListPets = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.25rem;
    padding-bottom: 16px;
  }
  
  > div {
    background-color: var(--color-fifth);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: 1.6rem;
      padding-bottom: 16px;
    }
  }
`;