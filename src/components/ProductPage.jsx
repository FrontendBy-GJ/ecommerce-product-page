import CartIcon from '../assets/icons/CartIcon';
import PreviousIcon from '../assets/icons/PreviousIcon';
import NextIcon from '../assets/icons/NextIcon';
import MinusIcon from '../assets/icons/MinusIcon';
import PlusIcon from '../assets/icons/PlusIcon';
import useCartContext from '../hooks/useCartContext';
import { useEffect, useState } from 'react';
import { products } from '../data';
import Lightbox from './Lightbox';
import ImageThumbnail from './ImageThumbnail';
import GalleryButton from './GalleryButton';

const ProductPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [clickedImage, setClickedImage] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const { cart, setCart, formatPrice, setEmptyCart } = useCartContext();

  const mainImages = products[0].images.main;

  const handlePrevImg = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(mainImages.length - 1);
    }
  };

  const handleNextImg = () => {
    if (slideIndex !== mainImages.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === mainImages.length - 1) {
      setSlideIndex(0);
    }
  };

  const handleMinusBtn = () => {
    if (cart.qty <= 0) {
      return;
    } else {
      setCart({ ...cart, qty: cart.qty - 1 });
    }
  };

  const handlePlusBtn = () => {
    setCart({ ...cart, qty: cart.qty + 1 });
  };

  const handleAddToCart = (productName, productPrice, productImage) => {
    setCart({
      ...cart,
      product: productName,
      qty: cart.qty,
      price: productPrice,
      total: cart.qty * productPrice,
      image: productImage,
    });

    setEmptyCart(false);
  };

  const handleImgClick = () => {
    setClickedImage(mainImages[currentImage]);
    setIsLightboxOpen(true);
  };

  useEffect(() => {
    setCart({
      ...cart,
      total: cart.qty * products[0].price,
    });
  }, [cart.qty]);

  return (
    <main>
      <div className="bg-white md:mx-auto md:flex md:max-w-7xl md:gap-10 md:px-4 md:py-16 lg:px-10">
        <div className="relative md:flex-1 md:self-center lg:max-w-lg">
          <div className="absolute inset-0 flex items-center justify-between px-4 md:hidden">
            <GalleryButton onClick={handlePrevImg} Icon={PreviousIcon} />
            <GalleryButton onClick={handleNextImg} Icon={NextIcon} />
          </div>
          <div className="hidden md:block md:cursor-pointer">
            <img
              tabIndex={0}
              onClick={handleImgClick}
              onKeyDown={(e) => {
                if (e.code === 'Space' || e.code === 'Enter') {
                  setClickedImage(mainImages[currentImage]);
                  setIsLightboxOpen(true);
                }
              }}
              src={mainImages[currentImage]}
              alt=""
              className="h-full w-full rounded-xl object-cover transition-[outline-offset] focus-visible:outline-offset-4"
            />
            <div className="mt-6 flex justify-center gap-8">
              {products[0].images.thumbnails.map((t, index) => (
                <ImageThumbnail
                  key={index}
                  src={t}
                  alt={''}
                  onClick={() => setCurrentImage(index)}
                  isSelected={index === currentImage}
                  onKeyDown={(e) => {
                    if (e.code === 'Space' || e.code === 'Enter') {
                      setCurrentImage(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
          <div className="h-[300px] md:hidden">
            {products[0].images.main.map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className={`${index !== slideIndex ? 'hidden' : ''} ${
                  index !== 0 ? 'object-top' : ''
                } h-full w-full object-cover`}
              />
            ))}
          </div>
        </div>

        <div className="px-5 font-kumbhSans md:flex-1 md:self-center lg:max-w-xl xl:px-12">
          <h3 className="mt-5 text-xs font-bold tracking-wider text-Primary-orange lg:text-base">
            SNEAKER COMPANY
          </h3>
          {products.map((p) => (
            <div key={p.id}>
              <h2 className="my-3 text-3xl font-bold text-Neutral-VeryDarkBlue lg:max-w-md xl:text-5xl">
                {p.product}
              </h2>
              <p className="tracking-tight text-Neutral-DarkGrayishBlue md:my-5 lg:text-lg">
                {p.info}
              </p>
              <div className="mt-5 flex items-center justify-between md:flex-col md:items-start">
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold tracking-wide lg:text-3xl">
                    {formatPrice(p.price)}
                  </span>
                  <span className="rounded bg-Primary-paleOrange px-1.5 font-bold text-Primary-orange">
                    50%
                  </span>
                </div>
                <s className="text-sm font-bold text-Neutral-GrayishBlue md:mt-2 lg:text-base">
                  {formatPrice(p.originalPrice)}
                </s>
              </div>

              <div className="md:mt-5 md:items-start lg:gap-5 xl:mt-16 xl:flex">
                <div className="mt-5 flex justify-between rounded-lg bg-Neutral-LightGrayishBlue px-5 py-4 md:mt-0 xl:w-64">
                  <button
                    onClick={handleMinusBtn}
                    className="text-Primary-orange transition-[outline-offset] hover:text-Primary-orange/70 focus-visible:outline-offset-4"
                  >
                    <MinusIcon />
                  </button>
                  <span className="font-bold">{cart.qty}</span>
                  <button
                    onClick={handlePlusBtn}
                    className="text-Primary-orange transition-[outline-offset] hover:text-Primary-orange/70 focus-visible:outline-offset-4"
                  >
                    <PlusIcon />
                  </button>
                </div>
                <button
                  onClick={() =>
                    handleAddToCart(p.product, p.price, p.images.main[0])
                  }
                  disabled={cart.qty === 0}
                  tabIndex={0}
                  className="mb-16 mt-3 flex w-full cursor-pointer justify-center gap-4 rounded-lg bg-Primary-orange py-4 text-Neutral-LightGrayishBlue shadow-2xl shadow-Primary-orange/50 transition-[colors,outline-offset] hover:bg-Primary-orange/70 focus-visible:bg-Primary-orange/70 focus-visible:outline-offset-4 disabled:cursor-not-allowed disabled:hover:bg-Primary-orange md:mt-5 xl:mt-0"
                >
                  <CartIcon />
                  <span className="text-sm font-bold">Add to cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {clickedImage && (
        <Lightbox
          mainImages={mainImages}
          clickedImage={clickedImage}
          setClickedImage={setClickedImage}
          isLightboxOpen={isLightboxOpen}
          setIsLightboxOpen={setIsLightboxOpen}
        />
      )}
    </main>
  );
};

export default ProductPage;
