import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  width: 22rem;
  transform: translateY(calc(-50%));

  background: ${(props) => props.theme["purple-light"]};
  padding: 1.5rem 2rem;
  border-radius: 10px;
  color: ${(props) => props.theme["base-title"]};

 > header {
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    gap: 2rem;

    > section {
      h4 {
        font-size: 1.2rem;
      }
      p {
        margin-top: 0.2rem;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }

 > main {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0;

    p {
      font-size: 3.5rem;
    }

    span {
      font-size: 1rem;
    }
  }

  > footer {
    display: flex;
    flex-direction: column;
    gap: 2rem; 

    .content_footer {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .droplet {
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .wind {
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }
    }

    > button {
    margin: 0 auto;
    font-size: 0.875rem;
    color: #fff;
    background: ${(props) => props.theme["purple"]};
    border: 0;
    max-width: 15rem;
    padding: 0 0.875rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
  }
`;
