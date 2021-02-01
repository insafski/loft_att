import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "../components/theme";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import '../styles/globals.css'
import '../styles/footer.scss'
import '../styles/header.scss'
import '../styles/main.scss'
import "../styles/page.scss";
import "../styles/instagram.scss";
import "../styles/bredcrumbs.scss";
import "../styles/product.scss";
import "../styles/carouesel.scss";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Head>
              <title>Loft</title>
              <meta
                  name="viewport"
                  content="minimum-scale=1, initial-scale=1, width=device-width"
              />
              <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
              />
              <link rel="preconnect" href="https://fonts.gstatic.com" />
              <link
                  rel="stylesheet"
                  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
              />
              <link
                  href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap"
                  rel="stylesheet"
              />
              <link
                  href="https://fonts.googleapis.com/css2?family=Lobster&family=Oswald:wght@300;400;500;700&display=swap"
                  rel="stylesheet"
              />
          </Head>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Component {...pageProps} />
          </ThemeProvider>
      </>
  );
}

export default MyApp
