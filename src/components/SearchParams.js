import React, { useState } from "react";
import { API_STATES } from "../constants";
import useUsData from "./useUsData";

const SearchParams = () => {
  const [stateData] = useUsData(API_STATES);
  const [state, setState] = useState("New York");
  const allStates = [];
  let distinctState = [];
  let selectedState = { confirmed: 0, recovered: 0, deaths: 0 };

  if (!stateData.loading) {
    selectedState = stateData.data
      .filter(({ provinceState }) => {
        allStates.push(provinceState);
        return provinceState === state;
      })
      .reduce((prev, { confirmed, recovered, deaths }) => {
        prev.confirmed = prev.confirmed + confirmed;
        prev.recovered = prev.recovered + recovered;
        prev.deaths = prev.deaths + deaths;
        return prev;
      }, selectedState);
  }

  distinctState = [...new Set(allStates)];
  return (
    <div>
      <label htmlFor="state">
        State
        <select
          id={state}
          data-testid={state}
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={(e) => setState(e.target.value)}
          disabled={!distinctState.length}
        >
          <option />
          {distinctState.map((stateProvince) => (
            <option key={stateProvince} value={stateProvince}>
              {stateProvince}
            </option>
          ))}
        </select>
      </label>
      <div>
        <p>State level</p>
        <p>confirmed {selectedState.confirmed}</p>
        <p>recovered {selectedState.recovered}</p>
        <p>deaths {selectedState.deaths}</p>
      </div>
    </div>
  );
};

export default SearchParams;
