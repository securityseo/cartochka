import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react'
import Cart from './Cart'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Cart/>
  </ChakraProvider>
);

