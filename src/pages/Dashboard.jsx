import Formulaire from '../components/Formulaire';
import Stack from '../components/Stack';
import CardProject from '../components/CardProject';

const Dashboard = () => {
  return (
    <>
      {' '}
      <div className="home">
        {' '}
        <div className="home-content">
          <div className="home-intro">
            <div className="content">
              <div className="content-hi">
                <p>
                  <span className="hi">✌🏻</span>
                  Bonjour, Je suis Maxime
                </p>
              </div>
              <div className="content-primary">
                <h1>
                  <span>Developpeur Web</span> & <span>Web Mobile</span>
                </h1>
              </div>
              <div className="content-secondary">
                <p>
                  Je recherche un apprentissage de deux ans pour mon diplôme de{' '}
                  <span>Concepteur d’Applications</span> suivi à{' '}
                  <span>Foreach Academy</span>
                </p>
              </div>
            </div>
            <div className="hero-icon">
              <div className="hero"></div>
            </div>
          </div>
        </div>
        <Stack />
        <CardProject />
        <div className="tooling  show">
          <div className="tooling-title">
            <h2>Me contacter</h2>
          </div>
        </div>
        <div className=" formulaire">
          <Formulaire />
        </div>
        <div className="formulaire">
          {' '}
          <div className=" form-container">
            <div className="contact-info">
              <img src="./static/discord-logo-png-7628.png" alt="" />
              <p>Discord :_biotox</p>
            </div>
          </div>
          <div className=" form-container">
            <div className="contact-info">
              <img src="./static/linkedin-logo-png-1854.png" alt="" />
              <p>
                <a
                  href="https://www.linkedin.com/in/MaximeWebCraft"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
          <div className=" form-container">
            <div className="contact-info">
              <img src="./static/512x512-logo-27148.png" alt="logo github" />
              <p>
                <a
                  href="https://github.com/Maxime-Maker"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
          <div className=" form-container">
            <div className="contact-info">
              <img
                src="./static/logo-twitter-png-5863.png"
                alt="logo twitter"
              />
              <p>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  Twitter
                </a>
              </p>{' '}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;
