import CVDownloadButton from '../components/CVDownloadButton';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img
            src="./static/craiyon_133739_blue_letter_in_dark_blue_circle__black_background-removebg-preview.png"
            alt="logo"
            className="logo"
          />
        </div>
        <div className="CV">
          <CVDownloadButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
