import React from 'react';
import { FormControlLabel, Switch, Box } from '@mui/material';
import { IPasswordOptionsProps } from '../interfaces/IPasswordOptions';

const PasswordOptions: React.FC<IPasswordOptionsProps> = ({
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  onToggleLowercase,
  onToggleUppercase,
  onToggleNumbers,
  onToggleSymbols
}) => {
  return (
    <Box>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={includeLowercase} onChange={onToggleLowercase} color="primary" />}
          label="Include Lowercase Letters (a-z)"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={includeUppercase} onChange={onToggleUppercase} color="primary" />}
          label="Include Uppercase Letters (A-Z)"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={includeNumbers} onChange={onToggleNumbers} color="primary" />}
          label="Include Numbers (0-9)"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={includeSymbols} onChange={onToggleSymbols} color="primary" />}
          label="Include Symbols (!@#$%^&*)"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
    </Box>
  );
};

export default PasswordOptions;