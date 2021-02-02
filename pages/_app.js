import { useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import get from "lodash/get";

import Router from "next/router";
import withYM from "next-ym";

import theme from "../components/theme";
import { yaMetrika } from "../utils";

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

    useEffect(() => {
        if (process.env.NODE_ENV !== "development") {
            console.log("prod")
			yaMetrika();
		}
    }, []);

    const pageSeo = get(pageProps, "pageSeo", {});

    const siteName = "Loft style life";
    const seoTitle = get(pageSeo, "title", "");
    const defaultImage =
        "https://noreedge.ru/wp-content/uploads/2020/03/etazherka-bronks.jpg";

    const currentPageUrl = get(pageSeo, "path", "");
    const description = get(pageSeo, "description", "");
    const keywords = get(pageSeo, "keywords", null);

    const image = get(pageSeo, "image", defaultImage);
    const imageAlt = get(pageSeo, "imageAlt", null);
    const noindex = get(pageSeo, "noindex", null);

    const title = (seoTitle ? seoTitle + ` | ` : "") + siteName;
    const url = `${process.env.NEXT_PUBLIC_BASE_FRONT_URL}${currentPageUrl}`;

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="canonical" href={url} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:image" content={image} />
                <meta property="og:type" content={"website"} />
                <meta property="og:site_name" content={siteName} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:image:alt" content={imageAlt} />
                <meta property="og:image:width" content={600} />
                <meta property="og:image:height" content={600} />
                <meta property="og:url" content={url} />
                {noindex && <link property="robots" content={noindex} />}
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

export default withYM("71141620", Router)(MyApp);
