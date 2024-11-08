import { Outlet, useLocation } from 'react-router-dom';
import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
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
      {location.pathname !== '/' && <Header />}
      <main className={pagecolor()}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
