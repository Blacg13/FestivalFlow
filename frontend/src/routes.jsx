import Index from './Containers/Index/Index';
import MapPage from './Containers/MapPage/MapPage';
import NotFoundPage from './Containers/NotFoundPage/NotFoundPage';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: '/map',
        element: <MapPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;
