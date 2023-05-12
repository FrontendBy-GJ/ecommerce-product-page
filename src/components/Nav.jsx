import menuIcon from '../assets/icon-menu.svg';
import logo from '../assets/logo.svg';
import avatar from '../assets/image-avatar.png';
import MobileNav from './MobileMenu';
import CartIcon from '../assets/icons/CartIcon';
import useCartContext from '../hooks/useCartContext';
import DeleteIcon from '../assets/icons/DeleteIcon';
import { useState } from 'react';

const Nav = ({ openMenu, handleMenuClick }) => {
  const [openCart, setOpenCart] = useState(false);
  const { cart, setCart, formatPrice, emptyCart, setEmptyCart } =
    useCartContext();

  const handleCartBtn = () => setOpenCart((prev) => !prev);

  const handleRemoveFromCart = () => {
    setCart({
      product: '',
      qty: 0,
      price: null,
      total: null,
      image: null,
    });

    setEmptyCart(true);
  };

  return (
    <>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between border-b border-Neutral-GrayishBlue bg-white px-5 py-4 font-kumbhSans lg:h-24 lg:px-2 lg:py-0">
        <div className="flex flex-1 gap-4 md:gap-14">
          <button onClick={handleMenuClick} className="self-end lg:hidden">
            <img src={menuIcon} alt="hamburger menu" />
          </button>
          <img src={logo} alt="sneakers logo" />

          <nav className="hidden h-full space-x-8 text-Neutral-DarkGrayishBlue lg:block">
            {['Collections', 'Men', 'Women', 'About', 'Contact'].map((link) => (
              <a
                href="#"
                key={link}
                className="border-Primary-orange pb-[2.1rem] hover:border-b-4"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex gap-4 lg:gap-8">
          <button onClick={handleCartBtn} className="relative">
            {!emptyCart && (
              <span className="absolute -translate-x-1 -translate-y-2.5 rounded-xl bg-Primary-orange px-2 text-xs text-white">
                {cart.qty}
              </span>
            )}
            <CartIcon className="text-Neutral-DarkGrayishBlue hover:text-Neutral-VeryDarkBlue" />
          </button>
          <img
            src={avatar}
            alt="user profile"
            className="aspect-square w-7 cursor-pointer rounded-full ring-Primary-orange hover:ring-2 lg:w-12"
          />
        </div>

        {openCart && (
          <div className="absolute left-3 right-3 z-10 ml-auto h-64 max-w-sm translate-y-44 rounded-2xl bg-white shadow-2xl md:translate-y-36 lg:max-w-md lg:translate-y-40 xl:-right-10">
            <span className="block p-6 text-base font-bold text-Neutral-VeryDarkBlue">
              Cart
            </span>
            <hr />

            {!emptyCart ? (
              <>
                <div className="mx-auto mt-6 flex items-center gap-3 px-5 lg:gap-6">
                  <div className="h-14 w-14">
                    <img
                      src={cart.image}
                      alt={cart.product}
                      className="h-full w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="lg:text-lg">
                    <span className="text-Neutral-DarkGrayishBlue">
                      {cart.product}
                    </span>
                    <div className="mt-1 space-x-3">
                      <span className="text-Neutral-DarkGrayishBlue">
                        {formatPrice(cart.price)} &times; {cart.qty}
                      </span>
                      <span className="font-bold text-Neutral-VeryDarkBlue">
                        {formatPrice(cart.total)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleRemoveFromCart}
                    className="flex flex-1 cursor-pointer justify-center self-center text-Neutral-GrayishBlue"
                  >
                    <DeleteIcon />
                  </button>
                </div>
                <div className="mt-6 px-5">
                  <button className="w-full rounded-lg bg-Primary-orange py-3 font-bold text-Neutral-LightGrayishBlue transition-colors hover:bg-Primary-orange/70">
                    Checkout
                  </button>
                </div>
              </>
            ) : (
              <div className="absolute inset-y-1/2 w-full text-center font-bold text-Neutral-DarkGrayishBlue">
                Your cart is empty.
              </div>
            )}
          </div>
        )}
      </div>
      <MobileNav openMenu={openMenu} handleMenuClick={handleMenuClick} />
    </>
  );
};

export default Nav;
