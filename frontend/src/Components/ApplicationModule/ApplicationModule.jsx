import { useEffect, useRef, useState } from 'react';
import style from './ApplicationModule.module.css';
import axios from 'axios';

const ApplicationModule = () => {
  const theURL = 'http://localhost:5000/api/emplacements/'; //!
  const emplacementRef = useRef(localStorage.getItem('emplacements'));
  let theEmplacements = [null];
  let theLocations = [null];

  useEffect(() => {
    axios
      .get(theURL)
      .then(({ data }) => {
        localStorage.setItem('emplacements', JSON.stringify(data));
        emplacementRef.current = data;
        console.log('emplacementRef :', emplacementRef.current); //it's alive !

        //autre façon de faire qui marche pas :
        theEmplacements = [...emplacementRef.current];
        console.log('emplacements', theEmplacements);
        theLocations = [
          ...new Set(
            theEmplacements.map((emplacement) => emplacement.localisation)
          ),
        ];
        console.log('locations', theLocations);
        // fin de l'autre manière qui marche pas T_T
      })
      .catch((error) => {
        console.log('error', error);
      });
  }, [emplacementRef.current, theURL]);
  // console.log(emplacementRef.current[0].name);

  return (
    <>
      <div>yay</div>
      {emplacementRef.current.map((emplacement) => {
        //it's dead T_T
        return (
          <option key={emplacement._id} value={emplacement.name}>
            {emplacement.name}
          </option>
        );
      })}
    </>
  );
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
