import {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from './Menu';
import ShortMenu from './ShortMenu';
import Logo from '../../assets/LogoImg.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';



const drawerWidth = 240;
const shortdrawerwidth = 80

export default function Navbar({content,navigationitems}) {

  const [isBigMenu, setIsBigMenu] = useState(true)

  const changeMenu = () =>{
    setIsBigMenu(!isBigMenu)
  } 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar >
          <IconButton sx={{marginRight:'30px', color:'white'}} onClick={changeMenu}>
            {isBigMenu ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="h6" noWrap component="div" paddingTop='5px'>
            <img width="5%" src={Logo} alt="Logo" />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: isBigMenu ? drawerWidth : shortdrawerwidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: isBigMenu ? drawerWidth : shortdrawerwidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
       {isBigMenu ? <Menu /> : <ShortMenu/>}

      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
          {content}
      </Box>
    </Box>
  );
}
