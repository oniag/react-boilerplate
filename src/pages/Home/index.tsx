import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';
import IExample from '../../interfaces/example';
import './styles.scss';

const Home = () => {
  const [form, setForm] = useState<Partial<IExample>>({});
  const notify = () => toast.success('Wow so easy !');

  return (
    <>
      <input type="text" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <div>_</div>
      <InputMask onChange={(e) => setForm({ ...form, phone: e.target.value })} mask="(99) 99999-9999" />
      <div>_</div>
      {`Name: ${form.name}`}
      {`Celular: ${form.phone}`}
      <div>_</div>
      <button type="button" onClick={notify}>Notify !</button>
    </>
  );
};

export default Home;
