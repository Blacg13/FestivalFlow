import { Outlet } from 'react-router-dom';
import Header from './Containers/Header/Header';
function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </>
  );
}

export default App;
