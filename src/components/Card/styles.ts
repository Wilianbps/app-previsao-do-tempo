import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 25rem;

  transform: translateY(calc(-50%));

  section {
    background: ${(props) => props.theme.orange};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${props => props.theme["base-title"]};

    header {
      font-size: 1.2rem;
      color: ${props => props.theme.white};
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      color: var(--shape);
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    p {
      color: var(--shape);
      display: block;
      margin-top: 1rem;
      font-size: 1rem;
      font-weight: 500;
      line-height: 2rem;
    }
  }
`;
