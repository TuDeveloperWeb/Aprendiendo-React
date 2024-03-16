import './style.css'
import React, { useState } from 'react';

export const Ejercicio = () => {
   
    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2 : 20,
        counter3 : 30

    });

    const { counter1,counter2,counter3 } = counter;

    const increment1 = ()=>{
        setCounter({
            ...counter,
            counter1 : counter1 +1
        });
    }
   
    const decrement1 = ()=>{
        setCounter({
            ...counter,
            counter1 : counter1 - 1
        });
    }


    const increment2 = ()=>{
        setCounter({
            ...counter,
            counter2 : counter2 +1
        });
    }

    const decrement2 = ()=>{
        setCounter({
            ...counter,
            counter2 : counter2 - 1
        });
    }

    const increment3 = ()=>{
        setCounter({
            ...counter,
            counter3 : counter3 +1
        });
    }

    return (
        <div className='container'>
            <h1 className='title-counter'>Counter</h1>

            <div className='container-counter'>
                <div className='counter'>
                    <h3 className='counter-value'>{counter1}</h3>
                    <div className='btn-action'>
                        <button className='btn btn-primary' onClick={(event)=>increment1()}> + </button>
                        <button className='btn btn-danger' onClick={(event)=>decrement1()}> - </button>
                    </div>
                </div>
                <div className='counter'>
                    <h3 className='counter-value'>{counter2}</h3>
                    <div className='btn-action'>
                        <button className='btn btn-primary' onClick={(event)=>increment2()}> + </button>
                        <button className='btn btn-danger' onClick={(event)=>decrement2()}> - </button>
                    </div>
                </div>
                <div className='counter'>
                    <h3 className='counter-value'>{counter3}</h3>
                    <div className='btn-action'>
                        <button className='btn btn-primary' onClick={(event)=>increment3()}> + </button>
                        <button className='btn btn-danger'> - </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
