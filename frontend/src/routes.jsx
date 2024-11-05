import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import NotFoundPage from './Containers/NotFoundPage/NotFoundPage';
import ListPage from './Containers/ListPage/ListPage';
import MapPage from './Containers/MapPage/MapPage';
import CommitteePage from './Containers/CommitteePage/CommitteePage';
import ArchivesPage from './Containers/ArchivesPage/ArchivesPage';

const routes = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        index: true,
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
