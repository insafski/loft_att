import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Mission() {
    return (
        <section>
            <div
                style={{
                    background: "#242A35",
                    marginTop: 80,
                    marginBottom: -40,
                }}
            >
                <Container maxWidth={"md"} className={"main-page"}>
                    <Grid container justify={"center"}>
                        <Grid item sm={9}>
                            <div
                                style={{
                                    padding: "60px 0",
                                    textAlign: "center",
                                }}
                            >
                                <Typography
                                    component={"span"}
                                    style={{
                                        color: "#bfbfbf",
                                        fontFamily: "Lobster, cursive",
                                        fontSize: 24,
                                        lineHeight: "40px",
                                    }}
                                >
                                    «Мы хотим коренным образом изменить
                                    представление о мебели. Мы знаем, что
                                    качественная дизайнерская мебель была
                                    неоправданно дорогостоящей из-за совокупных
                                    затрат на посредников, склады и магазины.
                                    Поэтому мы удалим все несущественное и
                                    сэкономим вам »
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </section>
    );
}
