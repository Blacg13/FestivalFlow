import AccordionItem from '../../shared/AccordionItem/AccordionItem';
const ExhibitorInfos = ({ thisExhibitor = 'not found :-(' }) => {
  console.log('thisExhibitor', thisExhibitor);

  return (
    <>
      <h2>
        {thisExhibitor.businessName ??
          thisExhibitor.personRef[0].name.first +
            ' ' +
            thisExhibitor.personRef[0].name.last}
      </h2>
      <h3>identité exposant</h3>
      <h3>identité personnes 1</h3>
      <h3>identité personnes 2</h3>
      <h3>identité personnes 3 etc</h3>
      <h3>étapes</h3>
      <h3>contrat / application </h3>
      <p>SelectEmplacement</p>
      <p>FormItem</p>
      <AccordionItem />
    </>
  );
};
export default ExhibitorInfos;
