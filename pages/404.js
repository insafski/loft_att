import Link from "next/link";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout>
            <Container maxWidth={"md"} className={"main-page"}>
                <div style={{ marginTop: 200 }}>
                    <Typography
                        component={"h1"}
                        variant={"h4"}
                        style={{
                            textAlign: "center",
                            color: "#2a3e53",
                            marginBottom: 24,
                        }}
                    >
                        404 - Упс, страница не найдена
                    </Typography>

                    <Typography
                        component={"h2"}
                        variant={"h5"}
                        style={{ textAlign: "center" }}
                    >
                        Попробуйте начать с{" "}
                        <Link href={"/"}>
                            <a className={"paeg404__link"}>главной</a>
                        </Link>{" "}
                        страницы, либо передите в{" "}
                        <Link href={"/catalog"}>
                            <a className={"paeg404__link"}>каталог</a>
                        </Link>
                        .
                    </Typography>
                </div>
            </Container>
        </Layout>
    );
}
