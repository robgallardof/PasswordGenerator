export interface IAdvancedPasswordOptionsProps {
    excludeSimilarCharacters: boolean;
    excludeAmbiguousCharacters: boolean;
    includeHexadecimal: boolean;
    onToggleSimilarCharacters: () => void;
    onToggleAmbiguousCharacters: () => void;
    onToggleHexadecimal: () => void;
  }  