import React, { useEffect, useState } from "react";
import BysListCard from "../Card/BysListCard";
import axios from "axios";
import Grid from "@mui/material/Grid";
import "./list.css"
const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

export default function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    api
      .get("get-authorities")
      .then((res) => setData(res.data.data))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      <Grid display={"flex"} flexWrap="wrap">
        <BysListCard data={data} />
      </Grid>
    </>
  );
}
