// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Home';
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Blog from './Blog';
import ContactUs from './ContactUs';
import BottomNav from './BottomNav';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [value, setValue] = useState(0);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem button component={Link} to="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem button component={Link} to="/services">
          <ListItemText primary="Our Services" />
        </ListItem>
        <ListItem button component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button component={Link} to="/contact">
          <ListItemText primary="Contact Us" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Router>
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My Website
            </Typography>
            <Button color="inherit" component={Link} to="/" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ display: { xs: 'none', sm: 'block' } }}>
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/services" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Our Services
            </Button>
            <Button color="inherit" component={Link} to="/blog" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Blog
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ display: { xs: 'none', sm: 'block' } }}>
              Contact Us
            </Button>
          </Toolbar>
        </AppBar>

        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawer}
        </Drawer>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* Bottom Navigation */}
        <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
          <BottomNav value={value} setValue={setValue} />
        </Box>
      </div>
    </Router>
  );
}

export default App;
