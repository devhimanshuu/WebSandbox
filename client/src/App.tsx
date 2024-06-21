import "./App.css";
import Header from "./components/Header.js";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Compiler from "./pages/Compiler.js";
import NotFound from "./pages/NotFound.js";
import { ThemeProvider } from "./components/theme-provider.js";
function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
