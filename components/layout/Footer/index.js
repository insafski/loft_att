// import React from "react";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

// import "../../../styles/footer.scss";

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
        },
        [theme.breakpoints.up("lg")]: {
            textAlign: "left",
        },
    },
}));

const useStyles2 = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.down("xs")]: {
            textAlign: "center",
        },
        [theme.breakpoints.down("sm")]: {
            textAlign: "center",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
        },
        [theme.breakpoints.up("lg")]: {
            textAlign: "left",
        },
    },
}));

export default function Footer() {
    const classes = useStyles();
    const classes2 = useStyles2();

    return (
        <footer
            className={"footer"}
            itemScope
            itemType="http://schema.org/WPFooter"
        >
            <Container maxWidth={"md"} className={"footer__content"}>
                <Grid
                    container
                    spacing={3}
                    justify="center"
                    // alignItems="center"
                >
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        className={`${classes.root} footer__menu`}
                    >
                        <nav>
                            <Typography variant={"subtitle1"}>
                                <Link href={"/catalog"}>Каталог</Link>
                            </Typography>
                            <Typography variant={"body2"}>
                                <Link href={"/catalog/tables"}>Столы</Link>
                            </Typography>
                            <Typography variant={"body2"}>
                                <Link href={"/catalog/racks"}>Стеллажи</Link>
                            </Typography>
                            <Typography variant={"body2"}>
                                <Link href={"/catalog/shelves"}>Полки</Link>
                            </Typography>
                            <Typography variant={"body2"}>
                                <Link href={"/catalog/shoe-racks"}>Обувницы</Link>
                            </Typography>
                        </nav>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={3}
                        className={`${classes.root} footer__menu`}
                    >
                        <Typography variant={"subtitle1"}>
                            О компании
                        </Typography>
                        <Typography variant={"body2"}>
                            <Link href={"/about"}>О нас</Link>
                        </Typography>
                        <Typography variant={"body2"}>
                            <Link href={"/payment"}>Доставка и оплата</Link>
                        </Typography>
                        {/* //TODO:  */}
                        {/* <Typography variant={"body2"}>
                            <NavLink to={"/contacts"}>Контакты</NavLink>
                        </Typography> */}
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes2.root}>
                        <Typography variant={"subtitle1"}>
                            Мы в социальных сетях
                        </Typography>
                        <Typography>
                            <a
                                href={
                                    "https://www.instagram.com/loft.style.life/"
                                }
                                rel={"noreferrer noopener"}
                                target={"_blank"}
                            >
                                <i className={"att-instagram"} />
                            </a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={3} className={classes.root}>
                        <Typography variant={"subtitle1"}>
                            <a
                                href={
                                    "https://api.whatsapp.com/send?phone=+79226668116"
                                }
                                rel={"noreferrer noopener"}
                                target={"_blank"}
                            >
                                +7 922 666-81-16
                            </a>
                        </Typography>
                        <Typography>
                            <i className={"att-whatsapp"} />
                            <i className={"att-telegram"} />
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth={"md"} className={"footer__info"}>
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={12} className={classes.root}>
                        <Typography
                            style={{ fontSize: 12, textAlign: "center" }}
                        >
                            {/* Казань, Россия */}
                            <i className={"att-phone"} />
                            <a
                                href={
                                    "https://api.whatsapp.com/send?phone=+79226668116"
                                }
                                rel={"noreferrer noopener"}
                                target={"_blank"}
                            >
                                +7 922 666-81-16
                            </a>
                            <span style={{ paddingLeft: 10 }}>
                                Ежедневно: 9:00-18:00
                            </span>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
            <div
                itemScope
                itemType="http://schema.org/Organization"
                style={{ display: "none" }}
            >
                <span itemProp="name">Loft style life</span>
                Адрес и телефон:
                <div
                    itemProp="address"
                    itemScope
                    itemType="http://schema.org/PostalAddress"
                >
                    {/* <span itemProp="streetAddress">ГСК Строитель</span> */}
                    <span itemProp="addressLocality">Казань, Россия</span>
                </div>
                Телефон:<span itemProp="telephone"> +7 922 666-81-16</span>,
            </div>
        </footer>
    );
}
