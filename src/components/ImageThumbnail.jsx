const ImageThumbnail = ({ src, alt, onClick, onKeyDown, isSelected }) => {
  return (
    <div
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={0}
      className={`relative aspect-square w-20 cursor-pointer after:absolute ${
        isSelected ? 'border-2 border-Primary-orange after:bg-white/50' : ''
      } overflow-hidden rounded-xl transition-[outline-offset] after:inset-0 after:hover:bg-white/50 focus-visible:outline-offset-4 lg:w-28`}
    >
      <img src={src} alt={alt} className="rounded-lg" />
    </div>
  );
};

export default ImageThumbnail;
