import { useState } from 'react';
import Nav from './components/Nav';
import ProductPage from './components/ProductPage';
import CartContextProvider from './context/CartContext';

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuClick = () => setOpenMenu((prev) => !prev);

  return (
    <>
      <CartContextProvider>
        <Nav openMenu={openMenu} handleMenuClick={handleMenuClick} />
        <ProductPage />
      </CartContextProvider>
    </>
  );
}

export default App;
