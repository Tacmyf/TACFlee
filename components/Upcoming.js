import React, { useState, useEffect } from "react";
import { Center, Heading, useColorModeValue, Text, Box } from "@chakra-ui/core";
import Card from "../components/Card";
import firebase from "../firebase/firebase";
import Spinner from "../components/Spinner";

function Upcoming(props) {
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");
  const [ministry, setMinistry] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("ministry");
  function getMinistry() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setMinistry(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMinistry();
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }
  return (
    <>
      <Center>
        <Heading
          fontWeight="xbold"
          fontSize={["4xl", "4xl", "5xl", "5xl"]}
          mt={8}
          color={sbtn}
        >
          Ministry
        </Heading>
      </Center>
      <Text
        color={sbtn}
        lineHeight={"1em"}
        textAlign="center"
        fontFamily="heading"
        fontSize={["2xl", "3xl", "3xl", "3xl"]}
        fontWeight={600}
        mt={[2, 4, 8, 10]}
      >
        2021
      </Text>
      <Box
        w="100%"
        mt={[6, 8, 12, 12]}
        px={0}
        pb={["6rem", "6rem", "6rem", "8rem"]}
      >
        <Card min={ministry}></Card>
      </Box>
    </>
  );
}

export default Upcoming;
