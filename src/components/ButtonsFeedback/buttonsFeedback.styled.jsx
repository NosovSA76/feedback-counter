import { styled } from "styled-components"

export const ButtonsBox = styled.div`
width: ${props => props.theme.space[9]}px;
display: flex;
margin: auto;
justify-content: space-around;
`
export const ButtonGood = styled.button`
color: green;
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover {
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhover};
    box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  
  } 
`
export const ButtonNeutral = styled.button`
color: Yellow;
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};;
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover {
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhover};
     box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  
  } 
`
export const ButtonBad = styled.button`
color: red;
width: ${props => props.theme.space[7]}px;
background: ${props => props.theme.colors.backnorm};;
text-transform: capitalize;
padding: ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
border-radius: ${props => props.theme.radii.medium};
box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
&:hover {
    border: ${props => props.theme.borders.normal};
    background: ${props => props.theme.colors.backhover};
     box-shadow: inset -1px -1px 4px #ffffff, inset 1px 1px 5px #ceced1;
  } 
  &:active {
    box-shadow: 5px 5px #666;
    transform: translateY(4px);
  
  } 
`