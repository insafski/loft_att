import SwiperCore, { EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import get from "lodash/get";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

SwiperCore.use([EffectFade, Autoplay]);

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(1),
        [theme.breakpoints.down("sm")]: {
            fontSize: 16,
            textAlign: "center",
        },
        [theme.breakpoints.up("md")]: {
            fontSize: 25,
            textAlign: "left",
            width: "30%",
        },
        [theme.breakpoints.up("lg")]: {
            fontSize: 20,
            textAlign: "left",
            width: "30%",
        },
    },
}));

export default function PageImage({ items = [] }) {
    const classes = useStyles();

    return (
        <Swiper
            effect={"fade"}
            autoplay={{
                delay: 5000,
            }}
        >
            {items.map((slide, idx) => {
                const title = get(slide, "title", "");

                return (
                    <SwiperSlide key={idx}>
                        <div
                            style={Object.assign(
                                {},
                                {
                                    height: 350,
                                    background: `url(${get(slide, "url", "")})`,
                                },
                                get(slide, "styles", {})
                            )}
                        >
                            <Container
                                maxWidth={"md"}
                                style={{
                                    display: "flex",
                                    // justifyContent: "center",
                                    height: "100%",
                                    alignItems: "center",
                                }}
                            >
                                {title && (
                                    <h3
                                        style={{
                                            color: "#fff",
                                            alignItems: "center",
                                        }}
                                        className={classes.root}
                                    >
                                        {title.toUpperCase()}
                                    </h3>
                                )}
                            </Container>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
