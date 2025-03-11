import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import aboutsoft from '../../assets/AboutUs/aboutsoft.webp'; 
import aboutsoftcore from '../../assets/AboutUs/aboutsoftcose.png';

const AboutUs = () => {
  return (
    <Box sx={{  mt :4, py: 4, backgroundColor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            color: '#ff4500',
            fontWeight: 'bold',
            textAlign: 'center',
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          About Softcore Technologies
        </Typography>

        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={aboutsoft}
              alt="Hands working on a tablet"
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                boxShadow: 1,
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                color: '#333',
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '1.5rem', md: '2rem' },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#9acd32',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              At Softcore Technologies, our mission is to provide top-quality software solutions to businesses of all sizes. We strive to exceed our clients' expectations and deliver innovative solutions that drive growth and success.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          mt: 6,
          backgroundImage: `url(${aboutsoftcore})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: { xs: '300px', md: '400px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: 2,
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
        <Typography
          variant="h2"
          sx={{
            color: '#ffffff',
            fontWeight: 'bold',
            textAlign: 'center',
            zIndex: 1,
            fontSize: { xs: '1.8rem', md: '3rem' },
            textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
          }}
        >
          Customer satisfaction is our top priority!
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#ffffff',
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '0.5rem 1rem',
            borderRadius: 1,
            zIndex: 1,
          }}
        >
          Reviews coming soon!
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#ff4500',
          borderRadius: '50%',
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          cursor: 'pointer',
          boxShadow: 1,
        }}
      >
        💬
      </Box>
    </Box>
  );
};

export default AboutUs;
