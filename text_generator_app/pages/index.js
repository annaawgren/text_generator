import Head from "next/head";
import HostedModel from "../components/HostedModel";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Text Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="w-full flex flex-row justify-between items-justify">
        <div>logo</div>
        <div>menu</div>
      </header>

      <main className="text-center">
        <div className="w-full h-96 bg-red-300">Illustration</div>
        <h1 className="text-4xl">Job Application Generator</h1>

        <HostedModel />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
