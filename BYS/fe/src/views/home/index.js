import React from "react";
import SiderBar from "../../components/home/sidebar";
import List from "../../components/home/list";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
      <Grid item xs={6}>
        <SiderBar />
      </Grid>
      <Grid item xs={6}>
        <List />
      </Grid>
    </Grid>
  );
}
