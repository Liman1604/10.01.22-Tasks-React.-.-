import React from 'react';
import { useState } from 'react/cjs/react.development';
import Ingredients from './Ingredients';

const Receipts = (props) => {
    const [meal, setMeal] = useState('')
   console.log(meal);
    return (
        <div>
            <input onClick={(ev) => setMeal(ev.target.value)} type="radio" name='meal' value='pizza' />Pizza
            <input onClick={(ev) => setMeal(ev.target.value)} type="radio" name='meal' value='cake' />Cake
            <input onClick={(ev) => setMeal(ev.target.value)} type="radio" name='meal' value='stake' />Stake
            <Ingredients meal={meal}/>
        </div>
    );
};

export default Receipts;