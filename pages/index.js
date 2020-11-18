import {
  Heading,
  useColorModeValue,
  Image,
  Text,
  Box,
  Center,
  Flex,
} from "@chakra-ui/core";
import Layout from "../components/Layout";
import Link from "next/link";
import Head from "next/head";

function Index() {
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  const fleeClick = () => {
    console.log("flee clicked");
  };

  return (
    <>
      <Head>
        <title>Flee</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ET3VV11Y1F"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-ET3VV11Y1F');`,
          }}
        />
      </Head>
      <Layout>
        <Center mt={[0, 0, 14, 16]}>
          <Box
            display={{ base: "block", sm: "block", md: "block", lg: "flex" }}
            alignItems="center"
          >
            <Box>
              <Heading
                fontWeight="black"
                textAlign={["center", "center", "center", "left"]}
                fontSize={["4xl", "4xl", "5xl", "6xl"]}
                mt={10}
                color={sbtn}
              >
                Tamil Annual Conference
                <br />
                Methodist Youth Fellowship
              </Heading>
              <Flex pt={12} justify={["center", "center", "center", "left"]}>
                <Link href="/lesson">
                  <Box
                    onClick={fleeClick}
                    fontFamily="Poppins"
                    cursor="pointer"
                    fontWeight="bold"
                    fontSize="2xl"
                    w={["55%", "35%", "25%", "20%"]}
                    _hover={{ bg: btn }}
                    bg={btn}
                    color="#F8F8F8"
                    size="lg"
                    rounded={25}
                    pt={1}
                    pb={1}
                  >
                    <Center>
                      <Text>Flee</Text>
                    </Center>
                  </Box>
                </Link>
              </Flex>
            </Box>
            <Box
              ml={{ base: 0, sm: 0, md: 0, lg: 8 }}
              w={["100%", "100%", "100%", "50%"]}
              mt={{ base: 10, sm: 10, md: 0, lg: 8 }}
              pb={8}
            >
              <Image src={"./assets/home.svg"}></Image>
            </Box>
          </Box>
        </Center>
      </Layout>
    </>
  );
}

export default Index;
