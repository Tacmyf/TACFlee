const {
  AspectRatio,
  Box,
  useColorMode,
  useColorModeValue,
  Text,
  Image,
  Center,
  Heading,
  Container,
  Link,
  layout,
} = require("@chakra-ui/core");
import Authorinfo from "../components/Authorinfo";
import Langbtn from "../components/Langbtn";
import { useState, useEffect } from "react";
import showdown from "showdown";
import Footer from "../components/Footer";

function Articleempty(props) {
  const [lang, setLang] = useState(true);
  const [text, setText] = useState("");
  const [ans, setAns] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  function changeLang() {
    setLang(!lang);
  }

  useEffect(() => {
    const converter = new showdown.Converter();
    setText(converter.makeHtml(props.article.lessontext[0]));
  });

  function conv(text) {
    const regex = /\\n|\\r\\n|\\n\\r|\\r/g;
    const converter = new showdown.Converter();
    console.log(converter.makeHtml(text.replace(regex, "<br>")));
    return converter.makeHtml(text.replace(regex, "<br>"));
  }

  function createMarkup(text) {
    return {
      __html: text,
    };
  }

  const downloadLink =
    "https://firebasestorage.googleapis.com/v0/b/flee-1866b.appspot.com/o/IS%20ASSIGNMENT%202%20-%20MICHAEL.pdf?alt=media&token=01903882-71b1-4a6e-9785-b4bb4b352ba7";

  const downloadFile = () => {
    window.open(downloadLink);
  };

  const showAns = () => {
    setAns(!ans);
  };

  return (
    <Box my={[5, 8, 12, 16]}>
      <Container maxW="xl">
        <Heading my={4} fontFamily="heading">
          {lang ? props.article.maintitle[0] : props.article.maintitle[1]}
        </Heading>
        <Authorinfo
          name={
            lang ? props.article.author.name[0] : props.article.author.name[1]
          }
          lang={lang}
          img={props.article.author.image}
        ></Authorinfo>
        <Image
          mt={4}
          h={["xs", "sm", "md", "xl"]}
          w="100%"
          borderRadius="10px"
          objectFit="cover"
          src={props.article.coverimg}
        ></Image>
        <Box
          my={[6, 8, 10, 12]}
          dangerouslySetInnerHTML={
            lang
              ? createMarkup(conv(props.article.lessontext[0]))
              : createMarkup(conv(props.article.lessontext[1]))
          }
          style={
            lang
              ? {
                  textAlign: "justify",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  whiteSpace: "pre-line",
                  wordBreak: "break-word",
                }
              : {
                  textAlign: "justify",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  whiteSpace: "pre-line",
                  wordBreak: "break-word",
                }
          }
        ></Box>

        <Heading>{lang ? "Testimony Video" : "சாட்சி காணொளி"}</Heading>
        <AspectRatio my={8} ratio={16 / 9}>
          <iframe
            title="lesson"
            src={"https://www.youtube.com/embed/" + props.article.testimonylink}
            allowFullScreen
          />
        </AspectRatio>
        <Heading mb={4}>{lang ? "Questions" : "கேள்விகள்"}</Heading>
        <Box
          my={[6, 8, 10, 12]}
          dangerouslySetInnerHTML={
            lang
              ? createMarkup(conv(props.article.summarytext[0]))
              : createMarkup(conv(props.article.summarytext[1]))
          }
          style={
            lang
              ? {
                  textAlign: "justify",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  whiteSpace: "pre-line",
                  wordBreak: "break-word",
                }
              : {
                  textAlign: "justify",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  fontSize: "18px",
                  whiteSpace: "pre-line",
                  wordBreak: "break-word",
                }
          }
        ></Box>
        <Center>
          <Box
            fontFamily="Poppins"
            cursor="pointer"
            fontWeight="semi"
            fontSize="lg"
            _hover={{ bg: btn }}
            bg={btn}
            color="#F8F8F8"
            size="lg"
            rounded={25}
            px={3}
            pt={1}
            pb={1}
            onClick={showAns}
          >
            <Center>
              {ans ? (
                <Text>{lang ? "Close Leader's Guide" : "விடை திற"}</Text>
              ) : (
                <Text>{lang ? "Show Leader's Guide" : "விடை திற"}</Text>
              )}
            </Center>
          </Box>
        </Center>
        {!!ans && (
          <Box mt={6} mb={10}>
            <Heading mb={4}>{lang ? "Answers" : "விடைகள்"}</Heading>
            <Box
              my={[6, 8, 10, 12]}
              dangerouslySetInnerHTML={
                lang
                  ? createMarkup(conv(props.article.summarytext[0]))
                  : createMarkup(conv(props.article.summarytext[1]))
              }
              style={
                lang
                  ? {
                      textAlign: "justify",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "18px",
                      whiteSpace: "pre-line",
                      wordBreak: "break-word",
                    }
                  : {
                      textAlign: "justify",
                      fontFamily: "Poppins",
                      fontWeight: "500",
                      fontSize: "18px",
                      whiteSpace: "pre-line",
                      wordBreak: "break-word",
                    }
              }
            ></Box>
            <Center>
              <Box
                fontFamily="Poppins"
                cursor="pointer"
                fontWeight="semi"
                fontSize="lg"
                w={["55%", "35%", "25%", "20%"]}
                _hover={{ bg: btn }}
                bg={btn}
                color="#F8F8F8"
                size="lg"
                rounded={25}
                pt={1}
                pb={1}
              >
                <a href={"./islab.pdf"} download>
                <Center>
                  <Text>{lang ? "Download All" : "பதிவிறக்கம்"}</Text>
                </Center>
                </a>
              </Box>
            </Center>
          </Box>
        )}
      </Container>
      <Box
        position="fixed"
        bottom="0"
        right={"0"}
        mb={["2rem", "3rem", "3rem", "5rem"]}
        mr={["2rem", "3rem", "4rem", "8rem"]}
        onClick={changeLang}
      >
        <Langbtn colorval={btn} lang={lang}></Langbtn>
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default Articleempty;
