import React from "react";
import useUsData from "./useUsData";
import useStateData from "./useStateData";
import { API, API_STATES } from "../constants";
import SearchParams from "./SearchParams";

const UsData = (props) => {
  const [usData] = useUsData(API);

  return (
    <div>
      {usData.loading ? (
        "...loading"
      ) : (
        <div>
          <p>Confirmed {usData.data.confirmed.value} </p>
          <p>Recovered {usData.data.recovered.value} </p>
          <p>Deaths {usData.data.deaths.value} </p>
          <p>Last Update {usData.data.lastUpdate} </p>
          <SearchParams />
        </div>
      )}
    </div>
  );
};

export default UsData;
