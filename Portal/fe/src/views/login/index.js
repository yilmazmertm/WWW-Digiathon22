import React from "react";
import Form from "../../components/login/form";
import Grid from "@mui/material/Grid";
import University from "../../components/login/UniversityWalpaper/University";
export default function Login() {
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <University />
        </Grid>
      </Grid>
    </>
  );
}
