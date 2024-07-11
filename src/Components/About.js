import React from "react";
import { Typography, Container, Paper } from "@mui/material";
import styled from "styled-components";

const Section = styled.section`
  padding: 40px 0;
`;

const About = () => {
  return (
    <Container>
      <Section>
        <Typography variant="h2" component="h1" gutterBottom>
          About Yuru Camper
        </Typography>

        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="body1" paragraph>
            Yuru Camper is your gateway to unforgettable outdoor experiences.
            Founded in 2024, we've been connecting nature enthusiasts with the
            best camping spots across the country for over a decade.
          </Typography>

          <Typography variant="body1" paragraph>
            Our mission is to make camping accessible, enjoyable, and safe for
            everyone. Whether you're a seasoned outdoorsman or a first-time
            camper, Yuru Camper offers a diverse range of campsites to suit your
            needs and preferences.
          </Typography>

          <Typography variant="body1" paragraph>
            We take pride in our carefully curated selection of campsites, each
            chosen for its unique beauty, convenience, and the quality of
            experience it offers. From tranquil lakeside spots to adventurous
            mountain retreats, we have something for every type of camper.
          </Typography>

          <Typography variant="body1">
            At Yuru Camper, we believe that connecting with nature is essential
            for our well-being. We're committed to preserving the natural beauty
            of our campsites and promoting responsible, sustainable camping
            practices. Join us in our journey to explore, respect, and cherish
            the great outdoors.
          </Typography>
        </Paper>
      </Section>
    </Container>
  );
};

export default About;
