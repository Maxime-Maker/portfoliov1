import React from 'react';

class CVDownloadButton extends React.Component {
  handleDownloadClick = () => {
    // Remplacez "votre-cv.pdf" par le chemin vers votre CV au format PDF
    const cvUrl = './static/curriculum vitae.pdf';

    // Créez un élément d'ancre (lien) invisible pour le téléchargement
    const downloadLink = document.createElement('a');
    downloadLink.href = cvUrl;
    downloadLink.target = '_blank'; // Ouvrir dans un nouvel onglet
    downloadLink.download = 'CV-Mr.Marie.pdf'; // Nom du fichier téléchargé

    // Simule un clic sur le lien pour déclencher le téléchargement
    downloadLink.click();
  };

  render() {
    return (
      <button className="btn-cv" onClick={this.handleDownloadClick}></button>
    );
  }
}

export default CVDownloadButton;
