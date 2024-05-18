import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import { Container, Typography, Box, Link } from '@mui/material';

const Home: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container 
      maxWidth="sm" 
      className="bg-black text-white min-h-screen flex flex-col items-center justify-start px-4 pt-10"
    >
      {/* Page Title */}
      <Box 
        display="flex" 
        alignItems="center" 
        justifyContent="center" 
        className="animate-fade-in text-center mb-6 w-full"
      >
        <Typography 
          variant="h4" 
          component="div" 
          className="text-white w-full"
          style={{ fontFamily: 'Fira Code, monospace', textAlign: 'center', fontSize: '2rem', animation: 'fadeIn 1s ease-in-out' }}
        >
          <span style={{ color: '#00FF00', fontWeight: 'bold' }}>P</span>assword <span style={{ color: '#00FF00', fontWeight: 'bold' }}>G</span>enerator
        </Typography>
      </Box>
      {/* Password Generator Component */}
      <PasswordGenerator />
      {/* Footer */}
      <Box mt={4} className="text-center">
        <Typography 
          variant="body2" 
          className="text-white" 
          style={{ fontFamily: 'Fira Code, monospace' }}
        >
          Developed by <Link 
            href="https://RobertoGallardo.dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-500 hover:text-green-400" 
            style={{ fontFamily: 'Fira Code, monospace' }}
          >
            Roberto Gallardo
          </Link> &copy; {currentYear}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;