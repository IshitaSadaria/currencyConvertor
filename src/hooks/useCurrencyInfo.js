import { useEffect, useState } from "react";

function useCurrencyInfo (currency) {
    const [data, setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [currency])
  }  
  
  //here the return statement is not used because this is a hook not a component

export default useCurrencyInfo;

/* 
This is a React hook named useCurrencyInfo. It fetches currency information from an external API 
(https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json) and returns 
the data.

Here's a breakdown of what the code does:

It imports useEffect and useState from React.
It defines a function useCurrencyInfo that takes a currency parameter.
It uses useState to create a state variable data initialized with an empty object {}.
It uses useEffect to fetch data from the API when the currency parameter changes. The effect function:
Fetches the data from the API using fetch.
Parses the response as JSON using res.json().
Updates the data state with the parsed response using setData.
It logs the updated data state to the console using console.log.
The hook returns nothing (i.e., it doesn't return a value).
The purpose of this hook is likely to provide a way to fetch and manage currency information in a React 
application. You can use this hook in a component by calling it and passing a currency code as an argument
*/