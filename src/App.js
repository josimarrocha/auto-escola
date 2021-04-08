import Home from "components/pages/Home";
import ThemeProvider from "styles/ThemeProvider";
import GlobalStyles from "styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
