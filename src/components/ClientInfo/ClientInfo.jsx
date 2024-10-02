import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

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
        sx={{
          width: "full",
        }}
      />
    </Box>
  );
};

export default ClientInfo;
