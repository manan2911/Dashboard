import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="content">
          <Topbar />
        </main>
        <div className="app"></div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
