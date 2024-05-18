import React from 'react';
import { FormControlLabel, Switch, Box } from '@mui/material';
import { IAdvancedPasswordOptionsProps } from '../interfaces/IAdvancedPasswordOptions';

const AdvancedPasswordOptions: React.FC<IAdvancedPasswordOptionsProps> = ({
  excludeSimilarCharacters,
  excludeAmbiguousCharacters,
  includeHexadecimal,
  onToggleSimilarCharacters,
  onToggleAmbiguousCharacters,
  onToggleHexadecimal
}) => {
  return (
    <Box mt={4}>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={excludeSimilarCharacters} onChange={onToggleSimilarCharacters} color="primary" />}
          label="Exclude Similar Characters (i, l, 1, L, o, 0, O)"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={excludeAmbiguousCharacters} onChange={onToggleAmbiguousCharacters} color="primary" />}
          label={"Exclude Ambiguous Characters ({}[]()/\\'\";:,<>)"}
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
      <Box mb={2} className="transition-transform duration-300 transform hover:scale-105">
        <FormControlLabel
          control={<Switch checked={includeHexadecimal} onChange={onToggleHexadecimal} color="primary" />}
          label="Include Hexadecimal Characters (0-9, A-F)"
          className="text-white animate-fade-in"
          style={{ fontFamily: 'Fira Code, monospace' }}
        />
      </Box>
    </Box>
  );
};

export default AdvancedPasswordOptions;