import { ActionButton } from '@adobe/react-spectrum';
import Light from '@spectrum-icons/workflow/Light';
import Moon from '@spectrum-icons/workflow/Moon';
import React from 'react';

const ThemeToggle = ({ colorScheme, onToggle }) => {
  return (
    <ActionButton
      onPress={onToggle}
      aria-label="Toggle theme"
    >
      {colorScheme === 'light' ? <Moon /> : <Light />}
    </ActionButton>
  );
};

export default ThemeToggle;