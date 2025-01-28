import styled from 'styled-components';

const NavbarLayout = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 2rem 0;

    .nav {
    
        display: flex;
        list-style: none;
        font-weight: 700;
        gap: 1rem;
        padding: 8px;
        border-radius: 4px;
    }
`;

export default NavbarLayout;