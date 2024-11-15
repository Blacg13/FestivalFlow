import { useEffect } from 'react';
import style from './ApplicationModule.module.css';

const ApplicationModule = () => {
  useEffect(() => {});
  return (
    <section className={style.applicationModuleBG}>
      <form>
        <label htmlFor='emplacement'>Emplacement :</label>
        <select name='emplacement' id='emplacement'>
          <optgroup label={'truc'}>
            <option value={'pouet'}>{'pouet'}</option>
          </optgroup>
        </select>
      </form>
    </section>
  );
};
export default ApplicationModule;
