import { Box, Typography } from "@mui/material"

const MessageText = ({textBold, text})=> {
    return(
       <Box sx={{margin:"24px 32px", paddingX:"24px", paddingY:"20px", backgroundColor:"#F5FFFB", border: "1px solid #2FB1EA", borderRadius: "12px", fontStyle: 'italic'}}>
       <Typography variant="h6" sx={{fontSize:"15px"}}>
            <Box component="span" sx={{ fontWeight: 'bold', textTransform: 'uppercase'  }}>
                {textBold}
            </Box> {text}
             
        </Typography>
       </Box>
    )
}
export default MessageText