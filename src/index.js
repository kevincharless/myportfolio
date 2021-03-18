import ReactDOM from 'react-dom';
import App from './App';

import { useState, useEffect } from 'react';
import * as themes from './assets/theme';
import { getFromLS, setToLS } from './utils/storage';

import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './assets/theme/GlobalStyles';

const Index = () => {
  const [theme, setTheme] = useState(getFromLS('theme'));
console.log(theme)
  const changeTheme = () => {
    theme.themeName === 'dark' ? setTheme(themes.theme.light) : setTheme(themes.theme.dark);
    setToLS('theme', theme.themeName === 'dark' ? themes.theme.light : themes.theme.dark);
  }

  useEffect(() => {
    setToLS('theme', theme);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App theme={theme} changeTheme={changeTheme} />
    </ThemeProvider>
  )
}

ReactDOM.render(
    <Index />,
  document.getElementById('root')
);


