import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useCallback, useEffect } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

interface Props {
  title: string;
  description: string;
  onClose?: () => void;
  onSave: () => void;
  onSaveText?: string;
  onCloseText?: string;
  display?: boolean;
  isLoading?: boolean;
}
const CustomModal = ({ title, description, onClose, onSave, onCloseText, onSaveText, display, isLoading }: Props) => {
  const [show, setShow] = useState(!!display);
  useEffect(() => {
    setShow(!!display);
  }, [display]);
  const handleClose = useCallback(() => {
    if (isLoading) return;
    if (onClose) onClose();
    setShow(false);
  }, [onClose]);
  const _onSaveClick = useCallback(() => {
    if (isLoading) return;
    onSave();
  }, [onSave, isLoading]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{description}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={handleClose} variant="secondary">
          {onCloseText ?? 'Close'}
        </Button>
        {!isLoading ? (
          <Button onClick={_onSaveClick} variant="primary">
            {onSaveText ?? 'Save changes'}
          </Button>
        ) : (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default React.memo(CustomModal);
