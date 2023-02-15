import React from "react";
// Next
import Head from "next/head";

interface MetaInterface {
  title?: string;
  keywords?: string;
  description?: string;
}

const Meta: React.FC<MetaInterface> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Web Dev News",
  keywords: "web development, programming",
  description: "Get the latest news in Web Dev.",
};

export default Meta;
