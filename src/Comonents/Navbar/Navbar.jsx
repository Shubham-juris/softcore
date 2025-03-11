import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../../assets/Navbar/softcore.png';

const pages = ['Home', 'Services', 'About Us', 'Location', 'Contact Us'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
       
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            src={Logo}
            alt="Softcore Technologies Logo"
            sx={{ display: { xs: 'none', md: 'flex' }, height: 60, mr: 2 }}
          />

          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              sx={{ color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    sx={{
                      textAlign: 'center',
                      color: '#333',
                      fontSize: '1rem',
                      '&:hover': { color: '#ff4500' },
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: '#333',
                  fontSize: '1rem',
                  fontWeight: '600',
                  padding: '0.5rem 1.5rem',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    color: '#ff4500',
                    backgroundColor: 'transparent',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    width: '0%',
                    height: '3px',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#ff4500',
                    transition: 'width 0.4s ease-in-out',
                  },
                  '&:hover::after': {
                    width: '100%',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
