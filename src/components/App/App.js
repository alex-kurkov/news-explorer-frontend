import React, { useState } from 'react';
import Loader from '../Loader/Loader';

import './App.css';

const App = () => {
  const [loaderVisible, setLoaderVisible] = useState(false);

  return (
    <div className="app">
      <button type="button" onClick={() => setLoaderVisible(!loaderVisible)}>
        loader
      </button>
      {loaderVisible && <Loader />}
    </div>
  );
};

export default App;
