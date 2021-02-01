/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { get, compact } from "lodash";

import data from "../../data/index.json";

function Breadcrumb() {
    const {pathname, query} = useRouter();

    const slug = get(query, "slug", "");
    const c = compact(pathname.split("/"))[0];

    const productName = get(data, `productMap[${slug}]`, "");

    const pageName = get(data, `pageMap[${c}]`, "");

    const crumbs = [];

    crumbs.push({
        to: "/",
        name: "Главная",
        position: 1,
    });

    if (productName) {
        crumbs.push({
            to: `/catalog`,
            name: "Каталог",
            position: 2,
        });
        crumbs.push({
            to: "",
            name: productName,
            position: 3,
        });
    } else {
        crumbs.push({
            to: "",
            name: pageName,
            position: 2,
        });
    }

    return (
        <nav className="my-breadcrumbs">
            <ul
                className="MuiBreadcrumbs-ol"
                itemScope
                itemType="http://schema.org/BreadcrumbList"
            >
                {crumbs.map(
                    ({ to = "/", name = "Главная", position = 1 }, idx) => {
                        return crumbs.length - 1 !== idx ? (
                            <Fragment key={idx}>
                                <li
                                    className="MuiBreadcrumbs-li"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="http://schema.org/ListItem"
                                >
                                    <Link
                                        href={to}
                                        // aria-current="page"
                                        // className="active"
                                        // href={to}
                                    >
                                        <a itemProp="item">
                                            <meta
                                                itemProp="position"
                                                content={position}
                                            />
                                            <span itemProp="name">{name}</span>
                                        </a>
                                    </Link>
                                </li>
                                <li
                                    aria-hidden="true"
                                    className="MuiBreadcrumbs-separator"
                                >
                                    ›
                                </li>
                            </Fragment>
                        ) : (
                            <Fragment key={idx}>
                                <li
                                    className="MuiBreadcrumbs-li"
                                    itemProp="itemListElement"
                                    itemScope
                                    itemType="http://schema.org/ListItem"
                                >
                                    <a itemProp="item">
                                        <meta
                                            itemProp="position"
                                            content={position}
                                        />
                                        <span className="MuiTypography-root MuiTypography-body1 MuiTypography-colorTextPrimary">
                                            {name}
                                        </span>
                                    </a>
                                </li>
                            </Fragment>
                        );
                    }
                )}
            </ul>
        </nav>
    );
}

export default Breadcrumb;
