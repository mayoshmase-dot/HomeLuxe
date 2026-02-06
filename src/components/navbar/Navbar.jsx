import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
export default function Navbar() {

    return (
        <Box>
            <AppBar position="static" sx={{ backgroundColor: 'white' , boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)'  } }>
                <Toolbar sx={{display:'flex'}} >
                    <IconButton>
                        <MenuIcon sx={{ display: { xs: 'flex', sm: 'none' } }} />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: .5, color: 'black' }}>
                        HomeLuxe
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'flex', alignItems:'center' }, gap: 3 }}>
                        <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Home</Link >
                        <Link component={RouterLink} to={'/shop'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Shop</Link >
                        <Link component={RouterLink} to={'/product'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Product</Link >
                        <Link component={RouterLink} to={'/contact'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Contact Us</Link >
                    </Box>
                    <Box sx={{display:'flex' ,marginLeft:'auto' , gap:2}}>
                        <IconButton >
                            <SearchIcon sx={{ color: 'black', display: { xs: 'none', sm: 'flex' } }} />
                        </IconButton>
                        <IconButton >
                            <AccountCircleOutlinedIcon sx={{ color: 'black', display: { xs: 'none', sm: 'flex' } }} />
                        </IconButton>
                        <IconButton >
                            <LocalMallOutlinedIcon sx={{ color: 'black' }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
