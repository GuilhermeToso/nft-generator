import styled from "styled-components";
import { BREAKPOINTS } from "../../Constants";

export const LogoText = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 42px;
    color: #30478C;
`

export const LinkText = styled.h2`
    font-family: Roboto;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    color: #000000;
    
    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 18px;
    }

    
`

export const TitleText = styled.h1`
    position:relative;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 300%;
    line-height: 44px;
    color: #000000;
    width: ${props =>props.Width ? props.Width : '100'}%;
    height: 100%;
    display: flex;

    padding-top: ${props => props.PadTop}px;
    align-items: ${props => props.AlignText};

    @media (max-width: ${BREAKPOINTS.lg}) {
        width: 80%;
    }
`

export const CTAText = styled.h2`
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 48px;
    color: #FFFFFF;
`