/* --- Global Dependencies --- */
import React from 'react';
import { ThemeProvider } from 'styled-components'
import 'theme/stylesheet/app.global.css'
import './App.css';

/* --- Local Dependencies --- */
import defaults from 'theme/defaults'
import { Header, Main, Footer } from 'layout'

/* --- Component --- */
function Application() {
  return (
    <ThemeProvider theme={defaults}>
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default Application;
