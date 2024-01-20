import { CssBaseline, Grid } from "@mui/material";
import  Navbar  from './components/header/navbar.component';
import Map from "./components/map/map.component";
import List from "./components/list/list.component";

function App() {

  return (
    <>
    <CssBaseline/>
    <Navbar/>
    <Grid container spacing={3} className="w-full">
      <Grid item sm={12} md={4}>
        <List/>
      </Grid>
      <Grid item sm={12} md={8}>
        <Map/>
      </Grid>
    </Grid>
    </>
  )
}

export default App
