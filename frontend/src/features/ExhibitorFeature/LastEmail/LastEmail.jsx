import style from './LastEmail.module.css';
import useSWR from 'swr';
const LastEmail = ({
  thisExhibitor,
  email = 'FFM2025: lkjfehzkjergfjlkds',
}) => {
  //todo : mettre en place l'api des emails... Plein de courage !!
  // const {
  //   data: exhibitorsData,
  //   isLoading: exhibitorsIsLoading,
  //   error: exhibitorsError,
  // } = useSWR('exhibitors', fetchExhibitors);
  return (
    <div className={style.lastEmail}>
      <img src='/icons-steps/icons_step_yes.svg' alt='prout' />
      <p>{thisExhibitor.email ?? 'FFM 2025: rappel contrat'}</p>
    </div>
  );
};
export default LastEmail;
