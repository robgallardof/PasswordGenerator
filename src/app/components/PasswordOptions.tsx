import React from 'react';
import { FormControlLabel, Switch, Box } from '@mui/material';

interface PasswordOptionsProps {
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilarCharacters: boolean;
  excludeAmbiguousCharacters: boolean;
  onToggleUppercase: () => void;
  onToggleNumbers: () => void;
  onToggleSymbols: () => void;
  onToggleSimilarCharacters: () => void;
  onToggleAmbiguousCharacters: () => void;
}

const PasswordOptions: React.FC<PasswordOptionsProps> = ({
  includeUppercase,
  includeNumbers,
  includeSymbols,
  excludeSimilarCharacters,
  excludeAmbiguousCharacters,
  onToggleUppercase,
  onToggleNumbers,
  onToggleSymbols,
  onToggleSimilarCharacters,
  onToggleAmbiguousCharacters
}) => {
  return (
    <Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={includeUppercase}
              onChange={onToggleUppercase}
              color="primary"
              className="MuiSwitch-switchBase Mui-checked:bg-green-500 transition-transform duration-300 transform hover:scale-105"
            />
          }
          label="Include Uppercase Letters"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }} // Apply Fira Code font
        />
      </Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={includeNumbers}
              onChange={onToggleNumbers}
              color="primary"
              className="MuiSwitch-switchBase Mui-checked:bg-green-500 transition-transform duration-300 transform hover:scale-105"
            />
          }
          label="Include Numbers"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }} // Apply Fira Code font
        />
      </Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={includeSymbols}
              onChange={onToggleSymbols}
              color="primary"
              className="MuiSwitch-switchBase Mui-checked:bg-green-500 transition-transform duration-300 transform hover:scale-105"
            />
          }
          label="Include Symbols"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }} // Apply Fira Code font
        />
      </Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={excludeSimilarCharacters}
              onChange={onToggleSimilarCharacters}
              color="primary"
              className="MuiSwitch-switchBase Mui-checked:bg-green-500 transition-transform duration-300 transform hover:scale-105"
            />
          }
          label="Exclude Similar Characters"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }} // Apply Fira Code font
        />
      </Box>
      <Box mb={2}>
        <FormControlLabel
          control={
            <Switch
              checked={excludeAmbiguousCharacters}
              onChange={onToggleAmbiguousCharacters}
              color="primary"
              className="MuiSwitch-switchBase Mui-checked:bg-green-500 transition-transform duration-300 transform hover:scale-105"
            />
          }
          label="Exclude Ambiguous Characters"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }} // Apply Fira Code font
        />
      </Box>
    </Box>
  );
};

export default PasswordOptions;