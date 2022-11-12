import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardHeader, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const cardA = (
  <>
    <CardContent>
      <Grid>
        <Avatar src="/src/Asset/AdaletBakanligi.png"></Avatar>
        <CardHeader
          title={"Adalet Bakanlığı"}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></CardHeader>
      </Grid>
      <Typography variant="h5" component="div">
        BDS: TR000025
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Wallet Adress: 0xfaA6ec02C2502206bB07Ea6367B807527eeD5225
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
  </>
);
const cardB = (
  <>
    <CardContent>
      <Grid>
        <Avatar src="/src/Asset/AdaletBakanligi.png"></Avatar>
        <CardHeader
          title={"Gedik Üniversitesi"}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        ></CardHeader>
      </Grid>
      <Typography variant="h5" component="div">
        BDS: TR000024
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Wallet Adress: 0xfaA6ec02C2502206bB07Ea6367B807527eeD5225
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
  </>
);
export default function BysListCard() {
  return (
    <>
      <Grid>
        <Box sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 5, mt: 5 }}>
          <Card variant="outlined" sx={{ borderRadius: 5 }}>
            {cardA}
          </Card>
        </Box>
        <Box sx={{ maxWidth: 400, boxShadow: 3, borderRadius: 5, mt: 5 }}>
          <Card variant="outlined" sx={{ borderRadius: 5 }}>
            {cardB}
          </Card>
        </Box>
      </Grid>
    </>
  );
}
