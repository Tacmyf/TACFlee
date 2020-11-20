import * as React from "react";
import Head from "next/head";
import { ChakraProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/theme";
import firebase from "../firebase/firebase";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
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

function App({ Component, pageProps }) {
  console.log("Hello from APP");
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

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
          <link rel="shortcut icon" href="./ico/icon-192x192.png" />
          <link rel="apple-touch-icon" href="/example.png"></link>
          <meta name="theme-color" content="#F8F8F8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
          <link rel="manifest" href="./manifest.json" />
        </Head>
        <Component {...pageProps} lessons={lessons} />
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
