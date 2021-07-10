import { useColorModeValue, Box, Center } from "@chakra-ui/core";
import Navbar from "../components/Navbar";

function Layout(props) {
  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  return (
    <Box bg={bg} color={color} minHeight="100vh">
      <Navbar></Navbar>
      <Center pt={[16, 16, 12, 12]}>
        <Box w={["90%", "90%", "70%", "80%"]}>{props.children}</Box>
      </Center>
    </Box>
  );
}

export default Layout;
