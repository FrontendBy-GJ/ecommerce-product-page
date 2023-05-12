import closeIcon from '../assets/icon-close.svg';

const MobileNav = ({ openMenu, handleMenuClick }) => {
  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-10 bg-black/70 lg:hidden ${
          openMenu ? 'block' : 'hidden'
        }`}
      ></div>
      <div
        className={`absolute top-0 z-50 min-h-screen w-2/3 bg-white p-5 md:w-1/3 lg:hidden ${
          openMenu ? 'block' : 'hidden'
        }`}
      >
        <button onClick={handleMenuClick} aria-label="Close menu">
          <img src={closeIcon} alt="Close menu icon" />
        </button>
        <ul className="mt-6 space-y-3 font-kumbhSans font-bold text-Neutral-VeryDarkBlue">
          {['Collections', 'Men', 'Women', 'About', 'Contact'].map((link) => (
            <li key={link} className="cursor-pointer">
              <a href="#" onClick={handleMenuClick}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
