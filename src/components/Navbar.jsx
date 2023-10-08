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
        <div>
          <ul>
            <li>
              <a href="#technologie">Technologie</a>
            </li>
            <li>
              <a href="#projets">Projets</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="CV">
          <CVDownloadButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
