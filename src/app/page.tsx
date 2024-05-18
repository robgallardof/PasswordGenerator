import React from 'react';
import PasswordGenerator from './components/PasswordGenerator';
import { Container, Typography, Box, Link } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Home: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="sm" className="mt-10 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Page Title with Lock Icon */}
      <Typography variant="h3" component="h1" gutterBottom className="text-white flex items-center animate-fade-in" style={{ fontFamily: 'Fira Code, monospace' }}>
        <LockIcon className="mr-2" /> Password Generator
      </Typography>
      {/* Password Generator Component */}
      <PasswordGenerator />
      {/* Footer */}
      <Box mt={4} className="text-center">
        <Typography variant="body2" className="text-white" style={{ fontFamily: 'Fira Code, monospace' }}>
          Developed by <Link href="https://RobertoGallardo.dev" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400" style={{ fontFamily: 'Fira Code, monospace' }}>Roberto Gallardo</Link> &copy; {currentYear}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
