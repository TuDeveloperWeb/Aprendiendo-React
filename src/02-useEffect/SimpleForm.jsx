/* useEffect : Son disparadores secundarios osea se ejecutan si cambia algun estado o se monta 
    useEffect es una forma de realizar acciones después de que se renderiza un componente
*/


import React, { useEffect, useState } from 'react';
import { Message } from './Message';



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username : 'TuDeveloperWeb',
        email : 'ruis_16@hotmail.com'
    })
    const {username,email} = formState ;
    
    const onInputChange = ({target})=>{
        const {name,value} = target;
        setFormState({
                ...formState,
                [name] : value
            }
        )
    }


    // Cuando se monta el componente  se utiliza [] y se ejecuta este codigo 
    useEffect(() => {
        console.log("useEffect called!");
    }, []);

    // Se llama cuando se monta el componente y a la vez cuando hay algun cambio en formState
    useEffect(() => {
        console.log("formState changed!");
    }, [formState]);

    // se llama cuando se monta el componente y cuando hay un cambio en la variable email
    useEffect(() => {
        console.log("email changed!");
    }, [email]);
    
    
    
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={ onInputChange }
             />  
             <input 
                type="email"
                className='form-control mt-2'
                placeholder='example@hotmail.com'
                name='email'
                value={email}
                onChange={ onInputChange }
             />  

            {
                ( username === 'Maria' ) && <Message/>
            }
            

        </>
    );
};