import React, { useState } from 'react';
import { Box, Typography, Container, TextField, Button, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';

const SocialSubscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <Box>
      <Container maxWidth="md" sx={{ textAlign: 'center', mb: 4, backgroundColor: '#ffffff' }}>
        <Typography
          variant="h2"
          sx={{
            color: '#ff4500',
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
            mb: 2,
          }}
        >
          Social
        </Typography>
        <Box sx={{ mb: 2 }}>
          <IconButton
            href="https://www.facebook.com/SoftcoreTechnologies"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              backgroundColor: '#ffffff',
              borderRadius: '50%',
              width: 50,
              height: 50,
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <FacebookIcon sx={{ color: '#1877F2', fontSize: '2rem' }} />
          </IconButton>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: '#ff4500',
          py: 4,
          textAlign: 'center',
          color: '#ffffff',
        }}
      >
        <Container maxWidth="md ">
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2rem', md: '3rem' },
              mb: 2,
            }}
          >
            Subscribe
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              fontSize: { xs: '0.9rem', md: '1rem' },
            }}
          >
            Get 10% off your first purchase when you sign up for our newsletter!
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubscribe}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
              flexDirection: { xs: 'column', md: 'row' },
            }}
          >
            <TextField
              variant="outlined"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{
                backgroundColor: '#ffffff',
                borderRadius: 1,
                width: { xs: '100%', md: '300px' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#ffffff' },
                  '&:hover fieldset': { borderColor: '#ffffff' },
                  '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                },
                '& .MuiInputBase-input': {
                  color: '#ff4500',
                  fontSize: '1rem',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#ff4500',
                fontWeight: 'bold',
                fontSize: '1rem',
                padding: '0.5rem 2rem',
                borderRadius: 1,
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
            >
              SIGN UP
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default SocialSubscribe;
