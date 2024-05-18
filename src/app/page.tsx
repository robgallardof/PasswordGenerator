import PasswordGenerator from './components/PasswordGenerator';
import { Container, Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

const Home: React.FC = () => {
  return (
    <Container maxWidth="sm" className="mt-10 bg-black text-white min-h-screen flex flex-col items-center justify-center">
      {/* Page Title with Lock Icon */}
      <Typography variant="h3" component="h1" gutterBottom className="text-white flex items-center animate-fade-in" style={{ fontFamily: 'Fira Code, monospace' }}>
        <LockIcon className="mr-2" /> Password Generator
      </Typography>
      {/* Password Generator Component */}
      <PasswordGenerator />
    </Container>
  );
};

export default Home;
