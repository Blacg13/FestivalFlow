import { useLocation, useParams } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import slugify from '../shared/utils/slugify';
import useSWR from 'swr';
import { useState } from 'react';
import { fetchExhibitors } from '../Services/fetchExhibitors';
const ExhibitorPage = () => {
  const location = useLocation();
  const thisExhibitor = location.state;

  const {
    data: exhibitorsData,
    isLoading: exhibitorsIsLoading,
    error: exhibitorsError,
  } = useSWR('exhibitors', fetchExhibitors);

  const thisExhibitorData = exhibitorsData.find(
    (exhibitor) => exhibitor._id === thisExhibitor
  );

  console.log('thisExhibitorData', thisExhibitorData);
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
  else
    return (
      <>
        <Header />
        <main className='listPage'>
          <h2>{thisExhibitorData.businessName}</h2>
          <p>{thisExhibitor}</p>
        </main>
        <Footer />
      </>
    );
};

export default ExhibitorPage;
