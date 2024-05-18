import React from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';

interface PasswordStrengthBarProps {
  strength: string;
}

const PasswordStrengthBar: React.FC<PasswordStrengthBarProps> = ({ strength }) => {
  const getProgressColor = () => {
    if (strength === 'Weak') return 'red';
    if (strength === 'Medium') return 'orange';
    if (strength === 'Strong') return 'yellow';
    return 'green'; // Very Strong
  };

  const getProgressValue = () => {
    if (strength === 'Weak') return 25;
    if (strength === 'Medium') return 50;
    if (strength === 'Strong') return 75;
    return 100; // Very Strong
  };

  return (
    <Box mt={2} className="animate-fade-in">
      <LinearProgress
        variant="determinate"
        value={getProgressValue()}
        style={{ height: '10px', borderRadius: '5px', backgroundColor: '#ffffff' }}
        sx={{
          '& .MuiLinearProgress-bar': {
            backgroundColor: getProgressColor(),
            transition: 'all 0.5s ease-in-out'
          },
        }}
      />
      <Typography variant="body2" className="text-white animate-fade-in" style={{ fontFamily: 'Fira Code, monospace' }}>
        {strength}
      </Typography>
    </Box>
  );
};

export default PasswordStrengthBar;