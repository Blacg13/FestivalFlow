// import { style } from "./Error.module.css";
function Error({ message = 'Une erreur est survenue.', onRetry }) {
  return (
    <div>
      <p>{message}</p>
      {onRetry && <button onClick={onRetry}>Réessayer</button>}
    </div>
  );
}

export default Error;
