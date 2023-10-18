import styled from "styled-components";

export const ContainerHome = styled.div``;

export const ContentHome = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  margin-top: -10rem;
`;

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: center;
  gap: 1rem;
  > input[type="text"] {
    width: 50%;
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme.orange};
    border-radius: 6px;

    color: ${(props) => props.theme["gray-700"]};
    font-size: 1rem;
    line-height: 1.6;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.purple};
    color: ${(props) => props.theme.purple};
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme.purple};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
