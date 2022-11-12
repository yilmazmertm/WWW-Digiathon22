import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardHeader, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function BysListCard(data) {
  return (
    <>
      {data.data.map((data, i) => {
        return (
          <Grid key={i}>
            <Box sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 5, mt: 5 }}>
              <Card variant="outlined" sx={{ borderRadius: 5 }}>
                <CardContent>
                  <Grid display={"flex"}>
                    <Avatar src={data.logo_url} sx={{width: 70, height: 70}} />
                    <CardHeader
                      title={data.name}
                      sx={{ fontSize: 14, fontWeight: 900, ml: 5 }}
                      color="text.secondary"
                      gutterBottom
                    ></CardHeader>
                  </Grid>
                  <Typography variant="h5" component="div">
                    BDS: {data.origin_code}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Wallet Adress: {data.wallet_address}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
