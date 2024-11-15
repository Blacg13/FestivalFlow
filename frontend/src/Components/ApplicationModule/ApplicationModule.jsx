import { useEffect, useRef, useState } from 'react';
import style from './ApplicationModule.module.css';
import axios from 'axios';
import emplacement from '../../../../backend/models/emplacement';

const ApplicationModule = () => {
  const theURL = new URL('http://localhost:5000/api/emplacements/'); //!
  const emplacementRef = useRef('pouet');
  let theEmplacements = [null];
  let theLocations = [null];

  useEffect(() => {
    axios
      .get(theURL)
      .then(({ data }) => {
        emplacementRef.current = data;

        theEmplacements = [...emplacementRef.current];
        console.log('emplacements', theEmplacements);
        theLocations = [
          ...new Set(
            theEmplacements.map((emplacement) => emplacement.localisation)
          ),
        ];
        console.log('locations', theLocations);
        theLocations.map((location) => {
          console.log(location);
          return (
            <optgroup label={location}>
              <option value='pouet'>pouet</option> //!
            </optgroup>
          );
        });
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [emplacementRef.current, theURL]);
};
export default ApplicationModule;

/**
  return (
    <section className={style.applicationModuleBG}>
      <form>
        <label htmlFor='emplacement'>Emplacement :</label>
        <select name='emplacement' id='emplacement'>
        </select>
      </form>
    </section>
  );


 * 
 * 
 *           {theLocations.map((location) => {
            return <optgroup label={location}>{location}</optgroup>;
          })}

 *           {locations.map((location) => {
            return <optgroup label={location}>location</optgroup>;
          })}
 */

/**
                 {emplacementNames.map((name) => {
            return <option value={name}>{name}</option>;
          })}

          {emplacementData.map((location, name) => {
                      return (
                        <optgroup label={location}>
                          { emplacementData.forEach(emplacement => {
                            if (emplacement.) {
                          });

                          }
                        </optgroup>
                      );
                    })}
 */
