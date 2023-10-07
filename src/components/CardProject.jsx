const CardProject = () => {
  return (
    <div className="tooling  show">
      <div className="tooling-title">
        <h2>Mes Projets</h2>
      </div>
      <div className="card-container">
        <div className="project-card">
          <h2 className="project-title">Mes Projets</h2>
          <img
            className="img-project"
            src="./static/epicerie.png"
            alt="Image du projet"
          />
          <p className="project-description">To do list</p>
          <a
            className="project-button"
            href="lien-de-redirection"
            target="_blank"
          >
            En savoir plus
          </a>
        </div>
        <div className="project-card">
          <h2 className="project-title">Mes Projets</h2>
          <img
            className="img-project"
            src="./static/backRoads.png"
            alt="Image du projet"
          />
          <p className="project-description">BackRoads</p>
          <a
            className="project-button"
            href="https://back-roadbio.netlify.app/"
            target="_blank"
          >
            En savoir plus
          </a>
        </div>
        <div className="project-card">
          <h2 className="project-title">Mes Projets</h2>
          <img
            className="img-project"
            src="./static/screenRetro.png"
            alt="Image du projet"
          />
          <p className="project-description">Projet de fin d'années.</p>
          <a
            className="project-button"
            href="https://retro-catcher.netlify.app/"
            target="_blank"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};
export default CardProject;
