import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import MyContainer from "../../components/MyContainer";
import Breadcrumb from "../../components/breadcrumbs";
import PageTitle from "../../components/title";
import Layout from "../../components/layout";
import data from "../../data/index.json";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: "auto",
        maxWidth: 500,
    },
    image: {
        width: "100%",
        height: "100%",
    },
    img: {
        margin: "auto",
        display: "block",
        width: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
    },
}));

export default function Payment() {
    return (
        <Layout>
            {/* <PageImage
                items={[
                    {
                        url:
                            "https://www.livingspaces.com/globalassets/images/blog/2018/08/0829_furniture_delivery_featured_v3.jpg",
                        title: "Честная цена, прямо к вашей двери",
                    },
                ]}
            /> */}
            <MyContainer maxWidth={"md"} style={{ marginTop: 60 }}>
                <Breadcrumb />
            </MyContainer>
            <MyContainer
                maxWidth={"md"}
                sectionStyle={{
                    paddingBottom: 40,
                }}
                style={{
                    paddingBottom: 40,
                    boxShadow: "0px 0px 40px -10px #000",
                    background: "rgb(25,24,28)",
                    background:
                        "linear-gradient(90deg, rgba(25,24,28,1) 0%, rgba(35,35,35,1) 50%, rgba(25,24,28,1) 100%)",
                }}
            >
                <PayAndDelivery />
            </MyContainer>
            <MyContainer
                maxWidth={"md"}
                sectionStyle={{
                    paddingBottom: 40,
                }}
                style={{
                    paddingBottom: 40,
                    boxShadow: "0px 0px 40px -10px #000",
                    background: "rgb(25,24,28)",
                    background:
                        "linear-gradient(90deg, rgba(25,24,28,1) 0%, rgba(35,35,35,1) 50%, rgba(25,24,28,1) 100%)",
                }}
            >
                <Delivery />
            </MyContainer>
        </Layout>
    );
};

function PayAndDelivery() {
    const classes = useStyles();

    return (
        <div
            style={{
                paddingTop: 80,
                paddingBottom: 70,
                position: "relative",
            }}
            className={"sssss"}
        >
            {/* <PageTitle component={"h1"}>Оплата и доставка</PageTitle> */}

            <Grid container spacing={6} style={{ color: "#fff" }}>
                <Grid item xs={12} sm md={4}>
                    <img
                        className={classes.img}
                        alt="complex"
                        src="https://st.depositphotos.com/thumbs/1003821/image/5014/50144757/api_thumb_450.jpg"
                    />
                </Grid>

                <Grid item xs={12} sm md={5}>
                    <Typography
                        variant={"h6"}
                        classnames={"page__title"}
                        style={{
                            textAlign: "right",
                        }}
                    >
                        <span style={{ color: "#B87FD6" }}>КАК </span> ОПЛАТИТЬ?
                    </Typography>
                    <Typography
                        variant={"body1"}
                        classnames={"page__title"}
                        style={{
                            textAlign: "right",
                        }}
                    >
                        <span style={{ color: "#fff", marginTop: 16 }}>
                            Для вашего удобства предлагаем несколько способов
                            оплаты
                        </span>
                    </Typography>
                    <div
                        style={{
                            position: "relative",
                            width: "100%",
                            margin: "10px 0",
                            height: "3px",
                        }}
                    >
                        <div
                            style={{
                                width: "10%",
                                height: "100%",
                                borderRadius: "4px",
                                background: "#B87FD6",
                                position: "absolute",
                                right: 0,
                            }}
                        ></div>
                    </div>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                        }}
                    >
                        Для вашего удобства предлагаем несколько способов
                        оплаты. 
                        <br/>
                        Оплата наличными при получении. Только для
                        города Казань!
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                            paddingTop: 20,
                        }}
                    >
                        Оплата через онлайн-банк или приложение (Сбербанк
                        онлайн, Альфа-банк, Тинькофф, ВТБ и другие).
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                            paddingTop: 20,
                        }}
                    >
                        На расчетный счетп о реквизитам.
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

function Delivery() {
    const classes = useStyles();

    return (
        <div
            style={{
                paddingTop: 80,
                paddingBottom: 70,
                position: "relative",
            }}
            className={"sssssl"}
        >
            {/* <PageTitle component={"h1"}>Оплата и доставка</PageTitle> */}

            <Grid
                container
                spacing={6}
                style={{ color: "#fff" }}
            >
                <Grid item xs={12} sm md={3} />
                <Grid item xs={12} sm md={5}>
                    <Typography variant={"h6"} classnames={"page__title"}>
                        <span style={{ color: "#B87FD6" }}>ДОСТАВКА </span>
                    </Typography>
                    <Typography variant={"body1"} classnames={"page__title"}>
                        <span style={{ color: "#fff", marginTop: 16 }}>
                            Условия доставки
                        </span>
                    </Typography>
                    <div
                        style={{
                            width: "10%",
                            height: "3px",
                            borderRadius: "4px",
                            background: "#B87FD6",
                            margin: "10px 0",
                        }}
                    ></div>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                        }}
                    >
                        Доставка по городу Казань осуществляется ежедневно с
                        18:00 до 22:00 часов. Стоимость доставки от 500 рублей в
                        зависимости от размеров изделия.
                    </Typography>
                    <Typography variant={"body1"} classnames={"page__title"}>
                        <span style={{ color: "#fff", marginTop: 16 }}>
                            Доставки транспортными компаниями
                        </span>
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                            paddingTop: 20,
                        }}
                    >
                        Продукция Loft style life может быть доставлена в любой
                        город России. Мы осуществляем доставку с помощью
                        транспортной компании ПЭК, но вы также можете
                        воспользоваться услугами других транспортных компаний по
                        вашему выбору.
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                            paddingTop: 20,
                        }}
                    >
                        В стоимость доставки будет входить забор товара с нашей
                        мастерской и доставка до терминала. Стоимость доставки и
                        возможные дополнительные расходы полностью оплачиваются
                        получателем.
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                            paddingTop: 20,
                        }}
                    >
                        При приеме товара, доставленного силами транспортной
                        компании, необходимо тщательно проверить состояние его
                        упаковки, и, при необходимости, вскрыть упаковку в
                        присутствии представителя транспортной компании и
                        составить акт о наличии расхождений по количеству и/или
                        качеству груза.
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="body1"
                        align={"justify"}
                        style={{
                            color: "#838383",
                            paddingTop: 20,
                        }}
                    >
                        Переход права собственности, а также риск случайного
                        повреждения или гибели продукции происходит в момент
                        отгрузки Поставщиком продукции непосредственно Заказчику
                        или представителю Заказчика, или представителю
                        транспортной компании, осуществляющей услуги по
                        доставке.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm md={4}>
                    <img
                        className={classes.img}
                        alt="complex"
                        // src="https://i.pinimg.com/originals/28/0e/fc/280efcd44a10a61e523fb3d5045c3cb1.jpg"
                        src="https://st3.depositphotos.com/thumbs/1649893/image/12819/128193588/api_thumb_450.jpg"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const pageSeo = await data.pagesSeo["payment"];

    // Pass post data to the page via props
    return { props: { pageSeo } };
}