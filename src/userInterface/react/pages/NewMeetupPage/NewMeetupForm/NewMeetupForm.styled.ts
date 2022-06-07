import styled from 'styled-components';

export const Card = styled.div`
  background-color: white;
  border-radius: 0.375.rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  padding: 1rem;
`;

export const Control = styled.div`
  margin-bottom: 0.5rem;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input,
  textarea {
    display: block;
    font: inherit;
    border-radius: 0.25rem;
    border: 0.0625rem solid #ccc;
    padding: 0.25rem;
    width: 100%;
  }
`;

export const Actions = styled.div`
  margin-top: 1rem;
  text-align: right;

  button {
    font: inherit;
    cursor: pointer;
    background-color: #77002e;
    color: white;
    padding: 0.5rem 1.5rem;
    border: 0.0625rem solid #77002e;
    border-radius: 0.25rem;
    font-weight: bold;

    &:hover,
    &:active {
      background-color: #a50e48;
      border-color: #a50e48;
    }
  }
`;
