import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { Alert } from 'react-bootstrap';
import { useTypedDispatch } from '../store/rootStore';
import { hideToast } from '../store/toast/actionCreators';
import { toastDescriptionSelector } from '../store/toast/selectors';
import { useSelector } from 'react-redux';

const Toast = () => {
  const dispatch = useTypedDispatch();
  const toastDescription = useSelector(toastDescriptionSelector);
  const onClose = React.useCallback(() => {
    dispatch(hideToast());
  }, [dispatch]);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 999 }}>
      <Alert variant="danger" onClose={onClose} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>{toastDescription}</p>
      </Alert>
    </div>
  );
};

export default React.memo(Toast);
