import { useState } from 'react'
import Header from './components/Header/Header'
import Calling from './components/Calling/Calling'
import {  Box } from '@mui/material';
import MessageText from './components/MessageText/MessageText'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', minHeight: '100vh', fontFamily:"roboto" }}>
     <Header/>
     <Calling/>
     <MessageText/>
        
   </Box>
  )
}

export default App
