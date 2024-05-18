"use client";

import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PasswordOptions from './PasswordOptions';
import PasswordStrengthBar from './PasswordStrengthBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState<number>(16);
  const [includeLowercase, setIncludeLowercase] = useState<boolean>(true);
  const [includeUppercase, setIncludeUppercase] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [excludeSimilarCharacters, setExcludeSimilarCharacters] = useState<boolean>(false);
  const [excludeAmbiguousCharacters, setExcludeAmbiguousCharacters] = useState<boolean>(false);
  const [includeHexadecimal, setIncludeHexadecimal] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [lengthError, setLengthError] = useState<string>('');
  const [passwordStrength, setPasswordStrength] = useState<string>('');

  /**
   * Generates a random password based on user settings.
   */
  const generatePassword = () => {
    if (length <= 0) {
      setLengthError('Length must be greater than 0');
      return;
    }

    let lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    let upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let numberChars = '0123456789';
    let symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
    const similarChars = /[ilLI|`oO0]/g;
    const ambiguousChars = /[{}[\]()/\\'";:,<>]/g;

    if (excludeSimilarCharacters) {
      lowerCaseChars = lowerCaseChars.replace(similarChars, '');
      upperCaseChars = upperCaseChars.replace(similarChars, '');
      numberChars = numberChars.replace(similarChars, '');
      symbolChars = symbolChars.replace(similarChars, '');
    }

    if (excludeAmbiguousCharacters) {
      symbolChars = symbolChars.replace(ambiguousChars, '');
    }

    let charSet = '';

    if (includeLowercase) charSet += lowerCaseChars;
    if (includeUppercase) charSet += upperCaseChars;
    if (includeNumbers) charSet += numberChars;
    if (includeSymbols) charSet += symbolChars;
    if (includeHexadecimal) charSet = '0123456789ABCDEF';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }

    setPassword(generatedPassword);
    setLengthError('');
    evaluatePasswordStrength(generatedPassword);
  };

  /**
   * Copies the generated password to the clipboard.
   */
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  /**
   * Evaluates the strength of the generated password.
   * @param password The generated password
   */
  const evaluatePasswordStrength = (password: string) => {
    let strengthPoints = 0;

    if (password.length >= 16) strengthPoints += 2;
    if (includeLowercase) strengthPoints += 1;
    if (includeUppercase) strengthPoints += 1;
    if (includeNumbers) strengthPoints += 1;
    if (includeSymbols) strengthPoints += 1;
    if (excludeSimilarCharacters) strengthPoints -= 1;
    if (excludeAmbiguousCharacters) strengthPoints -= 1;
    if (includeHexadecimal) strengthPoints += 1;

    let strength = '';
    if (strengthPoints >= 6) {
      strength = 'Very Strong';
    } else if (strengthPoints >= 4) {
      strength = 'Strong';
    } else if (strengthPoints >= 2) {
      strength = 'Medium';
    } else {
      strength = 'Weak';
    }

    setPasswordStrength(strength);
  };

  return (
    <Box className="bg-black p-6 rounded-lg shadow-lg">
      <TextField
        label="Length"
        type="number"
        value={length}
        onChange={(e) => setLength(parseInt(e.target.value, 10))}
        inputProps={{ min: 1 }}
        margin="normal"
        fullWidth
        className="my-4"
        error={!!lengthError}
        helperText={lengthError}
        InputLabelProps={{
          style: { color: '#ffffff', fontFamily: 'Fira Code, monospace' }
        }}
        InputProps={{
          style: { color: '#ffffff', fontFamily: 'Fira Code, monospace' }
        }}
      />
      <PasswordOptions
        includeLowercase={includeLowercase}
        includeUppercase={includeUppercase}
        includeNumbers={includeNumbers}
        includeSymbols={includeSymbols}
        excludeSimilarCharacters={excludeSimilarCharacters}
        excludeAmbiguousCharacters={excludeAmbiguousCharacters}
        includeHexadecimal={includeHexadecimal}
        onToggleLowercase={() => setIncludeLowercase(!includeLowercase)}
        onToggleUppercase={() => setIncludeUppercase(!includeUppercase)}
        onToggleNumbers={() => setIncludeNumbers(!includeNumbers)}
        onToggleSymbols={() => setIncludeSymbols(!includeSymbols)}
        onToggleSimilarCharacters={() => setExcludeSimilarCharacters(!excludeSimilarCharacters)}
        onToggleAmbiguousCharacters={() => setExcludeAmbiguousCharacters(!excludeAmbiguousCharacters)}
        onToggleHexadecimal={() => setIncludeHexadecimal(!includeHexadecimal)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={generatePassword}
        fullWidth
        className="mt-4 bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
        style={{ fontFamily: 'Fira Code, monospace', fontWeight: '600' }}
      >
        Generate Password
      </Button>
      {password && (
        <Box mt={4}>
          <Typography variant="h6" className="text-white animate-fade-in" style={{ fontFamily: 'Fira Code, monospace' }}>Generated Password:</Typography>
          <TextField
            value={password}
            InputProps={{
              readOnly: true,
              style: { color: '#ffffff', fontFamily: 'Fira Code, monospace' },
              endAdornment: (
                <CopyToClipboard text={password}>
                  <Button onClick={() => alert('Password copied to clipboard!')} className="text-white">
                    <ContentCopyIcon />
                  </Button>
                </CopyToClipboard>
              ),
            }}
            fullWidth
            className="text-white my-4"
            InputLabelProps={{
              style: { color: '#ffffff', fontFamily: 'Fira Code, monospace' }
            }}
          />
          <Typography variant="h6" className="text-white animate-fade-in" style={{ fontFamily: 'Fira Code, monospace' }}>Password Strength:</Typography>
          <PasswordStrengthBar strength={passwordStrength} />
        </Box>
      )}
    </Box>
  );
};

export default PasswordGenerator;