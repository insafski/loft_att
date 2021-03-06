import MyContainer from "../components/MyContainer";
import Layout from "../components/layout";
import PageImage from "../components/pageImage";
import SimpleParallax from "../components/parallax";
import WhyUs from  "../components/whyUs";
import Instagram from "../components/instagram"; 
import Mission from "../components/mission";

import data from "../data/index.json";

export default function Home() {
    return (
        <Layout>
            <>
                <PageImage
                    items={[
                        {
                            url:
                                "https://static.wixstatic.com/media/e2f9fe_6e4f08416e36478989b3649d67a650d4~mv2_d_5333_3993_s_4_2.jpg/v1/fill/w_2880,h_1530,al_c,q_90,usm_0.66_1.00_0.01/e2f9fe_6e4f08416e36478989b3649d67a650d4~mv2_d_5333_3993_s_4_2.webp",
                            title:
                                "Мебель высшего качества, выполненная в стиле лофт из массива дерева и металла",
                            styles: { backgroundPosition: "0 40%" },
                        },
                        {
                            url:
                                "https://design-homes.ru/images/galery/1822/kukhnya-v-stile-loft_5d40f23a55ea7.jpg",
                            title:
                                "Окунись в мир лофт вместе с мебелью созданную под ваш интерьер",
                            styles: { backgroundPosition: "0 40%" },
                        },
                    ]}
                />
                <MyContainer maxWidth={"md"} className={"main-page"}>
                    <SimpleParallax />
                </MyContainer>
                <MyContainer maxWidth={"md"} className={"main-page"}>
                    <WhyUs />
                </MyContainer>
                <MyContainer maxWidth={"md"} className={"main-page"}>
                    <Instagram />
                </MyContainer>
                <Mission />
            </>
        </Layout>
    );
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const pageSeo = await data.pagesSeo["index"];

    // Pass post data to the page via props
    return { props: { pageSeo } };
}