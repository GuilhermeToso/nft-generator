import styled from "styled-components";
import { BACKGROUND, BREAKPOINTS } from "../../Constants";

export const Body = styled.div`
    position: absolute;
    width: 100vw;
    height: 100%;
    background: ${props => props.Background ? BACKGROUND : "none"}
    display: grid;
    grid-template-rows: ${props => props.HeaderHeight}px 1fr;
    
    @media (min-width: ${BREAKPOINTS.sm}) and (max-height:${BREAKPOINTS.sm}) {
        position: relative;
        grid-template-rows: ${props => props.HeaderHeight}px auto;
    }
    
`