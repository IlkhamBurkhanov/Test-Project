import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import { Box, Link, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Block } from "@mui/icons-material";
import MessageText from "../MessageText/MessageText";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const StyledFormControlLabel = styled((props) => (
  <FormControlLabel {...props} />
))(({ theme }) => ({
  variants: [
    {
      props: { checked: true },
      style: {
        ".MuiFormControlLabel-label": {
          color: theme.palette.primary.main,
        },
      },
    },
  ],
}));

function MyFormControlLabel(props) {
  const radioGroup = useRadioGroup();

  let checked = false;

  if (radioGroup) {
    checked = radioGroup.value === props.value;
  }

  return <StyledFormControlLabel checked={checked} {...props} />;
}

MyFormControlLabel.propTypes = {
  /**
   * The value of the component.
   */
  value: PropTypes.any,
};

const data = [
  "Баланс и транзакции",
  "Жалобы и обратная связь",
  "Дебетовые карты",
  "Кредитные продукты",
  "Инвестиции",
  "Заявления и документы",
];
const data2 = [
  "UZCARD DUO",
  "HUMO",
  "VISA",
  "VISA Virtual",
  "UzCard-UnionPay",
  "Банковская карта с индивидуальным ",
];
const data3 = [
  "Информационные запросы",
  "Техническая поддержка",
  "Банковские операции",
  "Статус заявок",
  "Обработка жалоб",
  "Общая информация",
  "Условия продуктов",
];
const ClientInfo = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        marginX: "32px",
        padding: "32px",
        borderRadius: "12px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          borderBottom: "1px solid #D7DFED",
          paddingBottom: "14px",
          color: "#2F2F37",
        }}
      >
        Обращение клиента
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          marginTop: "20px",
          marginBottom: "6px",
          color: "#8294AF",
        }}
      >
        ФИО клиента
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        defaultValue="Абдуллаев Абдулла Абдуллаевич"
        variant="outlined"
        hiddenLabel
        InputProps={{
          sx: {
            fontSize: "15px", // Set font size for the input
            color: "black", // Default color for the input text
          },
        }}
        InputLabelProps={{
          sx: {
            fontSize: "15px", // Set font size for the label
            color: "black", // Default color for the label
          },
        }}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        gap="20px"
        width="100%"
        sx={{
          padding: "20px",
          marginY: "20px",
          backgroundColor: "#F9FAFF",
          borderRadius: "12px",
        }}
      >
        <FormControl
          sx={{
            width: "33%", // 1/3 width approximation
          }}
        >
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              marginBottom: "8px",
              color: "#8294AF",
              fontSize: "14px",
            }}
          >
            Тема обращения
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            size="small"
            sx={{
              backgroundColor: "#FFF",
              padding: "20px",

              border: "1px solid #D5DCF4",
              borderRadius: "8px",
              display: "block", // Ensure each item takes full line
              height: "230px", // Limit height to 150px
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#D5DCF4",
                borderRadius: "12px",
                maxHeight: "91px",
                paddingRight: "4px",
                top: "10px",
              }, // Enable scrolling if items overflow
            }}
          >
            {data
              ? data?.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{
                        display: "block",
                        margin: 0,
                        maxHeight: "24px",
                        marginBottom: "6px",
                        padding: 0,
                        "& .MuiFormControlLabel-label": {
                          fontSize: "15px", // Set font size for the label
                          // Default color for the label
                        },
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "#fff" : "#000",
                        "& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label":
                          {
                            color: "#1A99FF", // #1A99FF color for active label
                          },
                      }} // Ensure it appears on one line
                    />
                  );
                })
              : null}
          </RadioGroup>
        </FormControl>
        <FormControl
          sx={{
            width: "33%", // 1/3 width approximation
          }}
        >
          <FormLabel
            id="demo-radio-buttons-group-label"
            sx={{
              marginBottom: "8px",
              color: "#8294AF",
              fontSize: "14px",
            }}
          >
            Подтема
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            sx={{
              backgroundColor: "#FFF",
              padding: "20px",
              border: "1px solid #D5DCF4",
              borderRadius: "8px",
              display: "block", // Ensure each item takes full line
              height: "230px", // Total container height
              maxHeight: "230px", // Max height of the container
              overflowY: "auto", // Scroll when overflowing
              "&::-webkit-scrollbar": {
                width: "6px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#D5DCF4",
                borderRadius: "12px",
                height: "91px", // Visual height of the scrollbar thumb
              }, // Enable scrolling if items overflow
            }}
          >
            {data2
              ? data2?.map((item, index) => {
                  return (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{
                        display: "block",
                        margin: 0,
                        maxHeight: "24px",
                        marginBottom: "6px",
                        padding: 0,
                        "& .MuiFormControlLabel-label": {
                          fontSize: "15px", // Set font size for the label
                          // Default color for the label
                        },
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "#fff" : "#000",
                        "& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label":
                          {
                            color: "#1A99FF", // #1A99FF color for active label
                          },
                      }} // Ensure it appears on one line
                    />
                  );
                })
              : null}
          </RadioGroup>
        </FormControl>
        <Box
          sx={{
            width: "33%", // 1/3 width approximation
          }}
        >
          <Typography
            sx={{
              marginBottom: "8px",
              color: "#8294AF",
              fontSize: "14px",
            }}
          >
            Описание
          </Typography>
          <Box
            sx={{
              backgroundColor: "#FFF",
              padding: "20px",
              border: "1px solid #D5DCF4",
              borderRadius: "8px",
              display: "block", // Ensure each item takes full line
              height: "230px", // Limit height to 150px
              overflowY: "auto", // Enable scrolling if items overflow
            }}
          >
            <Typography>UZCARD DUO (RU)</Typography>
            <Link
              href="https://aloqabank.uz/ru/private/plastic-cards/list/uzcard/"
              underline="hover"
              color="#2FB1EA"
            >
              https://aloqabank.uz/ru/private/plastic-cards/list/uzcard/
            </Link>
            <Typography mt={5}>UZCARD DUO (UZ)</Typography>
            <Link
              href="https://aloqabank.uz/ru/private/plastic-cards/list/uzcard/"
              underline="hover"
              color="#2FB1EA"
            >
              https://aloqabank.uz/ru/private/plastic-cards/list/uzcard/
            </Link>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          fontSize={"18px"}
          color="#2F2F37"
          fontWeight="bold"
          mb="14px"
        >
          Тип обращения
        </Typography>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            display="block"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              // align-items: flex-start,

              alignSelf: "stretch",

              // align-self: stretch;
            }}
          >
            {data3
              ? data3?.map((item, index) => {
                  return (
                    <FormControlLabel
                      value={item}
                      fontSize="15px"
                      control={<Radio />}
                      label={item}
                      sx={{
                        width: "240px",
                        margin: "0", // Set all margins to 0
                        padding: "0",
                        "& .MuiFormControlLabel-label": {
                          fontSize: "15px", // Set font size for the label
                          color: "black", // Default color for the label
                        },
                        // Change the label color when the radio is checked
                        color: (theme) =>
                          theme.palette.mode === "dark" ? "#fff" : "#000",
                        "& .MuiRadio-root.Mui-checked + .MuiFormControlLabel-label":
                          {
                            color: "#1A99FF", // #1A99FF color for active label
                          },
                      }}
                    />
                  );
                })
              : null}
          </RadioGroup>
        </FormControl>
      </Box>
      <Typography
        variant="body1"
        sx={{
          fontSize: "14px",
          marginTop: "20px",
          marginBottom: "6px",
          color: "#8294AF",
        }}
      >
        Примечание{" "}
      </Typography>
      <TextField
        fullWidth
        id="outlined-basic"
        placeholder="Написать текст..."
        variant="outlined"
        hiddenLabel
        InputProps={{
          sx: {
            fontSize: "15px", // Set font size for the input
            color: "black",
            "&::placeholder": {
              color: "##9DA8B9", // Change the placeholder color here
              opacity: 1, // Optional: set opacity (1 = fully visible)
            }, // Default color for the input text
          },
        }}
        InputLabelProps={{
          sx: {
            fontSize: "15px", // Set font size for the label
            color: "black", // Default color for the label
          },
        }}
      />
      <Box sx={{paddingX:"24px", paddingY:"20px", backgroundColor:"#F5FFFB", border: "1px solid #2FB1EA", borderRadius: "12px", fontStyle: 'italic'}}>
       <Typography variant="h6" sx={{fontSize:"15px"}}>
            <Box component="span" sx={{ fontWeight: 'bold', textTransform: 'uppercase'  }}>
            Спасибо за звонок в наш колл-центр.
            </Box>Мы рады были помочь вам с вашим вопросом. Если у вас возникнут еще какие-либо вопросы или нужна дополнительная помощь, не стесняйтесь обращаться. Пожалуйста, хорошего дня/вечера!
             
        </Typography>
       </Box>
      {/* <MessageText textBold="Спасибо за звонок в наш колл-центр." text=" Мы рады были помочь вам с вашим вопросом. Если у вас возникнут еще какие-либо вопросы или нужна дополнительная помощь, не стесняйтесь обращаться. Пожалуйста, хорошего дня/вечера!"/> */}
       <Box 
        sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', // Space between items
            alignItems: 'center', // Center items vertically
           // Optional padding for better spacing
          }}>
       <FormGroup>
      <FormControlLabel
        control={
          <Checkbox 
            defaultChecked 
            sx={{
              color: '#44C395', // Checkbox color when unchecked
              '&.Mui-checked': {
                color: '#44C395', // Checkbox color when checked
              },
            }} 
          />
        }
        label={
          <span style={{ fontSize: '15px', color: 'black' }}>
            Отправить клиенту СМС-сообщение, с ссылкой на Мобильное приложение - «Zoomrad»
          </span>
        }
      />
    </FormGroup>
    <Stack spacing={2} direction="row">
      
      <Button variant="outlined" sx={{ color:"#8294AF", backgroundColor:'#F5F6FA', borderRadius:"8px", borderColor:"#F5F6FA", fontSize:"15px", fontWeight:700, paddingX:'38px'}}>Очистить</Button>
      <Button variant="contained" sx={{ color:"#FFF", backgroundColor:'#1A99FF', borderRadius:"8px", borderColor:"#F5F6FA", fontSize:"15px", fontWeight:700, paddingX:'38px'}}>Завершить</Button>
    </Stack>
    </Box> 
    </Box>
  );
};

export default ClientInfo;
