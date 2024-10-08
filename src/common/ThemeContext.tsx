import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const defaultThemeContext = {
  theme: 'light',
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultThemeContext);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }:{children:ReactNode}) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
