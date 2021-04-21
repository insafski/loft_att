import Link from "next/link";
import { Parallax } from "react-parallax";

import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

export default function SimpleParallax() {
    return (
        <Parallax
            bgImage="https://royally.ru/Files/pt/picture/1117/13_1511855228.jpg"
            bgImageAlt="Loft furniture"
            strength={-100}
            style={{ paddingTop: 40 }}
        >
            <Container
                maxWidth={"md"}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    height: 350,
                    alignItems: "center",
                }}
            >
                <Link href={"/catalog"}>
                    <Typography
                        variant={"h4"}
                        component={"h6"}
                        className={"main-page__link"}
                    >
                        Перейти в каталог
                    </Typography>
                </Link>
            </Container>
        </Parallax>
    );
}
