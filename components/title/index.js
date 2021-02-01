import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

export default function PageTitle({ classnames = "", component = "h2", children  }) {
    return (
        <Grid container justify={"space-evenly"} className={classnames} style={{marginBottom: 40}}>
            <Hidden smDown>
                <Grid item sm={3}>
                    <div style={{ overflow: "hidden", color: "#242A35" }}>
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
                        color: "#242A35",
                    }}
                >
                    {children}
                </Typography>
            </Grid>
            <Hidden smDown>
                <Grid item sm={3}>
                    <div style={{ overflow: "hidden", color: "#242A35" }}>
                        ____________________________________________________
                    </div>
                </Grid>
            </Hidden>
        </Grid>
    );
}
