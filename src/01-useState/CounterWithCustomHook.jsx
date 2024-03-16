import React from 'react';
import { useCounter } from '../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {counter,incrementCounter,resetCounter,decrementCounter} = useCounter();

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr></hr>
            <button className='btn btn-primary' onClick={() => incrementCounter(2)}>+1</button> 
            <button className='btn btn-primary' onClick={resetCounter}>Reset</button> 
            <button className='btn btn-primary' onClick={() =>decrementCounter(2)}>-1</button>   
        </>
    );
        
    }