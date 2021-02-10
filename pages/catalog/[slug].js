
import { Fragment } from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

import MyContainer from "../../components/MyContainer";
import Layout from "../../components/layout";
import PageImage from "../../components/pageImage";
import Breadcrumb from "../../components/breadcrumbs";
import { CarouselGallery } from "../../components/carousel";
import ModalForm from "../../components/modal";

// import dr from "../../images/drovnica.jpg";

import data from "../../data/index.json";

export default function Product({ product }) {

    const {
        title = "",
        price = "",
        salePrice = "",
        saleText = "",
        salePercent = "",
        availability = "Под заказ",
        buildTime = "Сроки изготовления уточняйте по телефону",
        materials = "",
        sizes = "",
        colors = [],
        description = "",
        seoDescription = "",
        catalog = []
    } = product;

    return (
        <Layout>
            <PageImage
                url={
                    "https://design-homes.ru/images/galery/1822/kukhnya-v-stile-loft_5d40f23a55ea7.jpg"
                }
                title={"Каталог"}
            />
            <MyContainer
                maxWidth={"md"}
                style={{
                    marginTop: 100,
                }}
            >
                <Breadcrumb />

                <Grid
                    container
                    spacing={3}
                    itemType="http://schema.org/Product"
                    itemScope
                >
                    <meta itemProp="name" content={title} />
                    <link
                        itemProp="image"
                        // href={get(productParams, "catalog[0].src", "")}
                    />
                    <meta itemProp="description" content={seoDescription} />

                    <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>
                        <Hidden smUp>
                            <Typography
                                component={"h1"}
                                variant={"h4"}
                                style={{
                                    textAlign: "center",
                                    color: "#2a3e53",
                                    marginBottom: 24,
                                }}
                            >
                                {title}
                            </Typography>
                        </Hidden>
                        <CarouselGallery
                            items={
                                // product === "wood-racks"
                                //     ? [
                                //           { src: dr, title: "Дровница" },
                                //           ...get(productParams, "catalog", []),
                                //       ]
                                catalog
                            }
                            salePercent={salePercent}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Hidden smDown>
                            <Typography
                                component={"h1"}
                                variant={"h4"}
                                style={{
                                    textAlign: "center",
                                    color: "#2a3e53",
                                }}
                            >
                                {title}
                            </Typography>
                        </Hidden>

                        {/* <Typography
                            variant={"subtitle1"}
                            color="textSecondary"
                            style={{
                                letterSpacing: "1px",
                            }}
                        >
                            Цена:
                        </Typography> */}
                        <br />
                        <Grid container justify={"space-between"}>
                            <Grid
                                item
                                itemProp="offers"
                                itemType="http://schema.org/Offer"
                                itemScope
                            >
                                <meta itemProp="priceCurrency" content="RUB" />
                                <meta itemProp="price" content={price} />
                                {/* <meta
                                    itemProp="priceValidUntil"
                                    content="2021-02-20"
                                /> */}

                                <Typography
                                    variant={"h5"}
                                    component={"span"}
                                    style={{
                                        color: "rgb(115, 65, 196)",
                                    }}
                                    x
                                >
                                    {price
                                        ? `от ${price} ₽`
                                        : "Уточните по телефону"}
                                </Typography>
                                {salePrice && (
                                    <Typography
                                        variant={"body2"}
                                        component={"span"}
                                        style={{
                                            marginLeft: 16,
                                            textDecoration: "line-through",
                                        }}
                                    >
                                        {`${salePrice}₽`}
                                    </Typography>
                                )}
                            </Grid>
                            <Grid item>
                                {saleText && (
                                    <Typography
                                        variant={"h5"}
                                        style={{
                                            letterSpacing: "1px",
                                            color: "rgb(115, 65, 196)",
                                        }}
                                    >
                                        {saleText}
                                    </Typography>
                                )}
                            </Grid>
                        </Grid>
                        <br />
                        <Divider />
                        <br />
                        {/* <Typography
                            variant={"subtitle1"}
                            color="textSecondary"
                            style={{
                                letterSpacing: "1px",
                            }}
                        >
                            Наличие:
                        </Typography> */}
                        <Grid container justify={"space-between"}>
                            <Grid item>
                                <Typography
                                    component={"span"}
                                    style={{
                                        letterSpacing: "1px",
                                    }}
                                >
                                    {`${availability} ${buildTime}`}
                                </Typography>
                            </Grid>
                        </Grid>
                        {(materials || sizes) && (
                            <>
                                <br />
                                <Divider />
                                <br />
                                {/* <Typography
                                    variant={"subtitle1"}
                                    color="textSecondary"
                                    style={{
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Характеристики:
                                </Typography> */}
                                <Grid container>
                                    <Grid item>
                                        <ul className={"product__character"}>
                                            <li key={1}>
                                                <span>{materials}</span>
                                            </li>
                                            <li key={2}>
                                                {`Размеры: `}
                                                {sizes.length ? (
                                                    <Sizes items={sizes} />
                                                ) : (
                                                    "По индивидуальным размерам"
                                                )}
                                            </li>
                                        </ul>
                                    </Grid>
                                </Grid>
                            </>
                        )}

                        <span
                            style={{
                                fontSize: "0.7rem",
                                color: "rgba(0, 0, 0, 0.54)",
                            }}
                        >
                            *Вы всегда можете заказать подходящийц именно Вам
                            размер изделия.
                        </span>
                        {!!colors.length && (
                            <>
                                <br />
                                <Divider />
                                <Typography
                                    variant={"subtitle1"}
                                    color="textSecondary"
                                    style={{
                                        letterSpacing: "1px",
                                    }}
                                >
                                    Доступные цвета металла:
                                </Typography>
                                <br />
                                <Grid container spacing={3}>
                                    {colors.map((color, idx) => (
                                        <Grid item key={idx}>
                                            <div className={"color-block"}>
                                                <div
                                                    className={`color-block__${color}`}
                                                />
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>
                            </>
                        )}
                        <br />
                        <Divider />
                        <br />
                        <Grid container justify={"center"}>
                            <Grid item>
                                {typeof window !== "undefined" && <ModalForm />}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <br />
                <Divider light />

                {description && (
                    <Grid container spacing={3}>
                        <Grid item>
                            <h4>Информация о товаре</h4>
                            <Typography
                                align={"justify"}
                                variant={"body1"}
                                style={{ letterSpacing: 1 }}
                            >
                                Простая и лаконичная парта Брикс станет удобным
                                уголком для размышлений. Столешница из массива
                                дуба выполнена в оптимальных размерах – Вы
                                сможете разместить на рабочей поверхности все
                                необходимые предметы. За таким письменным
                                столом, выполненном в стиле лофт, можно
                                расположиться с комфортом как для работы за
                                компьютером, так и для выполнения домашних
                                заданий.
                            </Typography>
                            <br />
                            <Divider />
                            <br />

                            <Typography
                                align={"justify"}
                                variant={"body1"}
                                style={{ letterSpacing: 1 }}
                            >
                                В трех ящиках с габаритами 30х55х16см поместятся
                                нужные под рукой бумаги и аксессуары.
                                Оригинальный дизайн с металлическим основанием
                                из профильной трубы 20 х 20 мм позволяет вписать
                                этот стол практически в любой интерьер.
                                Деревянные элементы стола тонируются итальянским
                                маслом, сохраняющим и подчеркивающим природную
                                структуру дерева. В нашей палитре представлены
                                сдержанные нейтральные цвета, темные и светлые
                                оттенки, чтобы каждый смог найти для себя
                                подходящий вариант. Винтажная парта Брикс в
                                модном индустриальном исполнении подойдет для
                                небольших комнат. Благодаря надежной и крепкой
                                конструкции она прослужит десятки лет.
                            </Typography>
                            <br />
                        </Grid>
                    </Grid>
                )}
            </MyContainer>
        </Layout>
    );
};

function Sizes({ items }) {
    return (
        <>
            {items.map(({ size, title }, idx) => (
                <Fragment key={idx}>
                    <Tooltip
                        title={title}
                        placement="top"
                        TransitionComponent={Zoom}
                    >
                        <span>{size}</span>
                    </Tooltip>
                    {idx !== items.length - 1 ? "x" : ""}
                </Fragment>
            ))}
        </>
    );
}


export async function getStaticPaths() {
    const paths = data.catalogPages.map((category) => {
        return {
            params: {
                slug: category,
            },
        };
    });

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const product = await data.catalog[params.slug];

    const pageSeo = await data.pagesSeo[params.slug];

    // Pass post data to the page via props
    return { props: { product, pageSeo } };
}