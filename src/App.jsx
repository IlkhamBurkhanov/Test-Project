import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

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
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
