import Link from "next/link";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";

import Breadcrumb from "../../components/breadcrumbs";
import PageImage from "../../components/pageImage";
import { withPage } from "../../components/page";
import PageTitle from "../../components/title";
import Layout from "../../components/layout";

// import ModalForm from "../../components/modal";

const seo = {
    title: "О нас",
};

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

const AboutUs = () => {
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
            <Container maxWidth={"md"}>
                <Breadcrumb />
                <AboutUsBlock />
                <HowItsMade />
                <Contacts />
            </Container>
        </Layout>
    );
};

const About = withPage(AboutUs, seo);

export default About;

function AboutUsBlock() {
    const classes = useStyles();

    return (
        <div style={{ marginTop: 40 }}>
            <PageTitle component={"h1"} lassnames={"page__title"}>
                О НАС
            </PageTitle>
            <Grid container spacing={2}>
                <Grid item xs={12} sm>
                    <Typography gutterBottom variant="body1" align={"justify"}>
                        Мы работаем в формате мастерской, то есть каждый предмет
                        мебели здесь изготавливается вручную, в процессе
                        совместного творчества с заказчиком. Мы производим
                        качественную и оригинальную мебель в стиле лофт по Вашим
                        индивидуальным заказам. Отсюда мы отправляем Ваш заказ в
                        любую точку нашей необъятной страны. Наша миссия –
                        изготовление качественной, стильной и надежной мебели в
                        стиле лофт доступной каждому. Ради этого мы готовы
                        работать без выходных и даже по ночам!
                    </Typography>
                </Grid>
                <Grid item xs={12} sm>
                    <ButtonBase className={classes.image}>
                        <img
                            className={classes.img}
                            alt="complex"
                            src="https://i.pinimg.com/originals/28/0e/fc/280efcd44a10a61e523fb3d5045c3cb1.jpg"
                        />
                    </ButtonBase>
                </Grid>
            </Grid>
        </div>
    );
}

function HowItsMade() {
    return (
        <div style={{ marginTop: 40 }}>
            <PageTitle>КАК МЫ ЭТО ДЕЛАЕМ</PageTitle>
            <Typography
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24 }}
            >
                Основные материалы, которые мы используем, – это металлический
                профиль разных сечений и натуральный массив дерева: сосна, дуб,
                карагач, бук. Мастера, работающие у нас – настоящие асы своего
                дела, способные выполнить работу по индивидуальным заказам и в
                кратчайший срок.
            </Typography>
            <Typography
                variant={"body1"}
                align={"justify"}
                style={{ marginTop: 24 }}
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
                style={{ marginTop: 24 }}
            >
                Нет собственных идей? Не проблема. В разделе{" "}
                <Link href={"/catalog"}>
                    <a style={{ color: "#FFA31A" }}>"Каталог”</a>
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
                style={{ marginTop: 24 }}
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
        <div style={{ marginTop: 40 }}>
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
            {/* <Typography align={"center"}><ModalForm label={"Перезвоните мне"}/></Typography> */}
        </div>
    );
}