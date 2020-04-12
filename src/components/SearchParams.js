import React, { useState } from "react";
import { API_STATES } from "../constants";
import useUsData from "./useUsData";

const SearchParams = () => {
  const [stateData] = useUsData(API_STATES);
  const [state, setState] = useState("New York");

  if (!stateData.loading) {
    let selectedState = stateData.data
      .filter(({ provinceState }) => {
        return provinceState === state;
      })
      .reduce(
        (prev, { confirmed, recovered, deaths }) => {
          prev.confirmed = prev.confirmed + confirmed;
          prev.recovered = prev.recovered + recovered;
          prev.deaths = prev.deaths + deaths;
          return prev;
        },
        { confirmed: 0, recovered: 0, deaths: 0 }
      );

    console.log(selectedState);
  }

  const changeState = () => {
    setState("Illinois");
  };

  return (
    <div>
      <label htmlFor="state">
        State
        <input id="state" placeholder="state" />
      </label>
      <button onClick={changeState}>update state</button>
    </div>
  );
};

export default SearchParams;
