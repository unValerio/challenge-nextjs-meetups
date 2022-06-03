import styled from 'styled-components';

export const ItemWrapper = styled.div`
  margin: 1rem 0;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
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

  button {
    font: inherit;
    cursor: pointer;
    color: #77002e;
    border: 1px solid #77002e;
    background-color: transparent;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;

    &:hover,
    &:active {
      background-color: #ffe2ed;
    }
  }
`;
