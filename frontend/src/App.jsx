import { Outlet, useLocation } from 'react-router-dom';
function App() {
  const location = useLocation();
  const pagecolor = () => {
    switch (location.pathname) {
      case '/':
        return 'connexionPage';
        break;
      case '/list':
        return 'listPage';
        break;
      case '/map':
        return 'mapPage';
        break;
      case '/committee':
        return 'committeePage';
        break;
      case '/archives':
        return 'archivesPage';
        break;
      default:
        return 'connexionPage';
        break;
    }
  };

  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
