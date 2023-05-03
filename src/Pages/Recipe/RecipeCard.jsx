import React from 'react';
import { Card, Container } from 'react-bootstrap';

const RecipeCard = ({card}) => {
    console.log(card)
    const{recipe_name,cooking_method,ingredients}=card
    return (
         <Container>
             <Card  >
      <Card.Body>
        <Card.Title> {recipe_name}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        
         <p>{cooking_method}</p>
         <p> <span className='text-bold'>Ingredients:</span>
            {
                (card.ingredients).map(data=><li>{data}</li>)
            }
         </p>
      
        
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>



         </Container>
    );
};

export default RecipeCard;