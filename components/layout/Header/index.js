// import React from "./node_modules/react";
import Link from "next/link";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import { useRouter } from "next/router";
import { get, compact } from "lodash";
// import Image from "next/image";

import data from "../../../data/index.json";
import { MibileMenu } from "./miboleMenu";

// import "../../../styles/header.scss";

export default function Header() {
    return (
        <>
            <Hidden only={["sm", "md", "lg", "xl"]}>
                <header className="app-header">
                    <Hidden smDown>
                        <div className={`app-header__opacity`} />
                    </Hidden>
                    <Hidden smDown>
                        <Menu />
                    </Hidden>
                    <Hidden mdUp>
                        <nav>
                            <MibileMenu />
                        </nav>
                    </Hidden>
                </header>
            </Hidden>
            <Hidden only={["sm", "md", "lg", "xl"]}>
                <header className="app-header_mobile">
                    <MibileMenu />
                </header>
            </Hidden>
        </>
    );
}

function Menu() {
    const router = useRouter();

    const slug = compact(get(router, "pathname", "").split("/"))[0];

    return (
        <div className={`app-header__menu`}>
            <Container maxWidth={"md"} className={"app-header__wrapper"}>
                <h1 className={"logo"}>
                    <Link href={"/"}>
                        <a>Loft Style Life</a>
                    </Link>
                </h1>
                <nav>
                    <ul
                        itemScope
                        itemType="http://schema.org/SiteNavigationElement"
                    >
                        {data.menu.map(
                            ({ title = "", to = "/", exact = false }, idx) => (
                                <li key={idx}>
                                    <Link
                                        // exact={exact}
                                        // activeClassName={"link--item_selected"}
                                        href={to}
                                    >
                                        <a
                                            itemProp="url"
                                            className={
                                                slug === to.replace("/", "")
                                                    ? "link--item_selected"
                                                    : ""
                                            }
                                        >
                                            <span itemProp={"name"}>
                                                {title.toUpperCase()}
                                            </span>
                                            <meta
                                                itemProp="position"
                                                content={idx + 1}
                                            />
                                        </a>
                                    </Link>
                                </li>
                            )
                        )}
                        <li>
                            <Phone />
                        </li>
                    </ul>
                </nav>
            </Container>
        </div>
    );
}

function Phone() {
    return (
        <>
            <a
                href={"https://api.whatsapp.com/send?phone=+79226668116"}
                target={"_blank"}
                rel={"noreferrer noopener"}
            >
                +7 922 666-81-16
            </a>
            <span>
                <i className="att-whatsapp"></i>
            </span>
        </>
    );
}
