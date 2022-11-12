import React from "react";
import Container from "@mui/material/Container";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SiderBar() {
  const navigate = useNavigate();
  return (
    <Container
      fixed
      sx={{
        background: "#fff",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "sticky",
        width: "500px",
        marginLeft: "0px",
        top: 0,
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
        onClick={() => navigate("/info")}
      >
        E-Devlet ile Giriş Yap
      </Button>
    </Container>
  );
}
