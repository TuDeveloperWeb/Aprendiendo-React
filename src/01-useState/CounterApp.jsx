import React, { useState } from 'react';

const CounterApp = () => {
    const [state, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30
        });

    const {counter1,counter2,counter3} = state;
    
    return (
        <>
            <h4>Counter1 :  {counter1}</h4>
            <h4>Counter2 :  {counter2}</h4>
            <h4>Counter3 :  {counter3}</h4>
            <hr/>

            <button onClick={() => setCounter({
                     ...state ,
                     counter1: counter1 + 1
                    }) 
                }
                > + 1 </button>

        </>
    );
};

export default CounterApp;