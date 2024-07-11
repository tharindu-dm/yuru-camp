import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, ThemeContext } from './Contexts/ThemeContext';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

const App = () => {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ theme }) => {
          const muiTheme = createTheme({
            palette: {
              mode: theme,
            },
          });

          return (
            <MuiThemeProvider theme={muiTheme}>
              <StyledThemeProvider theme={muiTheme}>
                <CssBaseline />
                <Router>
                  <NavBar />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contact/:id" element={<Contact />} />
                  </Routes>
                </Router>
              </StyledThemeProvider>
            </MuiThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
};

export default App;