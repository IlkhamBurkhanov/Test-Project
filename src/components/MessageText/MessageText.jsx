import { Box, Typography } from "@mui/material"

const MessageText = ()=> {
    return(
       <Box sx={{margin:5, padding:5, backgroundColor:"#F5FFFB", border: "1px solid #2FB1EA", borderRadius: "12px", fontStyle: 'italic'}}>
       <Typography variant="h6" sx={{fontSize:"16px"}}>
            <Box component="span" sx={{ fontWeight: 'bold', textTransform: 'uppercase'  }}>
                "Добрый день и добро пожаловать в кОлл-центр АК «Aloqabank» ! 
            </Box>
             Мы рады видеть вас и готовы оказать качественную помощь в решении всех ваших финансовых вопросов. 
            Чем могу быть полезен сегодня? Могу я узнать ваше полное имя, пожалуйста? Это поможет нам обеспечить более персонализированное обслуживание и быстрее решить ваш вопрос."
        </Typography>
       </Box>
    )
}
export default MessageText