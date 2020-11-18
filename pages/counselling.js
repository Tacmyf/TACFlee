import Undercons from "../components/Undercons";
import Layout from "../components/Layout";
import Head from "next/head";

function Counselling() {
  return (
    <>
      <Head>
        <title>Flee - Counselling</title>
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
        <Undercons></Undercons>
      </Layout>
    </>
  );
}

export default Counselling;
