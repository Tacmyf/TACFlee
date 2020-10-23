import {
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
  Image,
  VStack,
  Text,
  Box,
  Center,
  Container,
  Flex,
  Icon,
} from "@chakra-ui/core";
import Layout from "../components/Layout";
import Link from "next/link";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

function Contact() {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  return (
    <Layout>
      <Center>
        <Heading
          fontWeight="xbold"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          mt={8}
          color={sbtn}
        >
          Contact Us
        </Heading>
      </Center>
      <Center mt={[0, 0, 14, 16]}>
        <Box
          display={{ base: "block", sm: "block", md: "block", lg: "flex" }}
          alignItems="center"
        >
          <Box>
            <Center>
              <Box>
                <Flex display="block">
                  <Heading
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["2xl", "2xl", "4xl", "4xl"]}
                    mt={5}
                    color={sbtn}
                  >
                    TAC Director of Youth Work
                  </Heading>
                  <Heading
                    fontSize="2xl"
                    fontWeight="semi"
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["2xl", "2xl", "4xl", "4xl"]}
                    mt={2}
                    color={sbtn}
                  >
                    Rev Timothy Raj
                  </Heading>
                </Flex>
                <Flex display="block">
                  <Heading
                    fontSize="2xl"
                    fontWeight="bold"
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["2xl", "2xl", "4xl", "4xl"]}
                    mt={10}
                    color={sbtn}
                  >
                    TAC Methodist Youth Fellowship President
                  </Heading>
                  <Heading
                    fontSize="2xl"
                    fontWeight="semi"
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["2xl", "2xl", "4xl", "4xl"]}
                    mt={2}
                    color={sbtn}
                  >
                    Mr. Josiah Inbaraj
                  </Heading>
                </Flex>
                <Box>
                  <Heading
                    fontWeight="semi"
                    textAlign={["center", "center", "center", "left"]}
                    fontSize={["xl", "xl", "2xl", "2xl"]}
                    mt={10}
                    color={sbtn}
                  >
                    Follow Us On
                  </Heading>
                </Box>
              </Box>
            </Center>
            <Flex pt={3} justify={["center", "center", "center", "left"]}>
              <a href="https://www.instagram.com/myf.tac/" target="_blank">
                <Box paddingRight={3}>
                  <GrInstagram size={20} color={sbtn} />
                </Box>
              </a>
              <a href="https://www.facebook.com/myf.tac/" target="_blank">
              <Box paddingLeft={3}>
                <GrFacebookOption size={20} color={sbtn} />
                </Box>
              </a>
            </Flex>
          </Box>
          <Box
            ml={{ base: 0, sm: 0, md: 0, lg: 8 }}
            w={["100%", "100%", "100%", "50%"]}
            mt={{ base: 10, sm: 10, md: 0, lg: 8 }}
            pb={8}
          >
            <Image src={"./assets/contact.svg"}></Image>
          </Box>
        </Box>
      </Center>
    </Layout>
  );
}

export default Contact;
