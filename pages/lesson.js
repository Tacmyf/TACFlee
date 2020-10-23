import {
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
  Wrap,
  IconButton,
  Box,
  Stack,
  HStack,
  VStack,
  Container,
  Flex,
  Center,
} from "@chakra-ui/core";
import Layout from "../components/Layout";
import Boximage from "../components/Boximage";
// import firebase from "../firebase/firebase"
import { useState, useEffect } from "react";
import Footer from "../components/Footer";

function Lesson(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  // const ref = firebase.firestore().collection("lessons")

  const bg = useColorModeValue("#00102A", "#F8F8F8");
  const color = useColorModeValue("#F8F8F8", "#00102A");
  const btn = "#304FFF";
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  // function getLesson() {
  //     setLoading(true)
  //     ref.get().then((item) => {
  //         const items = item.docs.map((doc) => doc.data())
  //         setLessons(items)
  //         setLoading(false)
  //     })
  // }

  // useEffect(() => {
  //     getLesson()
  // }, [])

  // if (loading) {
  //     return <Spinner></Spinner>
  // }

  return (
    <Layout>
      <Center>
        <Heading
          fontWeight="xbold"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          mt={8}
          color={sbtn}
        >
          Bible Study
        </Heading>
      </Center>
      <HStack overflowX="scroll" spacing="24px" py={8} mb={12}>
        {props.lessons.map((lesson, id) => (
          <Boximage
            key={id}
            link={lesson.slug}
            imageUrl={lesson.coverimg}
            title={lesson.lessontitle}
            colorval={sbtn}
          ></Boximage>
        ))}
      </HStack>
    </Layout>
  );
}

export default Lesson;
