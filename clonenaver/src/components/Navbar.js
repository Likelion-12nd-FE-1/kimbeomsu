import React from 'react';
import styled from 'styled-components';

const NaverLogo = styled.div`
    color: #2DB400;  
    font-size: 30px; 
    font-weight: bold;
    padding : 30px 0 0 25vw;
`;

const Navbar = ({ children }) => {
    return (
        <NaverLogo>{children}</NaverLogo>
    );
};

export default Navbar;
