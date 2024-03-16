import React, { useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const Layout = () => {

    const {counter,incrementCounter} = useCounter(1);
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`

  const { data, isLoading, hasError } = useFetch(
    url
  );
  const { quote, author } = !!data && data[0];

    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({
        width: 0,
        height: 0
    })

    //Cuando se monta todo el dom se ejecuta esto 
    useLayoutEffect(() => {
        const { width,height } =  pRef.current.getBoundingClientRect();

        console.log(pRef.current.getBoundingClientRect());
        // setBoxSize(
        //     {
        //         width,
        //         height
        //     }
        // )

    }, [quote])

    // console.log({width,height});

  return (
    <>
      <h1>BreakingBad Quotes </h1>
      <hr />

      {
        isLoading ? (
            <div className="alert alert-info text-center">Loading...</div>
        ) : (
        <blockquote 
            className="blockquote text-end"
            style={{display:"flex"}}
            >
          <p className="mb-1"
             ref={pRef}
          >{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
          <button className="btn btn-primary" onClick={ 
            (event) => incrementCounter(1)
          }>Next quote</button>
    </>
  );
};
