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
} = require("@chakra-ui/core");
import Layout from "../components/Layout";
import Articleempty from "../components/Articleempty";
import Undercons from "../components/Undercons";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Spinner from "../components/Spinner";
import showdown from "showdown";

function Article(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const slug = router.query.lesson;

  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  const checkLesson = (check) => {
    if (check.slug === slug) {
      return check;
    }
  };

  function getLesson() {
    setLoading(true);
    const idx = props.lessons.findIndex(checkLesson);
    setArticle(props.lessons[idx]);
    setLoading(false);
  }

  useEffect(() => {
    getLesson();
  }, {});

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <Layout>
      {article ? (
        <Articleempty article={article}></Articleempty>
      ) : (
        <Undercons></Undercons>
      )}
    </Layout>
  );
}

export default Article;
