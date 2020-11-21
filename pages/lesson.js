import {
  Heading,
  useColorMode,
  useColorModeValue,
  HStack,
  Center,
} from "@chakra-ui/core";
import Head from "next/head";
import Layout from "../components/Layout";
import Boximage from "../components/Boximage";
import { useState } from "react";

function Lesson(props) {
  const sbtn = useColorModeValue("#F8F8F8", "#304FFF");

  const lessonClick = (msg) => {
    console.log("lesson is clicked");
  };

  return (
    <>
      <Head>
        <title>Flee - Bible Study</title>
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
            <a
              href={"article?lesson=" + lesson.slug}
              onClick={lessonClick(lesson.slug + "_is_clicked")}
            >
              <Boximage
                key={id}
                id={id}
                link={lesson.slug}
                imageUrl={lesson.coverimg}
                title={lesson.lessontitle}
                colorval={sbtn}
              ></Boximage>
            </a>
          ))}
        </HStack>
      </Layout>
    </>
  );
}

export default Lesson;
