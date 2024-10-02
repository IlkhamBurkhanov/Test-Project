import { useState } from 'react'
import Header from '../Header/Header'
import Calling from '../Calling/Calling'
import {  Box } from '@mui/material';
import MessageText from '../MessageText/MessageText'
import ClientInfo from '../ClientInfo/ClientInfo';


function Main() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', minHeight: '100vh', fontFamily:"roboto",paddingBottom:"100px" }}>
     <Header/>
     <Calling/>
     <MessageText textBold="Добрый день и добро пожаловать в кОлл-центр АК «Aloqabank» !" text="Мы рады видеть вас и готовы оказать качественную помощь в решении всех ваших финансовых вопросов. 
            Чем могу быть полезен сегодня? Могу я узнать ваше полное имя, пожалуйста? Это поможет нам обеспечить более персонализированное обслуживание и быстрее решить ваш вопрос."/>
     <ClientInfo/>
        
   </Box>
  )
}

export default Main
