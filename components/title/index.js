import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

export default function PageTitle({ classnames = "", component = "h2", children, style = { paddingBottom: 40 }  }) {
    return (
        <Grid
            container
            justify={"space-evenly"}
            className={classnames}
            style={style}
        >
            <Hidden smDown>
                <Grid item sm={3}>
                    <div style={{ overflow: "hidden", color: "#B87FD6" }}>
                        ____________________________________________________
                    </div>
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={6}>
                <Typography
                    component={component}
                    variant={"h4"}
                    style={{
                        textAlign: "center",
                        color: "#fff",
                    }}
                >
                    {children}
                </Typography>
            </Grid>
            <Hidden smDown>
                <Grid item sm={3}>
                    <div style={{ overflow: "hidden", color: "#B87FD6" }}>
                        ____________________________________________________
                    </div>
                </Grid>
            </Hidden>
        </Grid>
    );
}
