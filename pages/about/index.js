import Link from "next/link";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

import MyContainer from "../../components/MyContainer";
import Breadcrumb from "../../components/breadcrumbs";
import PageImage from "../../components/pageImage";
import PageTitle from "../../components/title";
import Layout from "../../components/layout";
import ModalForm, { ModalForm2 } from "../../components/modal";

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

export default function About() {
    return (
        <Layout>
            <PageImage
                items={[
                    {
                        url:
                            "https://i.pinimg.com/originals/75/87/32/758732e388f321b12907aba054a42e87.jpg",
                        title: "Мебель сделанная вручную",
                    },
                ]}
            />
            <MyContainer maxWidth={"md"}>
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
                <AboutUsBlock />
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
                <Instruments />
            </MyContainer>

            <MyContainer
                sectionStyle={{
                    paddingBottom: 40,
                }}
                maxWidth={"md"}
                style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                    boxShadow: "0px 0px 40px -10px #000",
                    background: "rgb(25,24,28)",
                    background:
                        "linear-gradient(90deg, rgba(25,24,28,1) 0%, rgba(35,35,35,1) 50%, rgba(25,24,28,1) 100%)",
                }}
            >
                <HowItsMade />
            </MyContainer>
            <MyContainer
                sectionStyle={{
                    paddingBottom: 40,
                }}
                maxWidth={"md"}
                style={{
                    paddingTop: 40,
                    paddingBottom: 40,
                    boxShadow: "0px 0px 40px -10px #000",
                    background: "rgb(25,24,28)",
                    background:
                        "linear-gradient(90deg, rgba(25,24,28,1) 0%, rgba(35,35,35,1) 50%, rgba(25,24,28,1) 100%)",
                }}
            >
                {/* <Contacts /> */}
                <ModalForm2 />
            </MyContainer>
        </Layout>
    );
};

function AboutUsBlock() {
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
            <Grid container spacing={6} style={{ color: "#fff" }}>
                <Grid item xs={12} sm md={4}>
                    <img
                        className={classes.img}
                        alt="complex"
                        // src="https://i.pinimg.com/originals/28/0e/fc/280efcd44a10a61e523fb3d5045c3cb1.jpg"
                        src="https://st2.depositphotos.com/thumbs/1067336/image/9023/90237460/api_thumb_450.jpg"
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
                        <span style={{ color: "#B87FD6" }}>КАК МЫ </span>{" "}
                        РАБОТАЕМ
                    </Typography>
                    <Typography
                        variant={"body1"}
                        classnames={"page__title"}
                        style={{
                            textAlign: "right",
                        }}
                    >
                        <span style={{ color: "#fff", marginTop: 16 }}>
                            Мы работаем в формате мастерской{" "}
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
                        Каждый предмет мебели здесь изготавливается вручную, в
                        процессе совместного творчества с заказчиком. Мы
                        производим качественную и оригинальную мебель в стиле
                        лофт по Вашим индивидуальным заказам.
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
                        Отсюда мы отправляем Ваш заказ в любую точку нашей
                        необъятной страны. Наша миссия – изготовление
                        качественной, стильной и надежной мебели в стиле лофт
                        доступной каждому. Ради этого мы готовы работать без
                        выходных и даже по ночам!
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

function Instruments() {
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
            <Grid container spacing={6} style={{ color: "#fff" }}>
                <Grid item sm md={3} />
                <Grid item xs={12} sm md={5}>
                    <Typography variant={"h6"} classnames={"page__title"}>
                        <span style={{ color: "#B87FD6" }}>
                            КАКИЕ ИНСТРУМЕНТЫ{" "}
                        </span>{" "}
                        ИСПОЛЬЗУЕМ
                    </Typography>
                    <Typography variant={"body1"} classnames={"page__title"}>
                        <span style={{ color: "#fff", marginTop: 16 }}>
                            Профессиональные оборудования
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
                        Сварные швы выполненные на профессиональном сварочном полуавтомате обкспечивают качественное и 
                        надежное соединение элементов будущих изделий, сохраняя предельно допустимую нагрузки до 140 кг.
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
                    </Typography>
                </Grid>
                <Grid item xs={12} sm md={4}>
                    <img
                        className={classes.img}
                        alt="complex"
                        // src="https://i.pinimg.com/originals/28/0e/fc/280efcd44a10a61e523fb3d5045c3cb1.jpg"
                        src="https://st4.depositphotos.com/13324256/21708/i/1600/depositphotos_217080760-stock-photo-focused-welder-protection-mask-brazing.jpg"
                    />
                </Grid>
            </Grid>
        </div>
    );
}

function HowItsMade() {
    const classes = useStyles();

    return (
        <div style={{ paddingTop: 40, position: "relative" }}>
            <Grid container spacing={6} style={{ color: "#fff" }}>
                <Grid item xs={12}>
                    <Typography variant={"h6"} classnames={"page__title"}>
                        <span style={{ color: "#B87FD6" }}>КАК МЫ ЭТО </span>{" "}
                        ДЕЛАЕМ
                    </Typography>
                    <Typography variant={"body1"} classnames={"page__title"}>
                        <span style={{ color: "#fff", marginTop: 16 }}>
                            Только качественные материалы
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
                        variant={"body1"}
                        align={"justify"}
                        style={{ marginTop: 24, color: "#838383" }}
                    >
                        Основные материалы, которые мы используем, – это
                        металлический профиль разных сечений и натуральный
                        массив дерева: сосна, дуб, карагач, бук. Мастера,
                        работающие у нас – настоящие асы своего дела, способные
                        выполнить работу по индивидуальным заказам и в
                        кратчайший срок.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid
                        container
                        spacing={6}
                        style={{ color: "#fff" }}
                        justify={"center"}
                    >
                        <Grid item xs={3}>
                            <img
                                className={classes.img}
                                style={{
                                    borderRadius: "50%",
                                }}
                                alt="complex"
                                // src="https://i.pinimg.com/originals/28/0e/fc/280efcd44a10a61e523fb3d5045c3cb1.jpg"
                                src="https://static5.depositphotos.com/thumbs/1054850/image/513/5136232/api_thumb_450.jpg"
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <img
                                className={classes.img}
                                style={{
                                    borderRadius: "50%",
                                }}
                                alt="complex"
                                // src="https://i.pinimg.com/originals/28/0e/fc/280efcd44a10a61e523fb3d5045c3cb1.jpg"
                                src="https://photogenica.ru/preview-DP.php?directZoom=OWxISGh5TW9NeGRua2NTWndmbVA0aElia0VyeVNyUm5kYlFmVDNqcmF4TTFObVhrMC9PYUtSUTMxcXNBSlNGbm5yUkhNdFoxQ1R2eTAxYUlxTzVHdVgrT3FqS3hoZHcrdW1Ldy8zTGhDeWpQODJrMXJYYUtiZy83aXRqU2diaE8=&hash=cfed8d4755326861ad96daf20e9ddbc6978d96d1fa55d8fc53ce6f8d6b909805"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Typography
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24, color: "#838383" }}
            >
                Так как у нас нет серийного производства “на поток”, каждый
                заказчик может выбрать материалы и цвета для своей мебели, и,
                конечно, размеры с точностью до миллиметра. Мы предоставляем вам
                возможность создания собственного интерьера в оригинальном
                стиле. По вашим чертежам, эскизам или фотографиям мы разработаем
                мебель, нужную именно вам! Мы воплощаем в реальность ваши идеи и
                пожелания!
            </Typography>
            <Typography
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24, color: "#838383" }}
            >
                Нет собственных идей? Не проблема. В разделе{" "}
                <Link href={"/catalog"}>
                    <a style={{ color: "#B87FD6" }}>"Каталог”</a>
                </Link>{" "}
                вы можете ознакомиться с нашим ассортиментом. Благодаря нашей
                мебели вы создадите уют и неповторимый стиль вашего помещения,
                будь то квартира, загородный дом, офис или ресторан. Наша
                компания гарантирует качество, надежность и оригинальное
                исполнение в стиле лофт.
            </Typography>
            <Typography
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24, color: "#fff", color: "#838383" }}
            >
                Мебель является тем, без чего жизнь современного человека
                невозможно представить. Благодаря ней получается создать уют в
                помещении, а также сделать свою квартиру произведением
                искусства. Однако, чтобы достичь этого, необходимо заказывать
                мебель по индивидуальным требованиям, иначе у вас произойдет
                следующая ситуация: вроде бы все куплено одинакового стиля, но
                почему-то не выглядит так, как задумывалось.
            </Typography>
        </div>
    );
}

function Contacts() {
    return (
        <div style={{ paddingTop: 40 }}>
            <PageTitle>Контакты</PageTitle>
            <Typography
                component={"p"}
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24 }}
            >
                Телефон: +7 922 666-81-16 Telegram WhatsUp
            </Typography>
            <Typography variant={"body1"}>
                Мы в INSTAGRAM{" "}
                <a
                    href={"https://www.instagram.com/loft.style.life/"}
                    rel={"noreferrer noopener"}
                    target={"_blank"}
                    style={{color: "#000"}}
                >
                    @ loft.style.life
                </a>
            </Typography>

            <br />
            <Typography variant={"body1"} align={"center"}>
                Есть что обсудить? Закажи звонок
            </Typography>
            <br />
            <Typography align={"center"}><ModalForm label={"Перезвоните мне"}/></Typography>
        </div>
    );
}

function DidntFinde() {
    return (
        <div style={{ paddingTop: 40 }}>
            <PageTitle>Не нашли что искали?</PageTitle>

            <Typography
                component={"p"}
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24 }}
            >
                Отправьте нам фото желаемой мебели и мы расчитаем его стоимость
            </Typography>
            <Typography variant={"body1"}>
                Мы в INSTAGRAM{" "}
                <a
                    href={"https://www.instagram.com/loft.style.life/"}
                    rel={"noreferrer noopener"}
                    target={"_blank"}
                    style={{ color: "#000" }}
                >
                    @ loft.style.life
                </a>
            </Typography>

            <br />
            <Typography variant={"body1"} align={"center"}>
                Есть что обсудить? Закажи звонок
            </Typography>
            <br />
            <Typography align={"center"}>
                <ModalForm label={"Перезвоните мне"} />
            </Typography>
        </div>
    );
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const pageSeo = await data.pagesSeo["about"];

    // Pass post data to the page via props
    return { props: { pageSeo } };
}