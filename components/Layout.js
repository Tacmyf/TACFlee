import { Button, Heading, useColorMode, useColorModeValue, Wrap, IconButton, Box, Center, Container, Flex } from "@chakra-ui/core"
import Navbar from "../components/Navbar"

function Layout(props) {
    const { colorMode, toggleColorMode } = useColorMode()

    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const btn = "#304FFF"
    return (
        <Box
            bg={bg}
            color={color}
            minHeight="100vh"
        >
            <Navbar></Navbar>
            <Center>
                <Box w={["90%", "90%", "70%", "80%"]}>
                    {props.children}
                </Box>
            </Center>
        </Box>
    )
}

export default Layout