import styled from "styled-components";
import {theme} from '../../style/Theme'


export const CepStyle = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 5rem auto;
    width: 50%;
    height: 50%;
  }
  .form{
    display: flex;
    flex-direction: column;
    gap: 1rem;

    width: 100%;
    height: 100%;
  }
  .form input{
    height: 3rem;

    padding: 1rem;
    border: none;
    border-radius: 1rem;
  }
  .form button{
    cursor: pointer;
    padding: 1rem;
    border: none;

    color: #FFFFFF;
    background-color: ${theme.colors["light-green"]};
  }
  .form button:hover{
    background-color: green;
  }
`;
