import { CssBaseline, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Album from "./components/Album";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container maxWidth="sm">
        <Hero />
        <Album />
      </Container>
    </>
  );
}

export default App;
