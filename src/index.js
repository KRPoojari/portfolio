import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@fontsource/gothic-a1/400.css"
import "@fontsource/gothic-a1/700.css"
import theme from "./theme"

ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

