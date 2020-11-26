import React, { useState } from 'react';
import InputMask from 'react-input-mask';

// interface
import { IExample } from '../../interfaces/example';

// styles
import './styles.scss';

const Home = () => {
  const [form, setForm] = useState<Partial<IExample>>({});

  return (
    <>
      <br/>
      <input type="text" onChange={e => setForm({...form, name: e.target.value })} /><br/>
      <InputMask onChange={e => setForm({...form, phone: e.target.value })} mask="(99) 99999-9999" />
      <div>Name: {form.name}</div>
      <div>Celular: {form.phone}</div>
      <br/>
    </>
  )
};

export default Home;
