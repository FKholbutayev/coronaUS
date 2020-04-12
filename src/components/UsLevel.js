import React from "react";
import useUsData from "./useFetchData";
import { API } from "../constants";
import StateLevel from "./StateLevel";
import useFetchData from "./useFetchData";

const UsLevel = () => {
  const [usData] = useFetchData(API);

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
          <StateLevel />
        </div>
      )}
    </div>
  );
};

export default UsLevel;
