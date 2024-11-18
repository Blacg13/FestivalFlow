import React from 'react';
import style from './ApplicationModule.module.css';
import useSWR from 'swr';
import { fetchEmplacements } from '../../Services/fetchEmplacements.js';

const ApplicationModule = () => {
  const { data, isLoading, error } = useSWR('emplacements', fetchEmplacements);
  // const test = await fetchEmplacements();
  console.log('test', data, isLoading);

  if (isLoading || !data) {
    return (
      <div className='spinner'>
        <p>Chargement...</p>
      </div>
    );
  }

  const theEmplacementsOfDeath = Map.groupBy(data, (emp) => emp.localisation);

  return (
    <>
      <div className={style.applicationModuleBG}>
        <label htmlFor='emplacement'>Emplacement :</label>
        <select className={style.select} name='emplacement' id='emplacement'>
          {Array.from(theEmplacementsOfDeath.entries()).map(
            ([empKey, empVal]) => {
              console.log('key', empKey);

              //it's dead T_T
              return (
                <optgroup key={empKey} label={empKey}>
                  {empVal.map((emp) => {
                    console.log('val', emp);
                    return (
                      <option key={empKey + '-' + emp.name} value={emp.name}>
                        {emp.name}
                      </option>
                    );
                  })}
                </optgroup>
              );
            }
          )}
        </select>
      </div>
    </>
  );
};
export default ApplicationModule;
