import { useParams } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import useSWR from 'swr';
import { useState } from 'react';
import { fetchExhibitors } from '../Services/fetchExhibitors';
const ExhibitorPage = () => {
  const { id } = useParams();
  const [exhibitor, setExhibitor] = useState(null);
  const {
    data: exhibitorsData,
    isLoading: exhibitorsIsLoading,
    error: exhibitorsError,
  } = useSWR(fetchExhibitors);
  const {
    data: individualsData,
    isLoading: individualsIsLoading,
    error: individualsError,
  } = useSWR(fetchIndividuals);
  const {
    data: applicationsData,
    isLoading: applicationsIsLoading,
    error: applicationsError,
  } = useSWR(fetchApplications);
  if (exhibitorsIsLoading) return <IsLoading />;
  if (exhibitorsError) return <Error />;
  return (
    <>
      <Header />
      <main className='listPage'>
        <h2>ExhibitorPage</h2>
        <p>{id}</p>
      </main>
      <Footer />
    </>
  );
};

export default ExhibitorPage;
