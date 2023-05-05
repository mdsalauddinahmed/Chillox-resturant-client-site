import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
 
 
 
import 'react-toastify/dist/ReactToastify.css';

import '@smastrom/react-rating/style.css'
import { Button, Card, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
 
 
const RecipeCard = ({card}) => {
    console.log(card)
    const{recipe_name,cooking_method,ingredients,rating}=card
      
    const notify = () => {
        toast("wow!! its My favorite Recipe");
        setFavorite(true)
    };

    const [Favorite,setFavorite]=useState(false)

    return (
         <Container>
             <Card className='mt-4' >
      <Card.Body>
        <Card.Title> {recipe_name}</Card.Title>
        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
          <h6>Cooking Methods:</h6>
         <p>{cooking_method}</p>
         <h6>Ingredients:</h6>
         <p> 
            {
                (card.ingredients).map(data=><li>{data}</li>)
            }
         </p>
      
        
         <div className='d-flex justify-content-between align-items-center'>
       <div><Rating style={{ maxWidth: 250 }} readOnly value={rating} />Rating: <span>{rating}</span></div>
       <div>
       {/* <AwesomeButton type="primary">Primary</AwesomeButton> */}
        <Button onClick={notify} disabled={Favorite} variant="secondary">Favorite</Button>
        <ToastContainer></ToastContainer>
       </div>
         </div>
      </Card.Body>
    </Card>


                                                                                     
         </Container>
    );
};

export default RecipeCard;