import { useEffect, useRef } from 'react';

const Stack = () => {
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="tooling  ">
      <div className="tooling-title">
        <div id="technologie">
          {' '}
          <h2>Mes technologies</h2>
        </div>
      </div>{' '}
      <div id="maDiv" className="reveal invisible" ref={targetRef}>
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
