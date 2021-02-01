import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

import { withPage } from "../../components/page";
// import PageImage from "../../components/pageImage";
import Breadcrumb from "../../components/breadcrumbs";
import PageTitle from "../../components/title";
import Layout from "../../components/layout";

const seo = {
    title: "Оплата и доставка",
};

const payment = () => {
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
            <Container maxWidth={"md"} style={{ marginTop: 120 }}>
                <Breadcrumb />
                <PayAndDelivery />
            </Container>
        </Layout>
    );
};

const Payment = withPage(payment, seo);

export default Payment;

function PayAndDelivery() {
    return (
        <div style={{ marginTop: 40 }}>
            <PageTitle component={"h1"}>Оплата и доставка</PageTitle>
            <Typography variant={"h6"}>
                Для вашего удобства мы предлагаем несколько способов оплаты:
            </Typography>
            <Typography variant={"body1"}>
                Оплата через онлайн-банк или приложение (Сбербанк онлайн,
                Альфа-банк, Тинькофф, ВТБ и другие).
            </Typography>
            <Typography variant={"body1"}>Оплата при получении.</Typography>
            <Typography variant={"h6"}>Доставка</Typography>
            <Typography variant={"body1"}>
                Доставка по городу Казань осуществляется ежедневно с 18:00 до
                22:00 часов.
            </Typography>
            <Typography variant={"body1"}>
                Стоимость доставки от 500 рублей в зависимости от размеров
                изделия.
            </Typography>
            <Typography variant={"h6"}>
                Условия доставки транспортными компаниями
            </Typography>
            <Typography variant={"body1"}>
                Продукция Loft style life может быть доставлена в любой город
                России. Мы осуществляем доставку с помощью транспортной компании
                ПЭК, но вы также можете воспользоваться услугами других
                транспортных компаний по вашему выбору. В стоимость доставки
                будет входить забор товара с нашего склада и доставка до
                терминала или до порога дома в вашем городе. Стоимость доставки
                и возможные дополнительные расходы полностью оплачиваются
                получателем. При приеме товара, доставленного силами
                транспортной компании, необходимо тщательно проверить состояние
                его упаковки, и, при необходимости, вскрыть упаковку в
                присутствии представителя транспортной компании и составить акт
                о наличии расхождений по количеству и/или качеству груза.
                Переход права собственности, а также риск случайного повреждения
                или гибели продукции происходит в момент отгрузки Поставщиком
                продукции непосредственно Заказчику или представителю Заказчика,
                или представителю транспортной компании, осуществляющей услуги
                по доставке.
            </Typography>
        </div>
    );
}
