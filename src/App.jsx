import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SharedLayout from './layout/SharedLayout.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Dashboard from './pages/Dashboard.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
