import React from "react";
import { Typography,AppBar,Card,CardActions,Toolbar,CssBaseline ,Container, Grid, Button, CardMedia, CardContent } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import useStyles from "./styles";
let cards=[1,2,3,4,5];
function App() {
  const classes= useStyles();
  return (
    <>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <AccountBoxIcon className={classes.icon}/>
        <Typography variant="h5">Roger</Typography>
      </Toolbar>
    </AppBar>
    <main>
      <div className={classes.container}>
        <Container maxWidth="sm" >
          <Typography variant="h3" align="center" color="textPrimary">Mui</Typography>
          <Typography variant="h5" color="textSecondary" paragraph>This is the mui app  </Typography>
        </Container>
        <div className={classes.buttons}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button variant="contained" color="secondary">click me </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">click me </Button>
            </Grid>
          </Grid>
        </div>
      </div>
      <Container maxWidth='md' className={classes.cardGrid} >
        <Grid container spacing={4}>
          {cards.map(()=>(

          <Grid item>
            <Card className={classes.card}>
              <CardMedia className={classes.cardMedia} image="https://unsplash.com/random" title="image title" />
              <CardContent className={classes.cardcontent}>
                <Typography variant="h5" gutterBottom>Image</Typography>
                <Typography>this is the content here</Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" size="small" color="info">edit</Button>
                <Button variant="contained" size="small" color="success">view</Button>
              </CardActions>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </main>
    </>
  );
}

export default App;
