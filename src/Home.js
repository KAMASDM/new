// src/Home.js
import React from 'react';
import { Container, Typography, Box, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const services = [
  { title: 'Service 1', description: 'Description of Service 1' },
  { title: 'Service 2', description: 'Description of Service 2' },
  { title: 'Service 3', description: 'Description of Service 3' },
];

const testimonials = [
  { name: 'John Doe', feedback: 'This is an amazing service!' },
  { name: 'Jane Smith', feedback: 'I had a great experience!' },
];

const blogs = [
  { title: 'Blog Post 1', snippet: 'This is a snippet of blog post 1' },
  { title: 'Blog Post 2', snippet: 'This is a snippet of blog post 2' },
];

const Home = () => (
  <div>
    {/* Hero Section */}
    <Box
      sx={{
        height: { xs: '40vh', md: '60vh' },
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
        Welcome to Our Website
      </Typography>
    </Box>

    {/* Our Services */}
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* Testimonials */}
    <Box sx={{ backgroundColor: '#f7f7f7', py: 8 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        {testimonials.map((testimonial, index) => (
          <Box key={index} sx={{ my: 4 }}>
            <Typography variant="h6">{testimonial.name}</Typography>
            <Typography variant="body1">{testimonial.feedback}</Typography>
          </Box>
        ))}
      </Container>
    </Box>

    {/* Blog Posts */}
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom>
        Blog
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((blog, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.snippet}
                </Typography>
                <Button size="small" sx={{ mt: 2 }}>
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* Footer */}
    <Box sx={{ backgroundColor: '#333', color: 'white', py: 4 }}>
      <Container>
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </Typography>
      </Container>
    </Box>
  </div>
);

export default Home;
