import React from 'react';

const Ingredients = ({meal}) => {
    const meals = {
        pizza: 'testo',
        cake: 'shugar',
        stake: 'meatso',
    };
    return (
        <div>
            <h1>Ingredients:</h1>
            <h2>{meals[meal]}</h2>
        </div>
    );
};

export default Ingredients;;