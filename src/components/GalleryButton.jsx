const GalleryButton = ({ onClick, Icon }) => {
  return (
    <button
      onClick={onClick}
      className="group aspect-square w-9 rounded-full bg-white"
    >
      <Icon className="mx-auto stroke-Neutral-VeryDarkBlue text-white group-hover:stroke-Primary-orange" />
    </button>
  );
};

export default GalleryButton;
