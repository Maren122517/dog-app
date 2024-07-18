import React from 'react';
import ProductList from '../ProductList/ProductList';
import Cart from '../Cart/cart';
import { AppContainer, Title } from "./style"

const App = () => {
  return (
    <AppContainer>
      <Title>Tiendita App</Title>
      <ProductList />
      <Cart />
    </AppContainer>
  );
};

export default App;
