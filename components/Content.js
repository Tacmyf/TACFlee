const {
  AspectRatio,
  Box,
  useColorMode,
  useColorModeValue,
  Text,
  Center,
  Heading,
} = require("@chakra-ui/core");

function Content(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");
  const { ans, showAns, createMarkup, conv } = props;

  const pdf = "./" + props.article.slug + ".pdf"

  return (
    <>
      {!!props.article.testimonylink && (
        <>
          <Heading>{props.lang ? "Testimony Video" : "சாட்சி காணொளி"}</Heading>
          <AspectRatio my={8} ratio={16 / 9}>
            <iframe
              title="lesson"
              src={
                "https://www.youtube.com/embed/" + props.article.testimonylink
              }
              allowFullScreen
            />
          </AspectRatio>
        </>
      )}
      <Heading>{props.lang ? "Questions" : "கேள்விகள்"}</Heading>
      <Box
        mb={[4, 8, 10, 12]}
        dangerouslySetInnerHTML={
          props.lang
            ? createMarkup(conv(props.article?.question[0] ?? ""))
            : createMarkup(conv(props.article?.question[1] ?? ""))
        }
        style={
          props.lang
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
      {!!props.article.answer && (
        <>
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
                  <Text>
                    {props.lang ? "Close Leader's Guide" : "விடை மறை"}
                  </Text>
                ) : (
                  <Text>{props.lang ? "Show Leader's Guide" : "விடை திற"}</Text>
                )}
              </Center>
            </Box>
          </Center>
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
              mt={5}
              pt={1}
              pb={1}
            >
              <a href={pdf} download>
                <Center>
                  <Text>{props.lang ? "Download All" : "பதிவிறக்கம்"}</Text>
                </Center>
              </a>
            </Box>
          </Center>
          {!!ans && (
            <Box mt={6} mb={10}>
              <Heading>{props.lang ? "Answers" : "விடைகள்"}</Heading>
              <Box
                mb={[6, 8, 10, 12]}
                dangerouslySetInnerHTML={
                  props.lang
                    ? createMarkup(conv(props.article.answer[0]))
                    : createMarkup(conv(props.article.answer[1]))
                }
                style={
                  props.lang
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
            </Box>
          )}
        </>
      )}
    </>
  );
}

export default Content;
