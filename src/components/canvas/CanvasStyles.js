import styled from 'styled-components';

// import styled from 'styled-components';

// StyledCanvasWrapper component
export const StyledCanvasWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
height: 500px;
width: 500px;
`;

// StyledCanvasFrame component
export const StyledCanvasFrame = styled.div`
position: relative;
display: flex; 
align-items: center;
justify-content: center;
border: 2px solid #333;
box-shadow: 0 0 10px #999;
width: ${props => props.width}px;
height: ${props => props.height}px;
`;
