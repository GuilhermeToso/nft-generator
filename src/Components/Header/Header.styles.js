import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { BREAKPOINTS } from "../../Constants";

export const HeaderContainer = styled.nav`
    width: 100%;
    height: 100%;
    position: relative;
    display:${props => props.displayNav ? "grid" : "none"};
    grid-template-columns: 5fr 1fr 1fr 1fr 1fr 1fr;
`

export const LogoContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 72px;
`

export const NavLink = styled(Link)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &.active {
        color:#428AEB;
    }

    @media(max-width: ${BREAKPOINTS.md}) {
        font-size: 18px;
    }
`

export const IconButtonContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center
`