import { useLocation } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import useSWR from 'swr';
import {
  fetchExhibitors,
  fetchThisExhibitor,
} from '../Services/fetchExhibitors';
import ExhibitorInfos from '../features/ExhibitorFeature/ExhibitorInfos/ExhibitorInfos';
import IsLoading from '../shared/IsLoading/IsLoading';
import Error from '../shared/Error/Error';
import { useEffect } from 'react';
import AccordionItem from '/src/shared/AccordionItem/AccordionItem';
const ExhibitorPage = () => {
  const location = useLocation();
  const thisExhibitor = location.state;

  const {
    data: thisExhibitorData,
    isLoading,
    error,
  } = useSWR(`exhibitors/${thisExhibitor}`, fetchThisExhibitor);

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

  if (isLoading) return <IsLoading />;
  else if (error) return <Error />;
  else if (thisExhibitorData) {
    console.log('thisExhibitorData', thisExhibitorData);

    return (
      <>
        <Header />
        <main className='listPage'>
          <ExhibitorInfos thisExhibitor={thisExhibitorData} />
          {/* <AccordionItem
            thisExhibitor={thisExhibitorData._id}
            title={'exemple'}
            // request={'description'}
            content={thisExhibitorData.description}
          /> */}
        </main>
        <Footer />
      </>
    );
  }
};

export default ExhibitorPage;
