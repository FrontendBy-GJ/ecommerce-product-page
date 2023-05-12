import { useState } from 'react';
import CloseIcon from '../assets/icons/CloseIcon';
import NextIcon from '../assets/icons/NextIcon';
import PreviousIcon from '../assets/icons/PreviousIcon';
import { products } from '../data';
import GalleryButton from './GalleryButton';
import ImageThumbnail from './ImageThumbnail';

const Lightbox = ({
  closeLightbox,
  mainImages,
  clickedImage,
  setClickedImage,
}) => {
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-50 hidden bg-black/75 md:grid"
    >
      <div className="mx-auto my-auto max-w-lg">
        <button
          aria-label="Close lightbox"
          onClick={closeLightbox}
          className="mb-5 ml-auto block p-3 text-white hover:text-Primary-orange"
        >
          <CloseIcon />
        </button>

        <div className="relative h-[500px]">
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
              isSelected={mainImages[index] === clickedImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
