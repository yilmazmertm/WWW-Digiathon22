import React, { useState } from "react";
import { TextField, Card, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const api = axios.create({ baseURL: process.env.REACT_APP_SERVER_URL });

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
    <Card
      sx={{
        mt: 4,
        px: 4,
        pt: 4,
        pb: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <TextField
        id="outlined-basic"
        label="Cüzdan Adresi"
        variant="outlined"
        sx={{ mt: 2 }}
        onChange={(e) => setWallet(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="İsim"
        variant="outlined"
        sx={{ mt: 2 }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        variant="outlined"
        helperText="Logo"
        type="file"
        sx={{ mt: 2 }}
        onChange={(e) => setFile(e.target.files[0])}
      />
      <Button
        variant="contained"
        sx={{ mt: 4, width: "400px", mx: "auto" }}
        size="large"
        onClick={submitForm}
      >
        Onayla
      </Button>
    </Card>
  );
}
