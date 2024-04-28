import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Index from "./pages/Index.jsx";
import { Flex, Box, Spacer } from "@chakra-ui/react";

function App() {
  const Navbar = () => (
    <Flex bg="blue.500" color="white" p={3} align="center">
      <Box p="2">
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>About</Link>
      </Box>
      <Box p="2">
        <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>Contact</Link>
      </Box>
    </Flex>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;