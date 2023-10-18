import styled from "styled-components";

export const Container = styled.header`
  background: ${(props) => props.theme.purple};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    font-weight: bold;
    > svg {
      font-size: 40px;
    }
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: ${(props) => props.theme["purple-light"]};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
