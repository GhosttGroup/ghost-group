import React from 'react';
import Select from '../../common/components/elements/Select';

const MainPage = () => {
  const options = [
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'DevOps', value: 'DevOps' },
  ];

  const handleSelectChange = (selectedValue: string) => {
    // Обработка изменения значения Select
    console.log(`Selected value: ${selectedValue}`);
  };

  return (
    <Select defaultText='Select a service' label='Services' options={options} onChange={handleSelectChange} />
  );
};

export default MainPage;
