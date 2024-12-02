import IdentityItem from '../IdentityItem/IdentityItem';
import AccordionItem from '../../../shared/AccordionItem/AccordionItem';
import style from './ExhibitorInfos.module.css';
const ExhibitorInfos = ({ thisExhibitor = 'not found :-(' }) => {
  console.log('thisExhibitor', thisExhibitor);

  return (
    <div className={style.exhibitorInfos}>
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
        thisExhibitor={thisExhibitor._id}
        title={'description'}
        // request={'description'}
        content={thisExhibitor.description}
      />
      <AccordionItem
        thisExhibitor={thisExhibitor._id}
        title={'à retenir'}
        // request={'memo'}
        content={thisExhibitor.memo}
      />
      {/* <AccordionItem
        thisExhibitor={thisExhibitor._id}
        title={'feedbacks des précédentes années'}
        // request={'feedbacks'}
        content={thisExhibitor.feedbacks}
      /> */}
    </div>
  );
};
export default ExhibitorInfos;
