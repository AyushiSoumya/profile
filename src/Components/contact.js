import React from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";

const contacts = [
  {
    class: 'linkedin',
    url: 'https://www.linkedin.com/in/ayushi-soumya-5a5413240/',
    icon: AiFillLinkedin,
  },
  {
    class: 'github',
    url: 'https://github.com/AyushiSoumya',
    icon: AiOutlineGithub,
  },
  {
    class: 'leetcode',
    url: 'https://leetcode.com/Ayushi_Soumya/',
    icon: SiLeetcode,
  }
]

const ContactContainer = styled('div')({
  backgroundColor: '#C8A2C8',
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  height:"100vh"
});

const Contact = () => {
  return (
    <ContactContainer>
      
        <Grid >
          <Grid >
            Phone Number: (+91) 8102986784
            </Grid>
          <Grid >
        
            Email ID: soumya.ayushi@gmail.com
          </Grid>
        </Grid>
        <Grid >
          {contacts.map((items) => {
            const IconComponent = items.icon;
            return (
              <div key={items.class}>
                <a href={items.url}>
                  <IconComponent size={100} title={items.class} />
                </a>
              </div>
            )
          })}
        </Grid>
      
    </ContactContainer>
  );
}

export default Contact;
