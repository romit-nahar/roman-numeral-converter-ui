import { Provider, darkTheme, defaultTheme } from '@adobe/react-spectrum';
import React, { useState } from 'react';
import RomanConverterComponent from './components/RomanConverterComponent';
import ThemeToggleComponent from './components/ThemeToggleComponent';
import styles from './styles/RomanConverter.module.css';

const App = () => {
  const [colorScheme, setColorScheme] = useState(
    localStorage.getItem('colorScheme') || 'light'
  );

  const toggleTheme = () => {
    const newColorScheme = colorScheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('colorScheme', newColorScheme);
    setColorScheme(newColorScheme);
  };

  return (
    <Provider 
      theme={colorScheme === 'light' ? defaultTheme : darkTheme}
      colorScheme={colorScheme}
    >
      <div className={styles.container}>
        <ThemeToggleComponent 
          colorScheme={colorScheme} 
          onToggle={toggleTheme} 
        />
        <RomanConverterComponent />
      </div>
    </Provider>
  );
};

export default App;