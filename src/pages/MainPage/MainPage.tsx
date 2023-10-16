import React from 'react';
import { Input } from '../../common/components/elements';
import { Button } from '../../common/components/elements';

const MainPage = () => {
  return (
    <p>
      <Input />
        <Button text="Contact Us" onClick={() => { /* Обработчик клика */ }} />
    </p>

  )
}





export default MainPage;
