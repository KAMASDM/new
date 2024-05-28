// src/BottomNav.js
import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ServicesIcon from '@mui/icons-material/Build';
import BlogIcon from '@mui/icons-material/Article';
import ContactIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';

const BottomNav = ({ value, setValue }) => {
  const navigate = useNavigate();

  const handleBottomNavigationChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/services');
        break;
      case 2:
        navigate('/blog');
        break;
      case 3:
        navigate('/contact');
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation value={value} onChange={handleBottomNavigationChange}>
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Services" icon={<ServicesIcon />} />
      <BottomNavigationAction label="Blog" icon={<BlogIcon />} />
      <BottomNavigationAction label="Contact" icon={<ContactIcon />} />
    </BottomNavigation>
  );
};

export default BottomNav;
