import React from "react";
import Form from "../../components/informations/form";
import { Grid } from "@mui/material";

export default function Informations() {
  return (
    <Grid container md={8} mx="auto">
      <Grid item xs={12}>
        <Form />
      </Grid>
    </Grid>
  );
}
