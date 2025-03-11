import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import HeroImage from '../../assets/Hero/business-tech.avif';

const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: 'auto', md: '500px' },
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        padding: '2rem 0',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Box
          sx={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: { xs: '1rem', md: '0' },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
            }}
          >
            Transform Your Business with Technology
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
              textShadow: '1px 1px 5px rgba(0,0,0,0.7)',
            }}
          >
            Discover innovative software solutions for your business needs.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: 'black',
              fontSize: '1rem',
              padding: '0.8rem 2rem',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            Get Started Today
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;