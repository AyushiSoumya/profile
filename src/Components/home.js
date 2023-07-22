import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import profilePic from './profile_pic.png';

const HomeContainer = styled('div')({
  backgroundColor: '#C8A2C8', 
  color: 'white',
   alignItems: 'center',
  justifyContent: 'center',
  height: 'auto',
  width: '100%',
});

const ProfileCard = styled(Grid)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  margin: '5%',
  padding: '5%',
  backgroundColor: '#e1c4ff',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',
  },
  cursor: 'pointer',
 
});

const ProfileImage = styled('img')(({ isFlipped }) => ({
  width: '70%',
  height:'auto',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
  '&:hover': {
    transform: ' rotateY(180deg)',
  },
  justifyContent: 'center',
  alignItems: 'center',
}));

const PopUpButton= styled(Button)({
  color: 'white',
  backgroundColor: '#C8A2C8',
  textTransform: 'uppercase',
  boxShadow: '0 3px 5px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 10px rgba(0, 0, 0, 0.3)',
    },
  margin: '10%',
    
});

const Home = () => {
  const [isImageFlipped, setImageFlipped] = useState(false);

  const onImageHover = () => {
    setImageFlipped((prevState) => !prevState);
  };


const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Ayushi Soumya Resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AYUSHI SOUMYA RESUME.pdf';
                alink.click();
            })
        })
    }
  return (
    <HomeContainer >
      <Grid container spacing={10} justifyContent="center" >
        <Grid item xs={12} sm={6} >
          <ProfileCard>
            <CardContent>
              <h2>Welcome to my profile page</h2>
              <Grid>
                Hi there! I am Ayushi, and I'm a BTech student at PES University, Bengaluru.
                I'm passionate about coding and programming, and I'm always
                looking for new ways to learn and grow. I'm excited to connect with
               others who share my interests and to learn from different perspectives.
              </Grid>
            </CardContent>
          </ProfileCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ProfileImage
            src={profilePic} 
            alt="Profile Picture"
            isFlipped={isImageFlipped}
            onMouseEnter={onImageHover}
            onMouseLeave={onImageHover}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <PopUpButton
            href="https://drive.google.com/drive/u/0/folders/1Vw3EH2IU6CCPR1gh9QFqFbTtA3BWIuSc"
          >
            Click here to view certificates
          </PopUpButton>
        </Grid>
        <Grid item xs={12} sm={6}>
          <PopUpButton onClick={onButtonClick} >
            Click here to download resume
          </PopUpButton>
        </Grid>
      </Grid>
    </HomeContainer>
  );
};

export default Home;
