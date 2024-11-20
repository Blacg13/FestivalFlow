import React from 'react';
import style from './SelectEmplacementItem.module.css';
import useSWR from 'swr';
import { fetchEmplacements } from '../../Services/fetchEmplacements.js';

const SelectEmplacementItem = () => {
  const { data, isLoading, error } = useSWR('emplacements', fetchEmplacements);

  if (isLoading || !data) {
    return (
      <div className='isLoading'>
        <p>Chargement...</p>
      </div>
    );
  }

  const theEmplacementsOfDeath = Map.groupBy(data, (emp) => emp.localisation);

  return (
    <>
      <div className={style.selectEmplacementDiv}>
        <label htmlFor='emplacement'>Emplacement :</label>
        <select className={style.select} name='emplacement' id='emplacement'>
          {Array.from(theEmplacementsOfDeath.entries()).map(
            ([empKey, empVal]) => {
              return (
                <optgroup
                  className={style.optgroup}
                  key={empKey}
                  label={empKey}
                >
                  {empVal.map((emp) => {
                    return (
                      <option
                        className={style.option}
                        key={empKey + '-' + emp.name}
                        value={emp.name}
                      >
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
export default SelectEmplacementItem;
