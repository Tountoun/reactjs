import { Link, Outlet } from "react-router-dom";
import styled from 'styled-components';

const StyledLink = styled(Link)`
    padding: 15px;
    color: #8186a0;
    text-decoration: none;
    font-size: 18px;
    ${(props) =>
        props.$isFullLink &&
        `color: white; border-radius: 30px; background-color: #5843E4;`}
`
function Header() {
    return (
        <>
             <nav>
                <StyledLink to="/">Accueil</StyledLink>
                <StyledLink to="/survey/2">Questionnaire</StyledLink>
                <StyledLink to="/freelances" $isFullLink>Freelances</StyledLink>
            </nav>
            <Outlet/>
        </>
    );
}

export default Header;