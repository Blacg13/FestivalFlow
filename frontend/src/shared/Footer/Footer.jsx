import style from './Footer.module.css';
const Footer = () => {
  return (
    <footer className={style.pfooter}>
      <p>
        Rédigé par <a href='https://github.com/Blacg13'>Bénédicte Lagasse</a>
      </p>
    </footer>
  );
};
export default Footer;
