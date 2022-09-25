import React from 'react';
import { SyncLoader } from 'react-spinners';

import '../App.scss';

const Loading = () => {
  return (
    <section className='loading app__flex'>
        <SyncLoader color="#b1b1d8" />
    </section>
  )
}

export default Loading;