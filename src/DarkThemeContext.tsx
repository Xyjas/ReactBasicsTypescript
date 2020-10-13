import React from 'react'

interface DarkThemeContextType {
  darkTheme: boolean,
  setDarkTheme: (value: boolean) => void
};

const DarkThemeContext = React.createContext<DarkThemeContextType>({
  darkTheme: true,
  setDarkTheme: (darktheme) => {}
});

export default DarkThemeContext
