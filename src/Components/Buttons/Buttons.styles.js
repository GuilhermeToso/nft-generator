import styled from "styled-components";
import { UilApps } from '@iconscout/react-unicons'

export const NoBackGroundButton = styled.button`
    position: relative;
    width:36px;
    height:36px;
    background: none;
    border: none;
`

export const IconButton = () => {
    return (
        <NoBackGroundButton>
            <UilApps size="36" color="#000000" >
            </UilApps>
        </NoBackGroundButton>
    )
}

export const Button = styled.button`
    width: ${props => props.Width}%;
    height: ${props => props.Height}%;
    min-width: ${props => props.MinWidth}px;
    background: ${props => props.Color};
    border-radius: 50px;
`