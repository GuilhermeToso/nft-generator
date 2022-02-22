import styled from "styled-components";

export const MainContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: ${props => props.GridTemplateRows};
    grid-template-columns:${props => props.GridTemplateColumns};
    grid-template-areas:${props => props.GridTemplateAreas};
`
