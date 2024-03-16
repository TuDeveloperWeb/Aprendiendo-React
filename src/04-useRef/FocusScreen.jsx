import React, { useRef } from 'react'

export const FocusScreen = () => {

    const refInput = useRef();

    const onClickFocus = () => {
        refInput.current.select();
    }

  return (
    <>
        <h2>Focus Screen</h2>
        <hr />
        <input 
            type="text"
            placeholder='Ingrese su nombre'
            className='form-control'
            ref={refInput}
        />
        <button 
            className='btn btn-primary mt-2'
            onClick={onClickFocus}>Focus</button>

    </>
  )
}
