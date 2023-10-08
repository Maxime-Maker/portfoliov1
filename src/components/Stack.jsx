import { useEffect, useState } from 'react';

const Stack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const target = document.querySelector('#maDiv');

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);
  return (
    <div id="maDiv" className={isVisible ? 'show' : 'invisible'}>
      <div className="tooling  show">
        <div className="tooling-title">
          <h2>Mes technologiques</h2>
        </div>
        <div className="tooling-box">
          <div className="tooling-box">
            <div className="box-content">
              <div className="box-text">
                <p>HTML</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>Css</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>React</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>Node</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>Javascript</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>FIGMA</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>Sql</p>
              </div>
            </div>
            <div className="box-content">
              <div className="box-text">
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Stack;
