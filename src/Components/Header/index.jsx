import { NavLink, HeaderContainer, LogoContainer, IconButtonContainer } from "./Header.styles";
import { LogoText, LinkText } from "../Texts";
import { IconButton } from "../Buttons";


const Header = (props) => {
    return (
        <HeaderContainer displayNav={props.displayNav}>
            <LogoContainer>
                <NavLink to="/"><LogoText>Logo</LogoText></NavLink>
            </LogoContainer>
            <NavLink to="/login"><LinkText>Login</LinkText></NavLink>
            <NavLink to="/register"><LinkText>Register</LinkText></NavLink>
            <NavLink to="/about"><LinkText>About</LinkText></NavLink>
            <NavLink to="/contact"><LinkText>Contact</LinkText></NavLink>
            <IconButtonContainer>
                <IconButton></IconButton>
            </IconButtonContainer>        
        </HeaderContainer>
    )
}

export {Header}
