import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HostedModelSection from "../components/HostedModelSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Text Generator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="text-center w-full fixed top-20">
        <h1 className="text-green text-sm ">
          DR<span className="text-red">ai</span>KE JOB RAPPLICATION
        </h1>
      </div>
      <Hero />

      <HostedModelSection />

      <Footer />

      <style jsx global>{`
        html,
        body {
          background: #efdecd;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        p,
        h1,
        h2,
        h3,
        button {
          font-family: "Press Start 2P", cursive;
        }
      `}</style>
    </div>
  );
}
