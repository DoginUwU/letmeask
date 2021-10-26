import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs';
import { AuthProvider } from './contexts/AuthContext';
import { RoomProvider } from './contexts/RoomContext';
import { Router } from './routes/router';
import { ButtonChangeTheme } from './styles/app.styles';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/themes';

const App: React.FC = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Toaster />
        <AuthProvider>
          <RoomProvider>
            <Router />
            <ButtonChangeTheme onClick={handleThemeChange}>
              {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
            </ButtonChangeTheme>
          </RoomProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
