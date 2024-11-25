import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import ExhibitorList from '../features/ExhibitorList/ExhibitorList';
const List = () => {
  return (
    <>
      <Header />
      <main className='listPage'>
        <ExhibitorList format={'div'} />
      </main>
      <Footer />
    </>
  );
};
export default List;
