import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
const NavBarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#C8A2C8',
  padding: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
});

const PopUpButton = styled(Button)({
  color: 'white',
  backgroundColor: '#C8A2C8',
  textTransform: 'uppercase',
  boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',
    },
    margin: 10,
});

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Grid>
      <Link to="/">
        <PopUpButton >Home</PopUpButton>
      </Link>
      <Link to="/contact">
        <PopUpButton >Contact</PopUpButton>
      </Link>
      <Link to="/portfolio">
        <PopUpButton >Portfolio</PopUpButton>
        </Link>
        </Grid>
    </NavBarContainer>
  );
};
