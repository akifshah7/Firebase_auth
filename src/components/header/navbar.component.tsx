import {
  Typography,
  Autocomplete,
  InputBase,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import { Search } from "@mui/icons-material";


const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className="w-full flex justify-between" >
        <Typography variant="h5">Old Delhi</Typography>
        <Box display='flex' alignItems="center">
          <Typography className="text-xs font-thin flex w-full">Explore New Places</Typography>
          <div className="flex items-center bg-white p-4 w-full rounded-sm h-9 gap-x-4">
            <div className="text-gray-500">
                <Search/>
            </div>
            <InputBase placeholder="Search..." className="w-full"/>
          </div>

        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
