import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Recipe = () => {
    const recipe =useLoaderData();
    const [food,setFood]=useState([])
    // console.log(recipe)
    const {name,experience,likes, recipes, recipesItem,bio,specialty,picture}=recipe
    // setFood(recipesItem)
    useEffect(()=>{
     fetch(recipes)
     .then(res=>res.json())
     .then(data=>console.log(data))


    },[])
    return (
         <Container>
            <Row className='mt-5 p-5 text-start'>
                <Col lg={6}>
                    <h1>{name}</h1>
                    <p>{bio}</p>
                    <h2>Specialty: {specialty}</h2>
                    <div className='d-flex justify-content-between'>
                        <p>Number of Recipes :{recipes}</p>
                        <p>Likes: {likes}</p>
                    </div>
                    <h2>Experience: {experience}</h2>
                </Col>
                <Col lg={6} className=''>
                    <img className='rounded m-5' src={picture} alt="" />
                </Col>
            </Row>
            <hr />
            <Row>
                <div className='my-5'>
                {
                    (recipe.recipesItem).map(card=> <RecipeCard card={card}></RecipeCard> )
                 }
                
                </div>
            </Row>
         </Container>
    );
};

export default Recipe;