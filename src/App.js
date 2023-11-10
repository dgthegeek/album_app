import { CssBaseline, Container } from "@mui/material";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Album from "./components/Album";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Container >
        <Hero />
        <Album />
        <Footer/>
      </Container>
    </>
  );
}

export default App;
