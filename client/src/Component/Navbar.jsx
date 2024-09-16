import React, { useState } from 'react';
import styled from 'styled-components';
import WidgetsIcon from '@mui/icons-material/Widgets';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = ({ onToggleRegister }) => {


  return (
    <Nav>
      <div><WidgetsIcon className="icon" /></div>
      <div><AccountCircleIcon className="icon"  onClick={onToggleRegister} /></div>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items:center;
  

  .icon {
    font-size: 3rem;
    cursor:pointer;
  }
`;
