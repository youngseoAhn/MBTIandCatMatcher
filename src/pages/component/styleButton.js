import React from 'react'
import styled from 'styled-components'

 const StyledButton = styled.button`
 width: 40%;  // 변경된 부분
 min-height: 200px;
 font-size: 15pt;
 margin-left: ${props => (props.marginLeft ? '20px' : '0')};
 background-color: transparent;
 color: white;
 border: 3px solid white;
 border-radius: 10px;
 font-family: 'Bebas Neue', sans-serif;
 `

 const CustomButton = ({ onClick, marginLeft, children }) => (
   <StyledButton onClick={onClick} marginLeft={marginLeft}>
     {children}
   </StyledButton>
 );

 export default CustomButton;