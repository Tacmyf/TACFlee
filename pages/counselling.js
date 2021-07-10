import Undercons from "../components/Undercons";
import Pandemicadvice from "../components/Pandemicadvice";
import Layout from "../components/Layout";
import Head from "next/head";

function Counselling() {
  const contentCheck = true;

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
      <Layout>{contentCheck ? <Pandemicadvice /> : <Undercons />}</Layout>
    </>
  );
}

export default Counselling;
