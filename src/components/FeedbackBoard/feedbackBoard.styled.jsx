import { styled } from "styled-components";

export const Board = styled.section`
width: 620px;
text-align: center;
margin: auto;
border: ${props => props.theme.borders.normal};
background-color: ${props => props.theme.colors.backmaine};
border-radius: ${props => props.theme.radii.medium};
` 