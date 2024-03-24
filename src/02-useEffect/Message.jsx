import React, { useEffect } from 'react';

export const Message = () => {

    useEffect(() => {
      console.log("Message Mounted");
   
      // Con este se hace limpieza al desmontar el componente  osea se ejecuta cuando para la eliminacion del componente
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
