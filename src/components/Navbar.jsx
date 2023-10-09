import CVDownloadButton from '../components/CVDownloadButton';
const Navbar = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src="./static/Photo.jpg" alt="logo" className="logo" />
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
