import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#242A35",
        },
        secondary: {
            main: "#19857b",
        },
        error: {
            main: red.A400,
        },
        color: "red",
        background: {
            default: "#fff",
        },
    },
    typography: {
        fontFamily: "Oswald, sans-serif",
        h1: {
            fontSize: "1.2rem",
            "@media (min-width:600px)": {
                fontSize: "1.5rem",
            },
        },
    },
});

export default theme;
