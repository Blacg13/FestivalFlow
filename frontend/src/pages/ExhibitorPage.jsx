import { useLocation } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import useSWR from 'swr';
import { fetchExhibitors } from '../Services/fetchExhibitors';
import ExhibitorInfos from '../features/ExhibitorFeature/ExhibitorInfos/ExhibitorInfos';
import IsLoading from '../shared/IsLoading/IsLoading';
import Error from '../shared/Error/Error';
import { useEffect } from 'react';
const ExhibitorPage = () => {
  const location = useLocation();
  const thisExhibitor = location.state;

  const {
    data: exhibitorsData,
    isLoading: exhibitorsIsLoading,
    error: exhibitorsError,
  } = useSWR('exhibitors', fetchExhibitors);

  // const [exhibitor, setExhibitor] = useState(null);
  // const {
  //   data: individualsData,
  //   isLoading: individualsIsLoading,
  //   error: individualsError,
  // } = useSWR(fetchIndividuals);
  // const {
  //   data: applicationsData,
  //   isLoading: applicationsIsLoading,
  //   error: applicationsError,
  // } = useSWR(fetchApplications);

  if (exhibitorsIsLoading) return <IsLoading />;
  else if (exhibitorsError) return <Error />;
  else {
    const thisExhibitorData = exhibitorsData.find(
      (exhibitor) => exhibitor._id === thisExhibitor
    );
    return (
      <>
        <Header />
        <main className='listPage'>
          <ExhibitorInfos thisExhibitor={thisExhibitorData} />
        </main>
        <Footer />
      </>
    );
  }
};

export default ExhibitorPage;
