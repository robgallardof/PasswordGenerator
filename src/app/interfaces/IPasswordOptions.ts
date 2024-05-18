export interface IPasswordOptionsProps {
    includeLowercase: boolean;
    includeUppercase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
    excludeSimilarCharacters: boolean;
    excludeAmbiguousCharacters: boolean;
    includeHexadecimal: boolean;
    onToggleLowercase: () => void;
    onToggleUppercase: () => void;
    onToggleNumbers: () => void;
    onToggleSymbols: () => void;
    onToggleSimilarCharacters: () => void;
    onToggleAmbiguousCharacters: () => void;
    onToggleHexadecimal: () => void;
  }
  