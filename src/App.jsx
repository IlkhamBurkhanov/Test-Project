import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Main from "./components/Main/Main";
import "./index.css";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
