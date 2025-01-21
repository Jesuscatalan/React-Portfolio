import { Routes, Route, Outlet } from "react-router-dom";

import { Box, Container } from "@chakra-ui/react";

import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";

import Navbar from "./components/structures/Navbar";
import Footer from "./components/structures/Footer";

function Layout() {
  return (
    <Box 
      bg="gray.100" 
      minH="100vh" 
      py={10} 
      style={{
        fontFamily: "Lato", 
        backgroundImage: "url('https://cdn.pixabay.com/photo/2024/05/18/19/21/books-8770940_1280.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <Container maxW="container.lg">
        <Navbar />
        <Outlet />
        <Footer />
      </Container>
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Route>
    </Routes>
  );
}

export default App;