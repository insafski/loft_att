// import SEO from "../SEO";

export function withPage(Component, seo) {
    return function () {
        return (
            <section className={"page-content"}>
                {/* <SEO data={seo} /> */}
                <Component />
            </section>
        );
    };
}
