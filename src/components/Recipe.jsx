import React from 'react';
import '../css/styles.css';

const Recipe = ({ title, ingredients, image }) => {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <img src={image} />
            <h1>Ingredients</h1>
            {
            ingredients.map((ingredient) => (
                <p> - {ingredient.text}</p>
            ))
            }
        </div>
    );
}

export default Recipe;