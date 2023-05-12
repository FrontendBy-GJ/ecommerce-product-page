const ImageThumbnail = ({ src, alt, onClick, isSelected }) => {
  return (
    <div
      onClick={onClick}
      className={`relative aspect-square w-20 cursor-pointer after:absolute ${
        isSelected ? 'border-2 border-Primary-orange after:bg-white/50' : ''
      } overflow-hidden rounded-xl after:inset-0 after:hover:bg-white/50 lg:w-28`}
    >
      <img src={src} alt={alt} className="rounded-lg" />
    </div>
  );
};

export default ImageThumbnail;
