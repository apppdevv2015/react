
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import SearchIcon from '@mui/icons-material/Search';
// import Container from "@mui/material/Container";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import React, { useState } from 'react';
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import InputBase from "@mui/material/InputBase";
// import { BrandLink, } from './Navbar.styles';

// import AccountBoxOutlinedIcon from '@mui/icons-material/PermIdentity';


// const settings = ["Profile", "Account", "Dashboard", "Logout" ,'SignIn',];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
//     null
//   );
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
//     null
//   );

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const [search, setSearch] = useState<string>('');
//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearch(event.target.value);
//   };

//   const handleLoginMenu = (event: React.MouseEvent<HTMLElement>) => {
//     alert("hello");

//   };
//   return (
//     <AppBar position="fixed">


//       {/* for large device */}
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>

//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           ><BrandLink to="/">eSHOP</BrandLink>
//           </Typography>



//           {/* for small device */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton

//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <BrandLink to="/">eSHOP</BrandLink>
//             </IconButton>

//           </Box>


//           {/* for large device */}

//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             <Box sx={{ position: 'relative', border: 1, borderRadius: 1, borderColor: 'gray.500', ml: '3px', bgcolor: 'background.paper' }}>
//               <IconButton sx={{ p: '10px', color: 'gray' }}>
//                 <SearchIcon />
//               </IconButton>
//               <InputBase
//                 sx={{ ml: 1, flex: 1 }}
//                 placeholder="Search…"
//                 inputProps={{ 'aria-label': 'search' }}
//                 value={search}
//                 onChange={handleSearchChange}
//               />
//             </Box>
//           </Box>



//           {/* for small device */}
//           <Box sx={{ flexGrow: 1, borderColor: 'gray.500', mr: '4px', border: 1, borderRadius: 1, bgcolor: 'background.paper', display: { xs: "flex", md: "none" } }}>

//             <IconButton sx={{ p: '10px', color: 'gray' }}>
//               <SearchIcon />
//             </IconButton>
//             <InputBase
//               sx={{ ml: 1, flex: 1 }}
//               placeholder="Search…"
//               inputProps={{ 'aria-label': 'search' }}
//               value={search}
//               onChange={handleSearchChange}
//             />

//           </Box>


//           <IconButton sx={{ color: 'white', fontWeight: '700px' ,mr:'5px'}}> <AddShoppingCartIcon/></IconButton>
//           <IconButton sx={{ color: 'white', fontWeight: '700px' ,mr:'5px'}} ><FavoriteBorderIcon/></IconButton>
         
//           <Box >
//             <Tooltip title="Open profile">
//               <IconButton 
              
              
              
              
              
              
              
              
//               onClick={handleOpenUserMenu} sx={{ p: 0 , color: 'white', fontWeight: '700px'}}>
                
//                <AccountBoxOutlinedIcon/> 
                
//               </IconButton>
//             </Tooltip>

          
            

//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  
//                   <Typography onClick={handleLoginMenu} textAlign="center">{setting  }</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;




import React, { useState } from 'react';
import { AppBar, Box, Container, IconButton, InputBase, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountBoxOutlinedIcon from '@mui/icons-material/PermIdentity';

import { useNavigate } from 'react-router-dom';
import Login from '../userforms/login/Login';
import { BrandLink, } from './Navbar.styles';
const settings = ["Profile", "Account", "Dashboard", "Logout", 'Login'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [search, setSearch] = useState<string>('');
const [openLogin, setOpenLogin] = useState<boolean>(false); 
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };


  const handleLoginMenu = () => {
    navigate('/Login');
    setOpenLogin(true); // Open the login form when "Login" is clicked
    handleCloseUserMenu(); // Close the user menu after opening the login form
  };// Close the user menu after navigation
 

  return (
    <div>
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={BrandLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          <BrandLink to="/">eSHOP</BrandLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <BrandLink to="/">eSHOP</BrandLink>
            </IconButton>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Box sx={{ position: 'relative', border: 1, borderRadius: 1, borderColor: 'gray.500', ml: '3px', bgcolor: 'background.paper' }}>
              <IconButton sx={{ p: '10px', color: 'gray' }}>
                <SearchIcon />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={search}
                onChange={handleSearchChange}
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, borderColor: 'gray.500', mr: '4px', border: 1, borderRadius: 1, bgcolor: 'background.paper', display: { xs: "flex", md: "none" } }}>
            <IconButton sx={{ p: '10px', color: 'gray' }}>
              <SearchIcon />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={search}
              onChange={handleSearchChange}
            />
          </Box>
          <IconButton sx={{ color: 'white', fontWeight: '700px', mr: '5px' }}> <AddShoppingCartIcon /></IconButton>
          <IconButton sx={{ color: 'white', fontWeight: '700px', mr: '5px' }} ><FavoriteBorderIcon /></IconButton>
          <Box>
            <Tooltip title="Open profile">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, color: 'white', fontWeight: '700px' }}
              >
                <AccountBoxOutlinedIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography onClick={setting === 'Login' ? handleLoginMenu : undefined} textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
      
    </AppBar>
  {openLogin && <Login />}
  </div>
  );
}

export default ResponsiveAppBar;




