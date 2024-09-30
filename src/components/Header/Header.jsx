// Header.jsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';


import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
 // Adjust the path as necessary

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));

const Header = () => {
  const [activeButton, setActiveButton] = useState("button1");
  const [value, setValue] = React.useState(0);

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppBar
    position="relative"
    
      sx={{ backgroundColor: "white", boxShadow: "none", width: "100%", paddingX:"32px", paddingY:2.5,  }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
       
        <Box
          component="img"
          src="./assets/Logo1.png"
          alt="Project Logo"
          sx={{ height: 37, width: 237, mr: 2 }}
        />

      
        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Обращение клиента" {...a11yProps(0)} />
            <Tab label="Продукты клиента" {...a11yProps(1)} />
          </Tabs>
        </Box>

     
        <Box sx={{ display: "flex", gap:2, alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 , color: "black"}}>
          Зухра Умарова
          </Typography>
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </StyledBadge>
          </StyledBadge>
          <IconButton
           
          sx={{
            borderRadius: "50%",
            border: "1px solid gray",
            margin: "0 4px",
          }}
        >
          <HeadsetMicIcon  sx={{color:"#1A99FF"}}/>
        </IconButton>
        
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
