import React, { useEffect } from 'react';
import Pets from './Pets';
import { fetchPetsAction, deletePetAction } from '../../store/pets/actionCreators';
import { RootState, useTypedDispatch } from '../../store/rootStore';
import { createFlagSelector } from '../../store/flags/selectors';
import { useSelector } from 'react-redux';

const PetsContainer = () => {
  const dispatch = useTypedDispatch();
  const state = useSelector((_state: RootState) => _state);
  const isLoadingSelector = createFlagSelector('FETCH_PETS_LOADING');
  const isDeletingSelector = createFlagSelector('DELETE_PET_LOADING');

  const isErrorSelector = createFlagSelector('FETCH_PETS_ERROR');
  const isLoading = isLoadingSelector(state);
  const isError = isErrorSelector(state);
  const isDeleting = isDeletingSelector(state);

  useEffect(() => {
    dispatch(fetchPetsAction());
  }, []);

  const onDelete = React.useCallback(
    (id: number) => {
      dispatch(deletePetAction(id));
    },
    [dispatch],
  );
  return (
    <Pets
      isDeleting={isDeleting}
      isLoading={isLoading}
      isError={isError}
      pets={state.pets}
      tags={state.tags}
      categories={state.categories}
      onDelete={onDelete}
    />
  );
};

export default PetsContainer;
