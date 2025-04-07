const GalleryButton = ({ onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="group aspect-square w-9 rounded-full bg-white transition-[outline-offset] focus-visible:outline-offset-4"
    >
      <Icon className="mx-auto stroke-Neutral-VeryDarkBlue text-white group-hover:stroke-Primary-orange group-focus-visible:stroke-Primary-orange" />
    </button>
  );
};

export default GalleryButton;
