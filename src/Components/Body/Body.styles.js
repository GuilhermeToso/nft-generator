import styled from "styled-components";
import { BACKGROUND, BREAKPOINTS} from "../../Constants";

export const Body = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    background: url(${props => props.Background ? BACKGROUND : "none"}) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: grid;
    grid-template-rows: ${props => props.HeaderHeight}px 1fr;
    
    @media (min-width: ${BREAKPOINTS.sm}) and (max-height:${BREAKPOINTS.sm}) {
        position: relative;
        grid-template-rows: ${props => props.HeaderHeight}px auto;
    }
    
`