import { styled } from "styled-components";

export const StatGood = styled.p`
display: flex;
justify-content: left;
align-items: center;
padding: ${props => props.theme.space[3]}px;
width: ${props => props.theme.space[8]}px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.space[4]}px;
font-weight: ${props => props.theme.fontWeights.semiBold};;
border-radius: ${props => props.theme.radii.medium};
text-shadow: .3px .3px .4px blue;
`
export const StatNeutral = styled.p`
display: flex;
justify-content: left;
align-items: center;
padding: ${props => props.theme.space[3]}px;
width: ${props => props.theme.space[8]}px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.space[4]}px;
font-weight: ${props => props.theme.fontWeights.semiBold};;
border-radius: ${props => props.theme.radii.medium};
text-shadow: .3px .3px .4px blue;
`
export const StatBad = styled.p`
display: flex;
justify-content: left;
align-items: center;
padding: ${props => props.theme.space[3]}px;
width: ${props => props.theme.space[8]}px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.space[4]}px;
font-weight: ${props => props.theme.fontWeights.semiBold};;
border-radius: ${props => props.theme.radii.medium};
text-shadow: .3px .3px .4px blue;
`
export const StatField = styled.div`
`

export const TotalScore = styled.p`
display: flex;
justify-content: left;
align-items: center;
padding: ${props => props.theme.space[3]}px;
width: ${props => props.theme.space[8]}px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.space[4]}px;
font-weight: ${props => props.theme.fontWeights.semiBold};;
border-radius: ${props => props.theme.radii.medium};
text-shadow: .3px .3px .4px blue;
`
export const Percentage = styled.p`
display: flex;
justify-content: left;
align-items: center;
padding: ${props => props.theme.space[3]}px;
width: ${props => props.theme.space[8]}px;
margin: ${props => props.theme.space[4]}px auto;
font-size: ${props => props.theme.space[4]}px;
font-weight: ${props => props.theme.fontWeights.semiBold};;
border-radius: ${props => props.theme.radii.medium};
text-shadow: .3px .3px .4px blue;
`