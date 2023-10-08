import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
const ErrorPage = () => {
  return (
    <div>
      <Link to={Dashboard}></Link>
    </div>
  );
};

export default ErrorPage;
