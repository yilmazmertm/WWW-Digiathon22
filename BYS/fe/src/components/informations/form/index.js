import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Bg from "../../../Asset/bg.jpg";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

const theme = createTheme();

export default function Form() {
  const [wallet, setWallet] = useState("");
  const [name, setName] = useState("");
  const [file, setFile] = useState();
  const formData = new FormData();
  const navigate = useNavigate();

  const submitForm = () => {
    formData.append("authorityName", name);
    formData.append("authorityLogo", file);
    formData.append("authorityWalletAddress", wallet);
    api
      .post("create-authority", formData)
      .then(() => navigate("/"))
      .catch((e) => console.error(e));
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${Bg})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Bilgileriniz
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Cüzdan adresi"
                name="email"
                autoFocus
                onChange={(e) => setWallet(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                label="İsim"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                type="file"
                id="password"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submitForm}
              >
                Onayla
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
