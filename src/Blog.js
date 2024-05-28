// src/Blog.js
import React from 'react';
import { Container, Typography } from '@mui/material';

const Blog = () => (
  <Container>
    <Typography variant="h4" gutterBottom>
      Blog
    </Typography>
    <Typography variant="body1">
      Read our latest blog posts.
    </Typography>
  </Container>
);

export default Blog;
