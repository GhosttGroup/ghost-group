import React, { ChangeEvent, useState } from 'react';
import Select from '../../common/components/elements/Select';

const MainPage = () => {
  const options = [
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'DevOps', value: 'DevOps' },
  ];
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(e.target.value);
  };

  return <Select label='Services' options={options} onChange={handleSelectChange} value={selectedValue} />;
};

export default MainPage;
