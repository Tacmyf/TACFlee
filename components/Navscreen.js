import {Center, Text, Box, VStack, useColorMode, useColorModeValue} from "@chakra-ui/core"
import Linkpage from "../components/Linkpage"
import Link from "next/link"

function Navscreen() {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue("#00102A", "#F8F8F8")
    const color = useColorModeValue("#F8F8F8", "#00102A")
    const sbtn = useColorModeValue("#F8F8F8", "#304FFF")
    const navclr = useColorModeValue("rgba(0, 16, 42, 0.9)", "rgba(248, 248, 248, 0.9)")
    return (
        <Center minH="100vh" position="fixed" w="100vw" bg={navclr}>
            <Box justify="center" mb="200px">
                <VStack>
                    <Linkpage page={"/"} name={"Home"} color={sbtn}></Linkpage>
                    <Linkpage page={"/lesson"} name={"Bible Study"} color={sbtn}></Linkpage>
                    <Linkpage page={"/ministry"} name={"Ministry"} color={sbtn}></Linkpage>
                    <Linkpage page={"/counselling"} name={"Counselling"} color={sbtn}></Linkpage>
                    <Linkpage page={"/contact"} name={"Contact"} color={sbtn}></Linkpage>
                </VStack>
            </Box>
        </Center>
    )
}

export default Navscreen