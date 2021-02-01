// import Helmet from "react-helmet";
import get from "lodash/get";

export default function SEO({ data }) {
    const contentBlocks = get(data, "content_blocks", [{ body: "" }]);
    const bodyFirstEl = get(contentBlocks, "[0].body");
    const pageTitleFull = get(data, "page_title_full");
    const titleFull = get(data, "title_full");
    const bodyDesc = bodyFirstEl || pageTitleFull || titleFull || "";
    const site_name = "Лофт";
    const defaultImage =
        "https://noreedge.ru/wp-content/uploads/2020/03/etazherka-bronks.jpg";
    const seoImage = get(data, "seo.og.image.src");
    const previewImage = get(data, "main_image_preview.src");
    const mobileImage = get(data, "main_image_mobile.src");
    const mainImage = get(data, "main_image.src");

    const ogImage =
        seoImage || previewImage || mobileImage || mainImage || defaultImage;

    const meta = [
        {
            name: "description",
            content: get(data, "seo.html.description", ""),
        },
        {
            name: "viewport",
            content: get(
                data,
                "seo.html.viewport",
                "width=device-width, initial-scale=1.0"
            ),
        },
        {
            name: "og:type",
            content: "website",
        },
        {
            property: "og:title",
            content: get(data, "seo.og.title", ""),
        },
        {
            property: "og:image",
            content: ogImage,
        },
        {
            property: "og:image:width",
            content: "1200",
        },
        {
            property: "og:image:height",
            content: "630",
        },
        {
            name: "twitter:title",
            content: get(data, "seo.og.title", ""),
        },
        {
            name: "twitter:image",
            content: ogImage,
        },
        {
            name: "twitter:card",
            content: "summary_large_image",
        },
        {
            property: "og:image:alt",
            content: get(data, "seo.og.title", ""),
        },
        {
            property: "og:description",
            content: get(
                data,
                "seo.og.description",
                bodyDesc.replace(/(<([^>]+)>)/g, "")
            ),
        },
        {
            property: "og:site_name",
            content: site_name,
        },
        {
            property: "og:url",
            content: get(
                data,
                "url",
                process.env.REACT_APP_BASE_FRONT_URL_CYRILLIC
            ),
        },
    ];
    const noindex = get(data, "seo.html.noindex", null);
    // eslint-disable-next-line no-unused-expressions
    noindex &&
        meta.push({
            property: "robots",
            content: noindex,
        });

    const keywords = get(data, "seo.html.keywords", null);
    // eslint-disable-next-line no-unused-expressions
    keywords &&
        meta.push({
            name: "keywords",
            content: keywords,
        });

    return (
        <Helmet
            htmlAttributes={{ lang: "ru" }}
            title={"Лофт"}
            defaultTitle={"Лофт"}
            titleTemplate={`%s | ${site_name}`}
            meta={meta}
        >
            <link
                rel="canonical"
                href={get(
                    data,
                    "siteUrl",
                    process.env.REACT_APP_BASE_FRONT_URL
                )}
            />
        </Helmet>
    );
}
