import Head from "next/head";

const MyHead = ({ title, meta }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={meta} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default MyHead;
