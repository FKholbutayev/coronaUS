import axios from "axios";
import React, { useState, useEffect } from "react";

const useUsData = (api) => {
  const [usData, setUsData] = useState({ data: null, loading: true });

  useEffect(() => {
    axios
      .get(api)
      .then(({ data }) => {
        setUsData({ data, loading: false });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [api]);
  return [usData];
};

export default useUsData;
