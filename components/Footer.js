import {
  Center,
  useColorMode,
  useColorModeValue,
  Text,
  Link,
  Box,
} from "@chakra-ui/core";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";

function Footer() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");
  return (
    <Center pb={[10, 2, 1, 0]} marginTop={[10, 8, 6, 10]}>
      <Text
        color={color}
        fontSize="md"
        fontWeight="medium"
        fontFamily="heading"
      >
        Developed by TAC, MYF
      </Text>
      <Link href="https://www.instagram.com/myf.tac/" isExternal>
        <Box paddingLeft={1}>
          <GrInstagram size={"1rem"} color={color} />
        </Box>
      </Link>
      <Link href="https://www.facebook.com/myf.tac/" isExternal>
        <Box paddingLeft={1}>
          <GrFacebookOption size={"1rem"} color={color} />
        </Box>
      </Link>
    </Center>
  );
}

export default Footer;
