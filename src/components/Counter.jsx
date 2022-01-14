import React, { useState } from 'react';

const Counter = () => {
    const [sum, setSum] = useState(0)

    function up() {
        setSum(sum + 1)

    }
    function nerf() {
        setSum(sum - 1)

    }
    return (
        <div>
            <button onClick={() => up()}>+</button>
            <button onClick={() => nerf()}>-</button>
            <p>Вы нажали {sum} раз</p>

        </div>
    );
};

export default Counter;