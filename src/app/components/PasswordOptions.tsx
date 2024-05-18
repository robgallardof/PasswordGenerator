import React from 'react';
import { FormControlLabel, Switch, Box } from '@mui/material';
import { IPasswordOptionsProps } from '../interfaces/IPasswordOptions';

const PasswordOptions: React.FC<IPasswordOptionsProps> = ({
  includeLowercase,
  includeUppercase,
  includeNumbers,
  includeSymbols,
  excludeSimilarCharacters,
  excludeAmbiguousCharacters,
  includeHexadecimal,
  onToggleLowercase,
  onToggleUppercase,
  onToggleNumbers,
  onToggleSymbols,
  onToggleSimilarCharacters,
  onToggleAmbiguousCharacters,
  onToggleHexadecimal
}) => {
  return (
    <Box>
      <React.Fragment>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={includeLowercase} onChange={onToggleLowercase} color="primary" />}
            label="Include Lowercase Letters (a-z)"
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={includeUppercase} onChange={onToggleUppercase} color="primary" />}
            label="Include Uppercase Letters (A-Z)"
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={includeNumbers} onChange={onToggleNumbers} color="primary" />}
            label="Include Numbers (0-9)"
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={includeSymbols} onChange={onToggleSymbols} color="primary" />}
            label="Include Symbols (!@#$%^&*)"
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={excludeSimilarCharacters} onChange={onToggleSimilarCharacters} color="primary" />}
            label="Exclude Similar Characters (i, l, 1, L, o, 0, O)"
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={excludeAmbiguousCharacters} onChange={onToggleAmbiguousCharacters} color="primary" />}
            label={"Exclude Ambiguous Characters ({}[]()/\\'\";:,<>)"}
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
        <Box mb={2}>
          <FormControlLabel
            control={<Switch checked={includeHexadecimal} onChange={onToggleHexadecimal} color="primary" />}
            label="Include Hexadecimal Characters (0-9, A-F)"
            className="text-white animate-fade-in"
            style={{ fontFamily: 'Fira Code, monospace' }}
          />
        </Box>
      </React.Fragment>
    </Box>
  );
};

export default PasswordOptions;