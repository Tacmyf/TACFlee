import * as React from "react";
import Head from "next/head";
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/theme";
import firebase from "../firebase/firebase";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import ReactGA from "react-ga";
import "../styles/style.css";

const customTheme = {
  ...theme,
  colors: {
    btncom: {
      100: "#304FFF",
      200: "#302FFF",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semi: 600,
    bold: 700,
    xbold: 800,
    black: 900,
  },
};

function initializeReactGA() {
  ReactGA.initialize("G-E93FDQV62E");
  ReactGA.pageview("/");
}

function App({ Component, pageProps }) {
  console.log("Hello from APP");
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);
  initializeReactGA();
  const ref = firebase.firestore().collection("lessons");
  function getLesson() {
    setLoading(true);
    ref.get().then((item) => {
      const items = item.docs.map((doc) => doc.data());
      setLessons(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getLesson();
  }, []);

  if (loading) {
    return <Spinner></Spinner>;
  }

  return (
    <ChakraProvider theme={customTheme}>
      <ColorModeProvider>
        <Head>
          <title>Flee</title>
          <link rel="shortcut icon" href="./ico/icon-192x192.png" />
          <link rel="manifest" href="./manifest.json" />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-ET3VV11Y1F"
          ></script>
          <script>
            window.dataLayer = window.dataLayer || []; function gtag()
            {dataLayer.push(arguments)}
            gtag('js', new Date()); gtag('config', 'G-ET3VV11Y1F');
          </script>
        </Head>
        <Component {...pageProps} lessons={lessons} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
