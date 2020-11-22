import React, { useState } from 'react';

// interface
import { IExample } from '../../interfaces/example';

// styles
import './styles.scss';

const Home = () => {
  const [state, setState] = useState<IExample>({id: 10, name: ''});

  return (
    <>
      Home
    </>
  )
}

export default Home;