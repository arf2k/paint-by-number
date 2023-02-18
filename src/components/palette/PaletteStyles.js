import styled from 'styled-components';

export const PaletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 20px 0;
  padding: 20px;
  background-color: #f2f2f2;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
  width: 200px;
  left: 20px;
  position: absolute;
`;

export const ColorSquare = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 5px #ccc;
  background-color: ${props => props.color};
`;
