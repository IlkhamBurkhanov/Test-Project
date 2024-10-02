// Calling.jsx
import React from "react";
import { Box, Typography, Avatar, Button, IconButton, TextField, InputAdornment } from "@mui/material";
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MessageIcon from "@mui/icons-material/Message";
import CallEndIcon from '@mui/icons-material/CallEnd';
import PauseIcon from '@mui/icons-material/Pause';
import MicNoneIcon from '@mui/icons-material/MicNone';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import CircleIcon from '@mui/icons-material/Circle';
import MapsUgcRoundedIcon from '@mui/icons-material/MapsUgcRounded';
import Russia from "../../../public/assets/russia.png"



const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));
const Calling = () => {
  const userName = "Abdullaev Abdulla Abdullaevich"; // Replace with actual user name
  const userLanguage = "Русский язык"; // Replace with actual language
  const userId = "30101800050014"; // Replace with actual ID
  const userDate = "01.01.2000"; // Replace with actual date
  const userNumber = "+998 91 2345678"; // Replace with actual number
  const tipText = "Физ. лицо"; // Replace with actual tip text

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: "12px",
        marginX: "32px",
        marginTop: "8px",
        paddingX: "32px",
        paddingY: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Avatar and Name */}
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <SmallAvatar alt="Remy Sharp" src="/public/assets/russia.png"/>
        }
      >
        <Avatar alt="Aravis Howard" src="/static/images/avatar/2.jpg" sx={{ width: '42px', height: '42px' }} />
      </Badge>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          ml: "12px",
        }}
      >
        <Typography>{userName}</Typography>
        <Button
          variant=""
          sx={{padding:0, fontSize:"13px"}}
          endIcon={<CheckCircleIcon sx={{ color: "#44C395"}} />}
          
        >
          {userLanguage}
        </Button>
      </Box>

      {/* ID, Date, and Number...*/}
      <Box sx={{ ml: 10, display: "flex", alignItems: "center", gap: "20px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            fontSize:"13px"
          }}
        >
          <Typography variant="h6" sx={{  color:"#8294AF", fontSize:"13px" }}>
          ПИНФЛ
          </Typography>
          <Typography variant="h6" sx={{  color:"#2F2F37", fontSize:"14px" }}>{userId}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography variant="h6" sx={{  color:"#8294AF", fontSize:"13px"}}>
          Дата рождения
          </Typography>
          <Typography variant="h6" sx={{  color:"#2F2F37", fontSize:"14px" }}>{userDate}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }} 
        >
          <Typography variant="h6" sx={{  color:"#8294AF", fontSize:"13px" }}>
          Номер телефона
          </Typography>
          <Typography variant="h6" sx={{  color:"#2F2F37", fontSize:"14px" }}>{userNumber}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography variant="h6" sx={{  color:"#8294AF", fontSize:"13px" }}>
          Тип
          </Typography>
          <Typography variant="h6" sx={{  color:"#2F2F37", fontSize:"14px" }}>{tipText}</Typography>
        </Box>
      </Box>

      {/* Tip Text */}
      <Box sx={{ flexGrow: 1, ml: 2, textAlign: "right" }}>
        {/* <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Tip
        </Typography>
        <Typography variant="body2">{tipText}</Typography> */}
      </Box>

      {/* Second Timer with Border Green */}
      <Box
        sx={{
          border: "2px solid #44C395",
          borderRadius: "24px",
          backgroundColor:"#F5FFFB",
          paddingY: "7px",
          display: "flex",
          gap:"7px",
          alignItems: "center",
         
          ml: 2,
          textAlign: "right",
          paddingX: "20px",
          color: "#44C395",
          fontSize: "14px"
        }}
      > <CircleIcon sx={{width:"16px", height:"16px", }}/>
        <Typography >00:00</Typography>
      </Box>

      {/* Icon Buttons */}
      <Box sx={{ display: "flex", alignItems: "center", ml: 2, gap:"6px"}}>
        <IconButton
          sx={{
            borderRadius: "50%",
            border: "1px solid #FF6E41",
            margin: "0 4px",
            backgroundColor: "#FF6E41"
          }}
        >
          <CallEndIcon sx={{ color: '#ffffff' }}  />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            border: "1px solid gray",
            margin: "0 4px",
          }}
        >
          <PauseIcon />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            border: "1px solid gray",
            margin: "0 4px",
          }}
        >
          <MicNoneIcon />
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            border: "1px solid gray",
            margin: "0 4px",
          }}
        >
          <MapsUgcRoundedIcon sx={{ color: '#1A99FF',  }}/>
        </IconButton>
        <IconButton
          sx={{
            borderRadius: "50%",
            border: "1px solid gray",
            margin: "0 4px",
          }}
        >
          <AddIcCallIcon sx={{ color: '#1A99FF' }} />
        </IconButton>
      </Box>

      {/* Search Client Button */}
      <TextField
            variant="outlined"
            placeholder="Поиск клиента"
            sx={{
                ml: 2,
                fontSize:"14px",
                '& .MuiOutlinedInput-root': {
                    border: '1px solid #1A99FF',
                    borderRadius: '12px',
                    '&:focus': {
                        outline: 'none', // Remove outline when focused
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: '#1A99FF', // Border color when focused
                    },
                },
                '& .MuiInputBase-input::placeholder': {
                    color: '#1A99FF', // Placeholder color
                    opacity: 1, // Ensures the placeholder color is not transparent
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none', // Remove the default outline
                },
            }}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: '#1A99FF' }} /> {/* Icon color */}
                    </InputAdornment>
                ),
            }}
        />
    </Box>
  );
};

export default Calling;
