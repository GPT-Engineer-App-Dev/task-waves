import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  const Navbar = () => (
    <Flex bg="blue.500" color="white" p={3} align="center" wrap="wrap">
      <Box p="2" flexBasis={{ base: "100%", md: "auto" }}>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
      </Box>
      <Spacer />
      <Box p="2" flexBasis={{ base: "100%", md: "auto" }}>
        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
      </Box>
      <Box p="2" flexBasis={{ base: "100%", md: "auto" }}>
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
      </Box>
    </Flex>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;