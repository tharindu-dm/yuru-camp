import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Grid, Container } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const HeroSection = styled.div`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const AnimatedSection = styled.div`
  animation: ${fadeIn} 1s ease-in;
`;


const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
`;

const Section = styled.section`
  padding: 40px 0;
`;

const Home = () => {
  const [welcomeMessage, setWelcomeMessage] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());
  const backgroundImage = '/bg.png';
  
  // Initialize welcome message based on time of day
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setWelcomeMessage('Good morning');
    else if (hour < 18) setWelcomeMessage('Good afternoon');
    else setWelcomeMessage('Good evening');
  }, []);

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const campFeatures = [
    "Scenic mountain views",
    "Riverside camping spots",
    "Modern amenities",
    "Guided nature walks",
  ];

  const campsites = [
    { name: "Mountain Vista", price: "$30/night", description: "Breathtaking mountain views" },
    { name: "Riverside Retreat", price: "$35/night", description: "Peaceful spots by the river" },
    { name: "Forest Haven", price: "$25/night", description: "Secluded sites in the woods" },
  ];

  return (
    <div>
      <HeroSection backgroundImage={backgroundImage}>
        <HeroContent>
          <AnimatedSection>
            <Typography variant="h2" component="h1" style={{color: 'white'}}>
              {welcomeMessage}, Welcome to Yuru Camper
            </Typography>
            <Typography variant="h4" style={{color: 'white'}}>
              Current time: {currentTime.toLocaleTimeString()}
            </Typography>
          </AnimatedSection>
        </HeroContent>
      </HeroSection>

      <Container>
        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Our Camp Features
          </Typography>
          <Grid container spacing={2}>
            {campFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{feature}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section>
          <Typography variant="h4" component="h2" gutterBottom>
            Campsites and Pricing
          </Typography>
          <Grid container spacing={3}>
            {campsites.map((site, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>{site.name}</Typography>
                    <Typography variant="h6" color="primary">{site.price}</Typography>
                    <Typography variant="body2">{site.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Section>
      </Container>
    </div>
  );
};

export default Home;