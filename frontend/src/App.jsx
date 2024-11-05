import { Outlet } from 'react-router-dom';
import ProgressBar from './Components/ProgressBar/ProgressBar';
import NavBar from './Components/NavBar/NavBar';
function App() {
  return (
    <>
      {/* <ProgressBar /> */}
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
