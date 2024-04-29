import { Link } from "react-router-dom";
import { Flex, Box, Spacer } from "@chakra-ui/react";
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;