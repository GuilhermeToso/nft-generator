import styled from "styled-components";


export const TitleHomeContainer = styled.div`
    position: relative;
    grid-area: ${props => props.GridArea};
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    align-items: center;
    padding-left: 72px;
    `

export const ButtonHomeContainer = styled.div`
    grid-area: ${props => props.GridArea};
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 72px;
    padding-top: 24px;
`