const {
  AspectRatio,
  Box,
  useColorMode,
  useColorModeValue,
  Text,
  Center,
  Heading,
} = require("@chakra-ui/core");

function Guide(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");
  const { ans, showAns, createMarkup, conv } = props;
  return (
    <>
      <Heading>{props.lang ? "Guidelines For Conducting Youth Bible Study" : "வாலிபர்கள் வேத ஆராய்ச்சியை நடத்துவதற்கான வழிகாட்டுதல்கள்"}</Heading>
      <Box
        my={[6, 8, 10, 12]}
        dangerouslySetInnerHTML={
          props.lang
            ? createMarkup(conv(props.article.descGuide[0]))
            : createMarkup(conv(props.article.descGuide[1]))
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
      <Heading>{props.lang ? "Conducting The MYF Youth Bible Study" : "வேத ஆராய்ச்சியை நடத்துவது"}</Heading>
      <Box
        my={[6, 8, 10, 12]}
        dangerouslySetInnerHTML={
          props.lang
            ? createMarkup(conv(props.article.descGuide2[0]))
            : createMarkup(conv(props.article.descGuide2[1]))
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
    </>
  );
}

export default Guide;
