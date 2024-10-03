// Header.jsx
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Image from "@mui/icons-material/Image";
// Adjust the path as necessary

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
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
      sx={{
        padding: 0, // Remove padding
        margin: 0, // Remove margin
        boxShadow: "none",
        backgroundColor: "white",

        width: "100%",
        // paddingX: "32px",
        // paddingY: 2.5,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding:"0px 32px"
        }}
      >
        <Box
          component="img"
          src="./assets/Logo1.svg"
          alt="Project Logo"
          sx={{ height: 37, width: 237,}}
        />

        <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              label="Обращение клиента"
              {...a11yProps(0)}
              sx={{
                backgroundColor: value === 0 ? "#e0f7fa" : "transparent",
                textTransform: 'none', // Background when active
                fontSize:"16px",

                fontWeight: "normal",
                color: "#8294AF", // Default tab color when inactive
                "&.Mui-selected": {
                  color: "#000", // Active tab color
                  fontWeight: "bold", // Make the active tab bold
                }, // Text color when active
                padding: "10px 20px",
                minWidth: "150px",
                transition: "background-color 0.3s ease",
              }}
            />
            <Tab
              label="Продукты клиента"
              {...a11yProps(1)}
              sx={{
                backgroundColor: value === 1 ? "#e0f7fa" : "transparent",
                textTransform: 'none', // Background when active
                fontSize:"16px", // Background when active

                fontWeight: "normal",
                color: "#8294AF", // Default tab color when inactive
                "&.Mui-selected": {
                  color: "#000", // Active tab color
                  fontWeight: "bold", // Make the active tab bold
                },
                ".MuiTabs-indicator": {
                  backgroundColor: "#1A99FF", // Custom color for the indicator
                  height: "4px", // Custom height for the bottom line
                }, // Text color when active
                padding: "32px 20px",
                minWidth: "150px",
                transition: "background-color 0.3s ease",
              }}
            />
          </Tabs>
        </Box>

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between", // Space between items
              alignItems: "center",
              gap: "7px",
              padding: "8px 12px 8px 8px",
              border: "1px solid #EBEFFF",
              borderRadius: "50px",
            }}
          >
            <img
              alt="Iocn"
              sx={{ width: "16px", height: "16px", padding: "10px" }}
              src="/assets/Group1.svg"
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column", // Stack the text vertically
                alignItems: "flex-start",

                // Align all items to the right
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "10px",

                  color: "#1A99FF",
                }}
              >
                Ожидание
              </Typography>
              <Typography
                sx={{
                  display: "inline-block",
                  textAlign: "center",
                  color: "#8294AF",
                  fontSize: "10px",
                  marginBottom: "3px", // Ensure background wraps tightly around text
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: "18px",
                    color: "black",
                    fontWeight: 700,
                    marginRight: "2px",
                  }}
                >
                  106
                </Box>
                (18:08)
              </Typography>
            </Box>
            <img
              alt="Iocn"
              sx={{ width: "20px", height: "20px" }}
              src="/assets/Frame.svg"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column", // Stack the text vertically
              alignItems: "flex-end",
              marginLeft:"8px"
              // Align all items to the right
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                fontSize: "15px",

                color: "black",
              }}
            >
              Зухра Умарова
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: "10px",
                color: "#FFF",
                backgroundColor: "#1A99FF",
                fontWeight: 500,
                borderRadius: "10px 0px 10px 10px",
                textAlign: "right",
                padding: "2px 5px",
                display: "inline-block", // Ensure background wraps tightly around text
              }}
            >
              Оператор 228
            </Typography>
          </Box>
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
              <Avatar
                alt="Remy Sharp"
                sx={{ width: "36px", height: "36px" }}
                src="/static/images/avatar/1.jpg"
              />
            </StyledBadge>
          </StyledBadge>
          <IconButton
            sx={{
              borderRadius: "50%",
              border: "1px solid gray",
              margin: "0 4px",
            }}
          >
            <img
              alt="Iocn"
              sx={{ width: "16px", height: "16px", padding: "10px" }}
              src="/assets/Group.svg"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
