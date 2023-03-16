import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  return (
    <Html className="antialiased min-h-screen bg-zinc-50 dark:bg-black">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
      </Head>
      <body className="dark:bg-zinc-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
