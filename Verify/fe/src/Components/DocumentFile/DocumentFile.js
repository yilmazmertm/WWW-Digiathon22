import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blobToSHA256 } from "file-to-sha256";
import axios from "axios";
import { controlDocument } from "../../Utils/utils";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

const theme = createTheme();

export default function DocumentFile() {
  const [docId, setDocId] = useState("");
  const [docHash, setDocHash] = useState("");

  async function generateKey(file) {
    const hashTemp = await blobToSHA256(file);
    setDocHash(hashTemp);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
          <Typography component="h1" variant="h5">
            Belge Sorgula
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Belge No:"
              autoFocus
              onChange={(e) => setDocId(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              type="file"
              id="password"
              autoComplete="current-password"
              onChange={(e) => generateKey(e.target.files[0])}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => controlDocument(docId, docHash)}
            >
              Sorgula
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
