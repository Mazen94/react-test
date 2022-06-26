import React, { useEffect } from 'react';
import { fetchPetsAction } from '../../store/pets/actionCreators';
import { useTypedDispatch } from '../../store/rootStore';

const Pets = () => {
  const dispatch = useTypedDispatch();
  useEffect(() => {
    dispatch(fetchPetsAction());
  }, []);
  return <div>Pets</div>;
};
export default Pets;
