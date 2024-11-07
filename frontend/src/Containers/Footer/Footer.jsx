import style from './Footer.module.css';
const Footer = () => {
  return (
    <div className={style.pfooter}>
      <p>
        Rédigé par <a href='https://github.com/Blacg13'>Bénédicte Lagasse</a>
      </p>
    </div>
  );
};
export default Footer;
