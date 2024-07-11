import React, { useContext } from 'react';
import { Typography, Card, CardContent, Grid, Container } from '@mui/material';
import styled from 'styled-components';
import { ThemeContext } from '../Contexts/ThemeContext';

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

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
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
  const { theme } = useContext(ThemeContext);
  const backgroundImage = '/path/to/your/image.jpg'; // Update this path

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
        <HeroOverlay />
        <HeroContent>
          <Typography 
            variant="h2" 
            component="h1" 
            style={{ 
              color: 'white', 
              textShadow: theme === 'light' ? '2px 2px 4px rgba(0,0,0,0.7)' : 'none'
            }}
          >
            Welcome to Yuru Camper
          </Typography>
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