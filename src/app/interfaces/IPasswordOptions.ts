export interface IPasswordOptionsProps {
  includeLowercase: boolean;
  includeUppercase: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  onToggleLowercase: () => void;
  onToggleUppercase: () => void;
  onToggleNumbers: () => void;
  onToggleSymbols: () => void;
}