import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { PetState } from '../../store/pets/stateType';
import 'bootstrap/dist/css/bootstrap.css';
import { TagState } from '../../store/tags/stateType';
import { CategoryState } from '../../store/categories/stateType';
import Loader from '../../components/Loader';
interface Props {
  pets: PetState[];
  isLoading: boolean;
  isError: boolean;
  tags: TagState;
  categories: CategoryState;
}
const Pets = ({ pets, isLoading, isError, categories, tags }: Props) => {
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Error</div>;
  }
  return (
    <Container>
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

                  <Button variant="primary">Edit</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default React.memo(Pets);
