import { Select, customStyles } from 'react-select';

const TestSelect = () => {
  const pouet = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <div className={style.selectEmplacementDiv}>
      <label htmlFor='test'>Test :</label>
      <Select
        value={pouet[0]}
        option={pouet}
        styles={customStyles}
        isSearchable={true}
        isMulti={true}
      />
    </div>
  );
};
