import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
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
                  <Grid>
                    <Avatar src={data.logo_url} />
                    <CardHeader
                      title={data.name}
                      sx={{ fontSize: 14 }}
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
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        );
      })}
    </>
  );
}
