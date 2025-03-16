import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@gmusic" />
          <meta name="twitter:creator" content="@gmusic" />
          <meta property="og:url" content="https://gmusicc.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="GMUSIC" />
          <link
            rel="icon"
            href="/img/logo0.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="How about listening to music without pausing? Create your own playlists with 750+ supported sound platforms and start listening."
          />
          <meta property="og:image" content="/img/logoo.png" />
          <meta property="og:image:alt" content="GMUSIC" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="GMUSIC"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/logoo.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
