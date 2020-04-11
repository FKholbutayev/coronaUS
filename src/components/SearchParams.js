import React, { useState } from "react";
import { API_STATES } from "../constants";
import useUsData from "./useUsData";

const SearchParams = () => {
  const [stateData] = useUsData(API_STATES);
  const [state, setState] = useState("New York");

  if (!stateData.loading) {
    const selectedState = stateData.data.filter(({ provinceState }) => {
      return provinceState === state;
    });

    console.log(selectedState);
  }

  const changeState = () => {
    setState("Michigan");
  };

  return (
    <div>
      <button onClick={changeState}>update state</button>
    </div>
  );
};

export default SearchParams;
