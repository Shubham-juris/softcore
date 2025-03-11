import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button, IconButton, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: '#ffffff',
        py: 4,
        mt: 4,
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff4500',
              }}
            >
              Softcore Technologies
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Innovating software solutions for businesses worldwide. We strive to deliver excellence and drive success for our clients.
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff4500',
              }}
            >
              Quick Links
            </Typography>
            <Box>
              <Link href="/about" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                About Us
              </Link>
              <Link href="/services" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Services
              </Link>
              <Link href="/contact" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Contact Us
              </Link>
              <Link href="/privacy" color="inherit" underline="hover" sx={{ display: 'block', mb: 1 }}>
                Privacy Policy
              </Link>
            </Box>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff4500',
              }}
            >
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Email: softcoretechnologies.com
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Phone: +17807283026
            </Typography>
            <Typography variant="body2">
              Address: 4629 3 Avenue, Edson, Alberta T7E 1C2, Canada
            </Typography>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                color: '#ff4500',
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Stay updated with our latest news and offers!
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubscribe}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                flexDirection: { xs: 'column', md: 'row' },
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: '#ffffff',
                  borderRadius: 1,
                  width: { xs: '100%', md: '200px' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#ffffff' },
                    '&:hover fieldset': { borderColor: '#ffffff' },
                    '&.Mui-focused fieldset': { borderColor: '#ffffff' },
                  },
                  '& .MuiInputBase-input': {
                    color: '#ff4500',
                    fontSize: '0.9rem',
                  },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#ff4500',
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  padding: '0.5rem 1.5rem',
                  '&:hover': { backgroundColor: '#e63b00' },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              href="https://www.facebook.com/SoftcoreTechnologies"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#ffffff',
                color: '#1877F2',
                borderRadius: '50%',
                width: 40,
                height: 40,
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              href="https://twitter.com/SoftcoreTech"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#ffffff',
                color: '#1DA1F2',
                borderRadius: '50%',
                width: 40,
                height: 40,
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              href="https://instagram.com/SoftcoreTech"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: '#ffffff',
                color: '#E4405F',
                borderRadius: '50%',
                width: 40,
                height: 40,
                '&:hover': { backgroundColor: '#f0f0f0' },
              }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ mt: 4, textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.1)', pt: 2 }}>
          <Typography variant="body2" sx={{ color: '#ffffff', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Softcore Technologies. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;