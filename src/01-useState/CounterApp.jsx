import React, { useState } from 'react';

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1 : 0,
        counter2 : 0,
        counter3 : 0
    });

    const {counter1,counter2,counter3} = counter;

    const incrementCounter1 = () => {
        setCounter({
            ...counter,
            counter1 : counter1 + 1
        })
    }
    const decrementCounter1 = () => {
        setCounter({
            ...counter,
            counter1 : counter1 - 1
        })
    }

    const incrementCounter2 = () => {
        setCounter({
            ...counter,
            counter2 : counter2 + 1
        })
    }
    const decrementCounter2 = () => {
        setCounter({
            ...counter,
            counter2 : counter2 - 1
        })
    }

    const incrementCounter3 = () => {
        setCounter({
            ...counter,
            counter3 : counter3 + 1
        })
    }
    const decrementCounter3 = () => {
        setCounter({
            ...counter,
            counter3 : counter3 - 1
        })
    }

    

    return (
        <div className='m-3 container'>
           
           <div className='row'>
                <div className='col col-4 border'>
                    <h2 className='text-center h4'>Counter 1</h2>  
                    <div className='d-flex justify-content-between '>
                        <h3>{ counter1 }</h3>
                        <div className=''>
                            <button className='btn btn-primary me-3' onClick={(event) => incrementCounter1()}>+1</button>
                            <button className='btn btn-danger' onClick={(event) =>decrementCounter1()}>-1</button>
                        </div>
                    </div>    
                </div>

                <div className='col col-4 border'>
                    <h2 className='text-center h4'>Counter 2</h2>  
                    <div className='d-flex justify-content-between '>
                        <h3>{ counter2 }</h3>
                        <div className=''>
                            <button className='btn btn-primary me-3' onClick={(event) => incrementCounter2()}>+1</button>
                            <button className='btn btn-danger' onClick={(event) =>decrementCounter2()}>-1</button>
                        </div>
                    </div>    
                </div>

                <div className='col col-4 border'>
                    <h2 className='text-center h4'>Counter 3</h2>  
                    <div className='d-flex justify-content-between '>
                        <h3>{ counter3 }</h3>
                        <div className=''>
                            <button className='btn btn-primary me-3' onClick={(event) => incrementCounter3()}>+1</button>
                            <button className='btn btn-danger' onClick={(event) =>decrementCounter3()}>-1</button>
                        </div>
                    </div>    
                </div>

            </div>
           
        </div>
    
    );
};
