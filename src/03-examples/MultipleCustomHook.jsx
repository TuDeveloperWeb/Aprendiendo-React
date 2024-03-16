import React from "react";
import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHook = () => {

    const {counter,incrementCounter} = useCounter(1);
    const url = `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`

  const { data, isLoading, hasError } = useFetch(
    url
  );

  console.log(data);
  const { quote, author } = !!data && data[0];

  return (
    <>
      <h1>BreakingBad Quotes </h1>
      <hr />

      {
        isLoading ? (
            <div className="alert alert-info text-center">Loading...</div>
        ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
          <button className="btn btn-primary" onClick={ 
            (event) => incrementCounter(1)
          }>Next quote</button>
    </>
  );
};
