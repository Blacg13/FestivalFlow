import ApplicationModule from '../../Components/ApplicationModule/ApplicationModule';
import AccordionItem from '../../Components/AccordionItem/AccordionItem';
const List = () => {
  return (
    <>
      <>
        <div>
          <label htmlFor='emplacement'>Emplacement :</label>
          <select name='emplacement' id='emplacement'>
            <ApplicationModule />
          </select>
        </div>
      </>
    </>
  );
};
export default List;
