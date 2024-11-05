import MiniForm from '../../Components/MiniForm/MiniForm';
import NavBar from '../../Components/NavBar/NavBar';
const Index = () => {
  return (
    <>
      <section className={'container'}>
        <MiniForm></MiniForm>
        <div>
          <p contentEditable>hello world !</p>
        </div>
      </section>
    </>
  );
};
export default Index;
