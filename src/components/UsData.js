import React, { useState, useEffect } from "react";
import axios from "axios";
import useUsData from "./useUsData";

const UsData = (props) => {
  const api = "https://covid19.mathdro.id/api/countries/USA";

  const [usData] = useUsData(api);

  console.log("from hook", usData);
  return <div></div>;
};

export default UsData;
