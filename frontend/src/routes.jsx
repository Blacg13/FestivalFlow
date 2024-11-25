import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import ListPage from './pages/ListPage';
import MapPage from './pages/MapPage';
import CommitteePage from './pages/CommitteePage';
import ArchivesPage from './pages/ArchivesPage';
import ConnexionPage from './pages/ConnexionPage';

//todo: debug routes */

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
        element: <ConnexionPage />,
        //todo: <ConnexionPage />
      },
      {
        path: '/list',
        element: <ListPage />,
      },
      {
        path: 'map',
        element: <MapPage />,
      },
      {
        path: 'committee',
        element: <CommitteePage />,
      },
      {
        path: 'archives',
        element: <ArchivesPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default routes;
