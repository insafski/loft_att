import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { isMobile } from "react-device-detect";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";

import PageTitle from "../title";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 16,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
}));

export default function Instagram() {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const token = process.env.NEXT_PUBLIC_INSTAGRAM_TOKEN;
    const url = `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption,timestamp,thumbnail_url,permalink&access_token=${token}`;

    useEffect(() => {
        fetch(url)
            .then((responce) => responce.json())
            .then((respnseData) => {
                setData(get(respnseData, "data", []));
            });
    }, [url]);

    return (
        !!data.length && (
            <div style={{ paddingTop: 40, paddingBottom: 80 }}>
                <PageTitle classnames={"page__title"}>МЫ В INSTAGRAM</PageTitle>
                <div className="instagram">
                    <Typography align="center" style={{ marginTop: -20 }}>
                        <a
                            href={"https://www.instagram.com/loft.style.life/"}
                            rel={"noreferrer noopener"}
                            target={"_blank"}
                            style={{ color: "#000" }}
                        >
                            @ loft.style.life
                        </a>
                    </Typography>
                </div>

                <div className={classes.root}>
                    <GridList
                        className={classes.gridList}
                        cols={isMobile ? 1 : 4}
                        spacing={24}
                    >
                        {data.map((tile) => {
                            const likes = get(tile, "likes", 0);
                            const comments = get(tile, "comments", 0);

                            return (
                                <GridListTile key={get(tile, "id", "")}>
                                    <img
                                        src={get(tile, "media_url", "")}
                                        alt={get(tile, "title", "")}
                                    />
                                    <GridListTileBar
                                        title={
                                            <>
                                                {!!likes && (
                                                    <>
                                                        <i
                                                            className="att-heart-empty"
                                                            style={{
                                                                color: "#fff",
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#fff",
                                                            }}
                                                        >
                                                            {likes}
                                                        </span>
                                                    </>
                                                )}
                                                {!!comments && (
                                                    <>
                                                        <i
                                                            className={
                                                                "att-comment-alt2"
                                                            }
                                                            style={{
                                                                color: "#fff",
                                                            }}
                                                        />
                                                        <span
                                                            style={{
                                                                color: "#fff",
                                                                marginLeft: 10,
                                                            }}
                                                        >
                                                            {comments}
                                                        </span>
                                                    </>
                                                )}
                                            </>
                                        }
                                        classes={{
                                            root: classes.titleBar,
                                            title: classes.title,
                                        }}
                                    />
                                </GridListTile>
                            );
                        })}
                    </GridList>
                </div>
            </div>
        )
    );
}