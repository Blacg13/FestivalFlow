import IdentityItem from '../IdentityItem/IdentityItem';
import AccordionItem from '../../../shared/AccordionItem/AccordionItem';
const ExhibitorInfos = ({ thisExhibitor = 'not found :-(' }) => {
  console.log('thisExhibitor', thisExhibitor);

  return (
    <>
      <IdentityItem thisExhibitor={thisExhibitor} />
      <h3>identité exposant</h3>
      <h3>identité personnes 1</h3>
      <h3>identité personnes 2</h3>
      <h3>identité personnes 3 etc</h3>
      <h3>étapes</h3>
      <h3>contrat / application </h3>
      <p>SelectEmplacement</p>
      <p>FormItem</p>
      <AccordionItem
        thisExhibitor={thisExhibitor}
        title={'description'}
        content={thisExhibitor.description}
      />
      <AccordionItem
        thisExhibitor={thisExhibitor}
        title={'à retenir'}
        content={thisExhibitor.memo}
      />
      <AccordionItem
        thisExhibitor={thisExhibitor}
        title={'feedbacks des précédentes années'}
        content={thisExhibitor.feedbacks.map(
          (feedback) => feedback.edition + ' : ' + feedback.review
        )}
      />
      <AccordionItem />
    </>
  );
};
export default ExhibitorInfos;
