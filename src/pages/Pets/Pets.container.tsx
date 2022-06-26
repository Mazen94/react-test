import React, { useEffect } from 'react';
import Pets from './Pets';
import { fetchPetsAction } from '../../store/pets/actionCreators';
import { RootState, useTypedDispatch } from '../../store/rootStore';
import { createFlagSelector } from '../../store/flags/selectors';
import { useSelector } from 'react-redux';

const PetsContainer = () => {
  const dispatch = useTypedDispatch();
  const state = useSelector((_state: RootState) => _state);
  const isLoadingSelector = createFlagSelector('FETCH_PETS_LOADING');
  const isErrorSelector = createFlagSelector('FETCH_PETS_ERROR');
  const isLoading = isLoadingSelector(state);
  const isError = isErrorSelector(state);

  useEffect(() => {
    dispatch(fetchPetsAction());
  }, []);
  return <Pets isLoading={isLoading} isError={isError} pets={state.pets} tags={state.tags} categories={state.categories} />;
};

export default PetsContainer;
