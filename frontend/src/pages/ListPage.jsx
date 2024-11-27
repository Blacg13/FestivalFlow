import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
// import ExhibitorSearchBar from '../features/ExhibitorSearchBar/ExhibitorSearchBar';
import ExhibitorList from '../features/ExhibitorList/ExhibitorList';
const List = () => {
  return (
    <>
      <Header />
      <main className='listPage'>
        {/* <ExhibitorSearchBar /> */}
        <ExhibitorList format={'div'} />
      </main>
      <Footer />
    </>
  );
};
export default List;
