export function yaMetrika() {
    (function (m, e, t, r, i, k, a) {
        m[i] =
            m[i] ||
            function () {
                (m[i].a = m[i].a || []).push(arguments);
            };
        m[i].l = 1 * new Date();
        (k = e.createElement(t)),
            (a = e.getElementsByTagName(t)[0]),
            (k.async = 1),
            (k.src = r),
            a.parentNode.insertBefore(k, a);
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
    ym(71141620, "init", {
        clickmap: true,
        trackLinks: true,
        accurateTrackBounce: true,
        webvisor: true,
        trackHash: true,
    });
}

export function googleAnalitycs() {
    const ga = document.createElement("script");

    ga.type = "text/javascript";
    ga.async = !0;
    ga.src = "https://www.googletagmanager.com/gtag/js?id=UA-189319994-1";
    ga.onload = function () {
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag("js", new Date());

        gtag("config", "UA-189319994-1");
    };

    document.head.appendChild(ga);
}

