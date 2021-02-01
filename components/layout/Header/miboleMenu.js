// import React from "./node_modules/react";
import { useRouter } from "next/router";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";

import data from "../../../data/index.json";

// import "../../../styles/header.scss";

export function MibileMenu() {
    const router = useRouter();

    return (
        <BottomNavigation
            onChange={(_, value) => router.push(value)}
            className={"mobile-navigation"}
            showLabels
        >
            {data.menu.map(({ title, to }, idx) => (
                <BottomNavigationAction
                    key={idx}
                    label={title.toUpperCase()}
                    value={to}
                />
            ))}
        </BottomNavigation>
    );
}
