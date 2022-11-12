import React from "react";
import Container from "@mui/material/Container";
import { Typography, Button, Grid } from "@mui/material";

export default function SiderBar() {
  return (
    <Container
      fixed
      sx={{
        background: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {" "}
      <Typography variant="h3" component="h2">
        Belge Yönetim Sistemi
      </Typography>
      <Typography variant="h5" sx={{ mt: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </Typography>
      <Button
        variant="contained"
        sx={{ mt: 4, width: "400px", mx: "auto" }}
        size="large"
      >
        E-Devlet ile Giriş Yap
      </Button>
    </Container>
  );
}
