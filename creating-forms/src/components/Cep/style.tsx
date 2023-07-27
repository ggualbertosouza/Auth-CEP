import styled from "styled-components";
import { theme } from "../../style/Theme";

export const CepStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 20rem auto;
    width: 50%;
    height: 100%;
    background-color: #292929;
  }
  .container h1 {
    font-size: 5rem;
    font-style: italic;
    color: #6200ee;
  }
  .card {
    width: 100%;
    height: auto;

    padding: 1rem;
  }
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    height: 100%;
  }
  .form input {
    height: 4rem;

    padding: 1rem;
    border: none;
    border-radius: 1rem;
  }
  .form button {
    cursor: pointer;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    color: #ffffff;
    background-color: ${theme.colors["light-green"]};
  }
  .form button:hover {
    background-color: green;
  }
`;
