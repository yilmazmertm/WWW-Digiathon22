import React from "react";
import { TextField, Card, Button } from "@mui/material";

export default function Form({ setName, setSurname }) {
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
        label="İsim"
        variant="outlined"
        sx={{ mt: 2 }}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Soyisim"
        variant="outlined"
        sx={{ mt: 2 }}
        onChange={(e) => setSurname(e.target.value)}
      />
    </Card>
  );
}
