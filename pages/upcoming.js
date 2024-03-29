import Upcoming from "../components/Upcoming";
import Layout from "../components/Layout";
import Head from "next/head";

function UpcomingEvent() {
  return (
    <>
      <Head>
        <title>Flee - Upcoming</title>
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
      <>
        <Upcoming></Upcoming>
      </>
    </>
  );
}

export default UpcomingEvent;
