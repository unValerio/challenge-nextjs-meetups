import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin: 1rem 0;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.2);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 0.375rem;
  border-top-left-radius: 0.375rem;
  position: relative;
`;

export const Content = styled.div`
  text-align: center;
  padding: 1rem;

  h3 {
    font-size: 1.25rem;
    color: #2c292b;
  }
`;

export const Actions = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const AddButton = styled.button`
  font: inherit;
  cursor: pointer;
  color: #77002e;
  border: 0.0625rem solid #77002e;
  background-color: transparent;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;

  &:hover,
  &:active {
    background-color: #ffe2ed;
  }
`;

export const RemoveButton = styled.button`
  font: inherit;
  cursor: pointer;
  color: white;
  border: 0.0625rem solid #77002e;
  background-color: #77002e;
  padding: 0.5rem 1.5rem;
  border-radius: 0.25rem;

  &:hover,
  &:active {
    background-color: #ffe2ed;
  }
`;
