import React from 'react';
import { useSelector } from 'react-redux';

import './App.css';
import Toast from './components/Toast';
import Pets from './pages/Pets/Pets.container';
import { toastValueSelector } from './store/toast/selectors';
function App() {
  // get toastValue from store
  const toastValue = useSelector(toastValueSelector);
  return (
    <>
      <Pets />
      {toastValue && <Toast />}
    </>
  );
}

export default App;
