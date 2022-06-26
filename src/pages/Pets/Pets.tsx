import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { PetState } from '../../store/pets/stateType';
import 'bootstrap/dist/css/bootstrap.css';
import { TagState } from '../../store/tags/stateType';
import { CategoryState } from '../../store/categories/stateType';
import Loader from '../../components/Loader';
import CustomModal from '../../components/CustomModal';
interface Props {
  pets: PetState[];
  isLoading: boolean;
  isError: boolean;
  tags: TagState;
  categories: CategoryState;
  onDelete: (id: number) => void;
  isDeleting: boolean;
}
const Pets = ({ pets, isLoading, isError, categories, tags, onDelete, isDeleting }: Props) => {
  const [show, setShow] = React.useState<boolean>(false);
  const [idToDelete, setIdToDelete] = React.useState<number | null>(null);

  const handleOnDelete = React.useCallback(
    (_id: number) => {
      setShow(true);
      setIdToDelete(_id);
    },
    [show, idToDelete],
  );
  const onClose = React.useCallback(() => {
    setShow(false);
  }, [show]);
  const onSave = React.useCallback(() => {
    if (!idToDelete) return;
    setShow(false);
    onDelete(idToDelete);
  }, [idToDelete, onDelete]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Container>
      <Button style={{ marginTop: 16 }} variant="primary">
        Add new pet
      </Button>

      <Row>
        {Object.keys(pets).map((id) => {
          // @ts-ignore
          const pet: PetState = pets[id];
          return (
            <Col key={id} xs="4">
              <Card key={id} style={{ width: '18rem', marginTop: '20px' }}>
                <Card.Img
                  alt={pet.name}
                  variant="top"
                  src={
                    pet.photoUrls[0] !== 'string' ? pet.photoUrls[0] : 'https://decizia.com/blog/wp-content/uploads/2017/06/default-placeholder.png'
                  }
                />
                <Card.Body>
                  <Card.Title>{pet.name ?? '--'}</Card.Title>
                  {/* @ts-ignore */}
                  {pet?.categoryId !== null && <Card.Text>Categories: {categories.byId[pet?.categoryId].name}</Card.Text>}
                  {!!pet?.tagsIds.length && (
                    <Card.Text>
                      Tags:
                      {pet?.tagsIds.map((tagId) => (
                        <p key={tagId}>{tags.byId[tagId].name}</p>
                      ))}
                    </Card.Text>
                  )}
                  <Container style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button variant="primary">Edit</Button>
                    <Button variant="danger" onClick={() => handleOnDelete(+id)}>
                      Delete
                    </Button>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <CustomModal
        isLoading={isDeleting}
        display={show}
        title={'delete pet'}
        description={'Are you sure?'}
        onClose={onClose}
        onSave={onSave}
        onSaveText={'Delete'}
      />
    </Container>
  );
};

export default React.memo(Pets);
