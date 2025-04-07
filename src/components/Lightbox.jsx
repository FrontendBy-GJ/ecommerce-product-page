import { useEffect, useRef, useState } from 'react';
import CloseIcon from '../assets/icons/CloseIcon';
import NextIcon from '../assets/icons/NextIcon';
import PreviousIcon from '../assets/icons/PreviousIcon';
import { products } from '../data';
import GalleryButton from './GalleryButton';
import ImageThumbnail from './ImageThumbnail';

const Lightbox = ({
  mainImages,
  clickedImage,
  setClickedImage,
  isLightboxOpen,
  setIsLightboxOpen,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const lightboxRef = useRef();

  const lightboxPrevImg = () => {
    if (lightboxIndex !== 0) {
      setLightboxIndex(lightboxIndex - 1);
      setClickedImage(mainImages[lightboxIndex - 1]);
    } else if (lightboxIndex === 0) {
      setLightboxIndex(mainImages.length - 1);
      setClickedImage(mainImages[mainImages.length - 1]);
    }
  };

  const lightboxNextImg = () => {
    if (lightboxIndex !== mainImages.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
      setClickedImage(mainImages[lightboxIndex + 1]);
    } else if (lightboxIndex === mainImages.length - 1) {
      setLightboxIndex(0);
      setClickedImage(mainImages[0]);
    }
  };

  useEffect(() => {
    if (isLightboxOpen) {
      lightboxRef.current?.showModal();
    } else {
      lightboxRef.current?.close();
    }
  }, [isLightboxOpen]);

  return (
    <dialog
      ref={lightboxRef}
      onClose={() => setIsLightboxOpen(false)}
      className="h-[100dvh] max-w-full bg-transparent px-10 backdrop:bg-black/80"
    >
      <div className="mb-5 flex justify-end">
        <button
          aria-label="Close lightbox"
          title="Close"
          onClick={() => setIsLightboxOpen(false)}
          className="grid h-7 w-7 place-content-center text-white transition-[outline-offset] hover:text-Primary-orange focus-visible:outline-offset-1"
        >
          <CloseIcon className="h-full w-full" />
        </button>
      </div>

      <div className="relative h-3/4">
        <div className="absolute -inset-9 flex items-center justify-between px-4">
          <GalleryButton onClick={lightboxPrevImg} Icon={PreviousIcon} />
          <GalleryButton onClick={lightboxNextImg} Icon={NextIcon} />
        </div>

        <img
          src={clickedImage}
          alt=""
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className="mt-6 flex justify-center gap-8">
        {products[0].images.thumbnails.map((t, index) => (
          <ImageThumbnail
            key={index}
            src={t}
            alt={''}
            onClick={() => {
              setLightboxIndex(index);
              setClickedImage(mainImages[index]);
            }}
            onKeyDown={(e) => {
              if (e.code === 'Space' || e.code === 'Enter') {
                setLightboxIndex(index);
                setClickedImage(mainImages[index]);
              }
            }}
            isSelected={mainImages[index] === clickedImage}
          />
        ))}
      </div>
    </dialog>
  );
};

export default Lightbox;
