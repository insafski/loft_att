import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Breadcrumb from "../../components/breadcrumbs";
import PageImage from "../../components/pageImage";
import PageTitle from "../../components/title";
import Layout from "../../components/layout";
import data from "../../data/index.json";

export default function Catalog() {
    return (
        <Layout>
            <PageImage
                items={[
                    {
                        url:
                            "https://design-homes.ru/images/galery/1822/kukhnya-v-stile-loft_5d40f23a55ea7.jpg",
                        title: "Погрузись в мир Loft",
                        styles: { backgroundPosition: "0 80%" },
                    },
                ]}
            />
            <Container maxWidth={"md"}>
                <Breadcrumb />
                <PageTitle component="h1">Список товаров</PageTitle>
                <Grid container spacing={3}>
                    <GalleryItems list={data.categories} />
                </Grid>
            </Container>
        </Layout>
    );
};

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 240,
    },
});

function GalleryItems({ list }) {
    const classes = useStyles();

    const router = useRouter();

    return list.map(({ image, title, description, to, price }, idx) => (
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4} key={idx}>
            <Card>
                <CardActionArea onClick={() => router.push(to)}>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Grid container justify="space-between">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                {title}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                align="right"
                            >
                                {price} ₽
                            </Typography>
                        </Grid>
                        {/* <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                        >
                            {description}
                        </Typography> */}
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    ));
}

export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const pageSeo = await data.pagesSeo["catalog"];

    // Pass post data to the page via props
    return { props: { pageSeo } };
}