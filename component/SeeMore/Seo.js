import Head from "next/head";

function Seo({ Title, Desc }) {
  return (
    <Head>
      <title>{Title}</title>
      <meta
        name="description"
        content={Desc}/>
    </Head>
  );
}

export default Seo;
