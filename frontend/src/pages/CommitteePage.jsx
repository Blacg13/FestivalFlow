import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';
import AccordionItem from '../shared/AccordionItem/AccordionItem';
const CommitteePage = () => {
  return (
    <>
      <Header />
      <main className='committeePage'>
        <h2>CommitteePage</h2>
        <AccordionItem
          title={'exemple'}
          content={[
            'lorem ipsum dolor',
            'sit amet consectetur adipisicing elit',
            'Tenetur cumque vero laudantium fugit, eos nesciunt quia harum debitis!',
            'Enim fuga tempore esse culpa ducimus odio beatae eligendi dolor repellat vel!',
          ]}
        />
        <AccordionItem
          title={'exemple'}
          content={[
            'lorem ipsum dolor',
            'sit amet consectetur adipisicing elit',
            'Tenetur cumque vero laudantium fugit, eos nesciunt quia harum debitis!',
            'Enim fuga tempore esse culpa ducimus odio beatae eligendi dolor repellat vel!',
          ]}
        />
      </main>
      <Footer />
    </>
  );
};
export default CommitteePage;
