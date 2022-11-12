import React from "react";
import SiderBar from "../../components/home/sidebar";
import List from "../../components/home/list";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <SiderBar />
      </Grid>
      <Grid item xs={6}>
        <List />
      </Grid>
    </Grid>
  );
}
