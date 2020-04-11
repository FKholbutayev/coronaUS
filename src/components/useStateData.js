import React, { useState, useEffect } from "react";
import axios from "axios";

const useStateData = (api, state) => {
  const [statesData, setStatesData] = useState({ data: null, loading: true });

  useEffect(() => {
    axios
      .get(api)
      .then(({ data }) => {
        setStatesData({ data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state]);

  console.log(statesData);

  return [statesData];
};

export default useStateData;
