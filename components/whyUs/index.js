import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PageTitle from "../title";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function WhyUs() {
    const classes = useStyles();

    return (
        <div style={{ marginTop: 40 }}>
            <PageTitle classnames={"page__title"}>
                ПОЧЕМУ СТОИТ ВЫБРАТЬ НАС?
            </PageTitle>
            <div className={classes.root}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem>
                        <ListItemIcon>
                            <i
                                className={"att-heart"}
                                style={{ color: "#242A35", fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Нет посредников"
                            secondary={
                                "Вы покупаете товар напрямую от производителя без посредников"
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <i
                                className={"att-dollar"}
                                style={{ color: "#242A35", fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Адекватная цена"
                            secondary={
                                "Мы предлагаем доступную стоимость продуктов"
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <i
                                className={"att-thumbs-up-alt"}
                                style={{ color: "#242A35", fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Гарантия качества"
                            secondary={
                                "Наши изделия изготавливаются с помощью современных технологий, которые обеспечивают долгий срок службы продуктов"
                            }
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <i
                                className={"att-truck"}
                                style={{ color: "#242A35", fontSize: 24 }}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary="Доставка по всей России"
                            secondary={
                                "Мы осуществляем доставку с помощью транспортной компании на ваш выбор"
                            }
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    );
}