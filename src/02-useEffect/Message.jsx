import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
      console.log("Message Mounted");
    
      return () => {
        console.log("Message Unmounted");
      }
    }, [])
    

    return (
        <>
            <h2>Usuario ya existe</h2>   
        </>
    );
};
