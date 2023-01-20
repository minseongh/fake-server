(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [782], {
        4048: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return s
                }
            });
            var o = t(2920),
                a = JSON.parse('{"-1":"Banned for 10 days","-2":"Query is invalid","-4":"Server Error","-5":"Too many requests","-6":"Token is invalid","-7":"hCaptcha token is invalid"}');

            function s(e) {
                if (400 == e.response.status) {
                    var n = e.response.data;
                    a[n] ? (0, o.Am)(a[n], {
                        type: "error"
                    }) : (0, o.Am)(n || e.message, {
                        type: "error"
                    })
                }
            }
        },
        9401: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return D
                }
            });
            var o = t(29),
                a = t(7794),
                s = t.n(a),
                i = t(1163),
                r = t(7294),
                l = t(6467),
                c = t(5893);

            function d(e) {
                var n = e.onClose,
                    t = e.leaderboard,
                    o = e.totalSchoolCount;
                return (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("div", {
                        className: "leaderboard-container",
                        children: (0, c.jsxs)("div", {
                            className: "leaderboard",
                            children: [(0, c.jsxs)("span", {
                                className: "title fontSize",
                                style: {
                                    fontSize: "18px",
                                    justifyContent: "left",
                                    display: "inline",
                                    color: "black"
                                },
                                children: ["\uD83C\uDFC6 ��궧 (", o, " �숆탳 李몄뿬)"]
                            }), (0, c.jsx)("span", {
                                className: "close fontSize",
                                onClick: n,
                                children: "��"
                            }), (0, c.jsx)("div", {
                                className: "ranking",
                                children: (0, c.jsx)("ol", {
                                    className: "rank",
                                    children: t.length > 0 ? t.map(function(e, n) {
                                        var t;
                                        return (0, c.jsxs)("li", {
                                            className: "school",
                                            children: [(0, c.jsx)("div", {
                                                className: "schoolRank fontSize",
                                                style: {
                                                    color: "black"
                                                },
                                                children: 1 == (t = n + 1) ? "\uD83E\uDD47" : 2 == t ? "\uD83E\uDD48" : 3 == t ? "\uD83E\uDD49" : t
                                            }), (0, c.jsx)("div", {
                                                className: "schoolName fontSize",
                                                style: {
                                                    color: "black"
                                                },
                                                children: e.schoolName
                                            }), (0, c.jsx)("span", {
                                                className: "schoolTier tierIcon {tier(r.pop, r.schoolRank)}",
                                                style: {
                                                    color: "black"
                                                }
                                            }), (0, c.jsx)("div", {
                                                className: "schoolScore fontSize",
                                                style: {
                                                    color: "black"
                                                },
                                                children: parseInt(e.pops).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                                            })]
                                        }, n)
                                    }) : (0, c.jsx)("li", {
                                        className: "loading fontSize",
                                        style: {
                                            color: "black"
                                        },
                                        children: "濡쒕뵫以�... ��"
                                    })
                                })
                            })]
                        })
                    }), (0, c.jsx)("style", {
                        children: "\n      .leaderboard-container {\n        background-color: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        display: flex;\n        justify-content: center;\n        align-items : center;\n        z-index: 3;\n      }\n      .leaderboard {\n        background-color: white;\n        width: 80%;\n        padding: 1rem;\n        height: 80%;\n        user-select: none;\n        border-radius: 10px;\n      }\n      .close {\n        cursor: pointer;\n        float: right;\n      }\n      .ranking {\n        height: 85%;\n        margin-top: 30px;\n        overflow-y: auto;\n      }\n      .rank {\n        list-style: none;\n        padding: 0;\n      }\n      .school {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border-bottom: 1px solid #eee;\n        padding: 10px 0;\n      }\n      .schoolRank {\n        box-sizing: inherit;\n        cursor: default;\n        justify-content: center;\n        user-select: none;\n        margin-right: 5px;\n      }\n      .schoolName {\n        box-sizing: inherit;\n        cursor: default;\n        justify-content: center;\n        user-select: none;\n      }\n      .schoolTier {\n        box-sizing: inherit;\n        cursor: default;\n        justify-content: center;\n        user-select: none;\n      }\n      .schoolScore {\n        text-align: center;\n        box-sizing: inherit;\n        cursor: default;\n        margin-left: auto;\n        user-select: none;\n        padding-right: 10px;\n      }\n      .loading {\n        text-align: center;\n      }\n      .fontSize {\n        font-size: 18px;\n      }\n      .tierIcon {\n        width: 40px;\n        height: 42px;\n      }\n      .mySchool {\n        color: limegreen;\n      }\n      @media (max-width: 500px) {\n        .fontSize {\n          font-size: 15px;\n        }\n        .tierIcon {\n          width: 20px;\n          height: 21px;\n        }\n      }\n      .tierIcon {\n        background-repeat: no-repeat;\n        background-position: center;\n        background-size: contain;\n        display: inline-block;\n      }\n      .bronze {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5 13L6 3L17 13H10.5Z' fill='%23A86350'/%3E%3Cpath d='M10.5 13L6 3V18L10.5 13Z' fill='%23663228'/%3E%3Cpath d='M6 18V3L17 13H10.5L6 18Z' stroke='%2337221F' stroke-width='1.8'/%3E%3C/svg%3E\");\n      }\n      .silver {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.2717 14.5676C14.4563 15.9394 13.2691 17.021 11.9131 17.6276L9.97272 11.3003L10.7472 4.48078C12.1404 4.45651 13.7761 5.31448 14.7409 6.27787C15.7058 7.24126 16.2863 8.59474 16.3831 10.1068C16.4799 11.6189 16.087 13.1957 15.2717 14.5676Z' fill='%2397928E'/%3E%3Cpath d='M2.12311 10.5356C2.23324 8.91676 2.90237 7.38641 4.01606 6.20632L9.60696 11.0138L12.567 17.5321C11.09 18.2039 8.86356 18.1922 7.29616 17.7725C5.72877 17.3527 4.35588 16.4015 3.41228 15.0814C2.46867 13.7614 2.01298 12.1545 2.12311 10.5356Z' fill='%23616161'/%3E%3Cmask id='path-3-inside-1_1_185' fill='white'%3E%3Cpath d='M3.84315 5.34315C2.5344 6.65189 1.71994 8.37394 1.53852 10.2159C1.35711 12.0578 1.81997 13.9056 2.84824 15.4446C3.87652 16.9835 5.40658 18.1183 7.17772 18.6555C8.94887 19.1928 10.8515 19.0993 12.5615 18.391C14.2714 17.6828 15.6829 16.4035 16.5554 14.7712C17.4279 13.1389 17.7074 11.2546 17.3463 9.43928C16.9852 7.624 16.0059 5.99008 14.5751 4.81592C13.1444 3.64176 11.3508 3 9.5 3L9.5 9.7471C9.78987 9.7471 10.0708 9.84761 10.2948 10.0315C10.5189 10.2154 10.6723 10.4713 10.7288 10.7556C10.7854 11.0399 10.7416 11.335 10.605 11.5906C10.4683 11.8463 10.2473 12.0466 9.97947 12.1575C9.71166 12.2685 9.41369 12.2831 9.1363 12.199C8.85892 12.1148 8.61929 11.9371 8.45825 11.6961C8.29721 11.4551 8.22472 11.1657 8.25313 10.8772C8.28154 10.5887 8.4091 10.319 8.61406 10.1141L3.84315 5.34315Z'/%3E%3C/mask%3E%3Cpath d='M3.84315 5.34315C2.5344 6.65189 1.71994 8.37394 1.53852 10.2159C1.35711 12.0578 1.81997 13.9056 2.84824 15.4446C3.87652 16.9835 5.40658 18.1183 7.17772 18.6555C8.94887 19.1928 10.8515 19.0993 12.5615 18.391C14.2714 17.6828 15.6829 16.4035 16.5554 14.7712C17.4279 13.1389 17.7074 11.2546 17.3463 9.43928C16.9852 7.624 16.0059 5.99008 14.5751 4.81592C13.1444 3.64176 11.3508 3 9.5 3L9.5 9.7471C9.78987 9.7471 10.0708 9.84761 10.2948 10.0315C10.5189 10.2154 10.6723 10.4713 10.7288 10.7556C10.7854 11.0399 10.7416 11.335 10.605 11.5906C10.4683 11.8463 10.2473 12.0466 9.97947 12.1575C9.71166 12.2685 9.41369 12.2831 9.1363 12.199C8.85892 12.1148 8.61929 11.9371 8.45825 11.6961C8.29721 11.4551 8.22472 11.1657 8.25313 10.8772C8.28154 10.5887 8.4091 10.319 8.61406 10.1141L3.84315 5.34315Z' stroke='%2355504B' stroke-width='3.6' mask='url(%23path-3-inside-1_1_185)'/%3E%3Cpath d='M10.5 13L6 3L17 13H10.5Z' fill='%2397928E'/%3E%3Cpath d='M10.5 13L6 3V18L10.5 13Z' fill='%23616161'/%3E%3Cpath d='M6 18V3L17 13H10.5L6 18Z' stroke='%23363434' stroke-width='1.8'/%3E%3C/svg%3E\");\n      }\n      .gold {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.2717 14.5676C14.4563 15.9394 13.2691 17.021 11.9131 17.6276L9.97272 11.3003L10.7472 4.48078C12.1404 4.45651 13.7761 5.31448 14.7409 6.27787C15.7058 7.24126 16.2863 8.59474 16.3831 10.1068C16.4799 11.6189 16.087 13.1957 15.2717 14.5676Z' fill='%23E39921'/%3E%3Cpath d='M2.12311 10.5356C2.23324 8.91676 2.90237 7.38641 4.01606 6.20632L9.60695 11.0138L12.567 17.5321C11.09 18.2039 8.86356 18.1922 7.29616 17.7725C5.72876 17.3527 4.35588 16.4015 3.41227 15.0814C2.46867 13.7614 2.01297 12.1545 2.12311 10.5356Z' fill='%23C57624'/%3E%3Cmask id='path-3-inside-1_2_233' fill='white'%3E%3Cpath d='M3.84315 5.34315C2.5344 6.65189 1.71994 8.37394 1.53852 10.2159C1.35711 12.0578 1.81997 13.9056 2.84824 15.4446C3.87652 16.9835 5.40658 18.1183 7.17772 18.6555C8.94887 19.1928 10.8515 19.0993 12.5615 18.391C14.2714 17.6828 15.6829 16.4035 16.5554 14.7712C17.4279 13.1389 17.7074 11.2546 17.3463 9.43928C16.9852 7.624 16.0059 5.99008 14.5751 4.81592C13.1444 3.64176 11.3508 3 9.5 3L9.5 9.7471C9.78987 9.7471 10.0708 9.84761 10.2948 10.0315C10.5189 10.2154 10.6723 10.4713 10.7288 10.7556C10.7854 11.0399 10.7416 11.335 10.605 11.5906C10.4683 11.8463 10.2473 12.0466 9.97947 12.1575C9.71166 12.2685 9.41369 12.2831 9.1363 12.199C8.85892 12.1148 8.61929 11.9371 8.45825 11.6961C8.29721 11.4551 8.22472 11.1657 8.25313 10.8772C8.28154 10.5887 8.4091 10.319 8.61406 10.1141L3.84315 5.34315Z'/%3E%3C/mask%3E%3Cpath d='M3.84315 5.34315C2.5344 6.65189 1.71994 8.37394 1.53852 10.2159C1.35711 12.0578 1.81997 13.9056 2.84824 15.4446C3.87652 16.9835 5.40658 18.1183 7.17772 18.6555C8.94887 19.1928 10.8515 19.0993 12.5615 18.391C14.2714 17.6828 15.6829 16.4035 16.5554 14.7712C17.4279 13.1389 17.7074 11.2546 17.3463 9.43928C16.9852 7.624 16.0059 5.99008 14.5751 4.81592C13.1444 3.64176 11.3508 3 9.5 3L9.5 9.7471C9.78987 9.7471 10.0708 9.84761 10.2948 10.0315C10.5189 10.2154 10.6723 10.4713 10.7288 10.7556C10.7854 11.0399 10.7416 11.335 10.605 11.5906C10.4683 11.8463 10.2473 12.0466 9.97947 12.1575C9.71166 12.2685 9.41369 12.2831 9.1363 12.199C8.85892 12.1148 8.61929 11.9371 8.45825 11.6961C8.29721 11.4551 8.22472 11.1657 8.25313 10.8772C8.28154 10.5887 8.4091 10.319 8.61406 10.1141L3.84315 5.34315Z' stroke='%238B4700' stroke-width='3.6' mask='url(%23path-3-inside-1_2_233)'/%3E%3Cpath d='M10.5 13L6 3L17 13H10.5Z' fill='%23E39921'/%3E%3Cpath d='M10.5 13L6 3V18L10.5 13Z' fill='%23C57624'/%3E%3Cpath d='M6 18V3L17 13H10.5L6 18Z' stroke='%23573007' stroke-width='1.8'/%3E%3C/svg%3E\");\n      }\n      .platinum {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 8L17.5 10L16 10.5V14.5L12.5 18L10 14L13 8Z' fill='%23007F59'/%3E%3Cpath d='M12.5 17.5L10.05 12L5.5 10L3 16.5L6 15C6.66269 18.7967 7.99691 18.9334 12.5 17.5Z' fill='%2300432F'/%3E%3Cmask id='path-3-inside-1_16_10' fill='white'%3E%3Cpath d='M17 12C17 13.3543 16.6071 14.6795 15.8691 15.815C15.131 16.9505 14.0794 17.8475 12.8417 18.3973C11.604 18.947 10.2334 19.126 8.89608 18.9124C7.55874 18.6988 6.31206 18.1019 5.30718 17.194L10 12H17Z'/%3E%3C/mask%3E%3Cpath d='M17 12C17 13.3543 16.6071 14.6795 15.8691 15.815C15.131 16.9505 14.0794 17.8475 12.8417 18.3973C11.604 18.947 10.2334 19.126 8.89608 18.9124C7.55874 18.6988 6.31206 18.1019 5.30718 17.194L10 12H17Z' stroke='%23002119' stroke-width='3.6' mask='url(%23path-3-inside-1_16_10)'/%3E%3Cpath d='M3 17L7 5L18 10L10 12L3 17Z' stroke='%23002119' stroke-width='1.2'/%3E%3Cpath d='M10.5 13L6 3L17 13H10.5Z' fill='%23018059'/%3E%3Cpath d='M10.5 13L6 3V18L10.5 13Z' fill='%2300432F'/%3E%3Cpath d='M6 18V3L17 13H10.5L6 18Z' stroke='%23002119' stroke-width='1.8'/%3E%3C/svg%3E%0A\");\n      }\n      .diamond {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13 8L17.5 10L16 10.5V14.5L12.5 18L10 14L13 8Z' fill='%2347EBFD'/%3E%3Cpath d='M12.5 17.5L10.05 12L5.5 10L3 16.5L6 15C6.66269 18.7967 7.99691 18.9334 12.5 17.5Z' fill='%2300C9D4'/%3E%3Cmask id='path-3-inside-1_16_33' fill='white'%3E%3Cpath d='M17 12C17 13.3543 16.6071 14.6795 15.8691 15.815C15.131 16.9505 14.0794 17.8475 12.8417 18.3973C11.604 18.947 10.2334 19.126 8.89608 18.9124C7.55874 18.6988 6.31206 18.1019 5.30718 17.194L10 12H17Z'/%3E%3C/mask%3E%3Cpath d='M17 12C17 13.3543 16.6071 14.6795 15.8691 15.815C15.131 16.9505 14.0794 17.8475 12.8417 18.3973C11.604 18.947 10.2334 19.126 8.89608 18.9124C7.55874 18.6988 6.31206 18.1019 5.30718 17.194L10 12H17Z' stroke='%23008088' stroke-width='3.6' mask='url(%23path-3-inside-1_16_33)'/%3E%3Cpath d='M3 17L7 5L18 10L10 12L3 17Z' stroke='%2329AAA1' stroke-width='1.2'/%3E%3Cpath d='M10.5 13L6 3L17 13H10.5Z' fill='%2347EBFD'/%3E%3Cpath d='M10.5 13L6 3V18L10.5 13Z' fill='%2300C9D4'/%3E%3Cpath d='M6 18V3L17 13H10.5L6 18Z' stroke='%23008088' stroke-width='1.8'/%3E%3C/svg%3E%0A\");\n      }\n      .none {\n        background-image: url(\"data:image/svg+xml,%3Csvg width='20' height='21' viewBox='0 0 20 21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.5 13L6 3L17 13H10.5Z' fill='%23DCDCDC'/%3E%3Cpath d='M10.5 13L6 3V18L10.5 13Z' fill='white'/%3E%3Cpath d='M6 18V3L17 13H10.5L6 18Z' stroke='black' stroke-width='1.8'/%3E%3C/svg%3E%0A\");\n      }\n    "
                    })]
                })
            }
            var p = t(9034),
                h = t.n(p),
                u = ["diamond", "platinum", "gold", "silver", "bronze"],
                m = [3e6, 75e4, 25e4, 5e4, 1e4],
                C = t(4184),
                g = t.n(C),
                f = t(3951),
                x = t(594),
                _ = t(1664),
                w = t.n(_),
                v = t(5033),
                k = t.n(v);

            function j() {
                var e = function e() {
                    if (!((document.getElementById("snowcont") || {
                            childElementCount: 0
                        }).childElementCount > 100)) {
                        var n, t = document.createElement("div"),
                            o = 10 * Math.random() + 10,
                            a = Math.random() * window.screen.width,
                            s = Math.floor(8 * Math.random());
                        t.className = "snowflake", t.style.left = "".concat(a, "px"), t.style.opacity = "".concat(Math.random() / 2 + .5), t.style.transition = "all ".concat(o, "s linear"), t.style.width = "".concat(s, "px"), t.style.height = "".concat(s, "px"), t.style.transform = "translateY(0vh)", null === (n = document.getElementById("snowcont")) || void 0 === n || n.appendChild(t), setTimeout(function() {
                            t.style.opacity = "0", t.style.transform = "translateY(100vh)", t.style.left = "".concat(a + Math.floor(Math.random() * window.screen.width / 4 - window.screen.width / 8), "px")
                        }, 100), setTimeout(function() {
                            var n, o;
                            null === (n = document.getElementById("snowcont")) || void 0 === n || n.removeChild(t), null !== (o = document.getElementById("snowcont")) && void 0 !== o && o.childElementCount, e()
                        }, (10 * Math.random() + o) * 1e3 + 1e3)
                    }
                };
                return "undefined" != typeof document && function() {
                    for (var n = 0; n < 100; n++) setTimeout(e, 15e3 * Math.random())
                }(), (0, c.jsxs)("div", {
                    style: {
                        opacity: "var(--winter)",
                        transition: "all .2s"
                    },
                    children: [(0, c.jsx)("div", {
                        className: k().glass
                    }), (0, c.jsx)("div", {
                        className: k().container,
                        id: "snowcont"
                    }), (0, c.jsx)("style", {
                        children: "\n        .snowflake {\n            border-radius: 50%;\n            background-color: white;\n            position: absolute;\n            top: -8px;\n        }\n      "
                    })]
                })
            }
            var L = t(5178),
                E = t.n(L),
                b = t(9583);

            function S() {
                var e = (0, r.useState)(!1),
                    n = e[0],
                    t = e[1];
                return (0, r.useEffect)(function() {
                    localStorage.getItem("dark") ? (t(!0), document.body.classList.add("dark")) : localStorage.setItem("dark", "0")
                }, []), (0, c.jsxs)("div", {
                    className: E().darkmode,
                    onClick: function() {
                        t(function(e) {
                            return e ? (document.body.classList.remove("dark"), localStorage.setItem("dark", "0")) : (document.body.classList.add("dark"), localStorage.setItem("dark", "1")), !e
                        })
                    },
                    children: [(0, c.jsx)("div", {
                        className: E().icon,
                        style: {
                            transform: "translateY(".concat(n ? "-22px" : "0px", ")")
                        },
                        children: (0, c.jsx)(b.Mei, {
                            size: "22px"
                        })
                    }), (0, c.jsx)("div", {
                        className: E().icon,
                        style: {
                            transform: "translateY(".concat(n ? "-25px" : "0px", ")")
                        },
                        children: (0, c.jsx)(b.TLr, {
                            size: "22px"
                        })
                    })]
                })
            }

            function y() {
                var e = new Date,
                    n = e.getMonth() + 1,
                    t = e.getDate();
                return 12 == n && t >= 24 && t <= 25 ? "-christ" : 1 == n && t <= 2 || 12 == n && 31 == t ? "-newyear" : 5 == n && 5 == t ? "-child" : 10 == n && 9 == t ? "-han" : 2 == n && t >= 14 && t <= 16 || 3 == n && t >= 1 && t <= 3 ? "-sc" : ""
            }
            var N = t(4048),
                M = "myPop",
                I = "https://port-0-kschool2-backend-4i0mp24lct3difg.jocoding.cloud";

            function D() {
                var e, n, t = (0, i.useRouter)(),
                    a = (0, r.useState)("-"),
                    p = a[0],
                    C = a[1],
                    _ = (0, r.useState)("-"),
                    v = _[0],
                    k = _[1],
                    L = (0, r.useState)("-"),
                    E = L[0],
                    b = L[1],
                    D = (0, r.useState)("-"),
                    Z = D[0],
                    z = D[1],
                    T = (0, r.useState)("-"),
                    B = T[0],
                    H = T[1],
                    F = (0, r.useState)(!1),
                    A = F[0],
                    V = F[1],
                    R = (0, r.useState)([]),
                    O = R[0],
                    P = R[1],
                    X = (0, r.useState)(0),
                    K = X[0],
                    Q = X[1],
                    U = (0, r.useState)(!1),
                    Y = U[0],
                    W = U[1],
                    J = (0, r.useState)(0),
                    q = J[0],
                    G = J[1],
                    $ = (0, r.useState)(0),
                    ee = $[0],
                    en = $[1],
                    et = (0, r.useState)(0),
                    eo = et[0],
                    ea = et[1],
                    es = (0, r.useState)(!1),
                    ei = es[0],
                    er = es[1],
                    el = function() {
                        return parseInt(localStorage.getItem(M) || "0")
                    },
                    ec = function() {
                        x.Z.get("".concat(I, "/lead")).then(function(e) {
                            var n = e.data.split("*"),
                                t = n[0],
                                o = n[1],
                                a = [];
                            t.split("/").forEach(function(e, n) {
                                var t = e.split(".");
                                a.push({
                                    pops: t[1],
                                    schoolName: t[0],
                                    schoolRank: (n + 1).toString()
                                })
                            }), P(a), Q(parseInt(o))
                        }).catch(function(e) {
                            return N.Z
                        })
                    },
                    ed = function() {
                        return q
                    },
                    ep = function() {
                        return Y
                    },
                    eh = function e() {
                        W(function(n) {
                            return G(function(t) {
                                return n && t + 1000 > 0 && window.token != undefined ? x.Z.post("".concat(I, "/pop?schoolCode=").concat(localStorage.getItem("schoolCode"), "&count=").concat(Math.min(t + 1000, 200), "&token=").concat(window.token)).then(function(n) {
                                    var t = n.data.split("/");
                                    console.log("new token : " + t);
                                    window.token = t[3], z(t[0]), C(t[2]), k(t[1]), setTimeout(e, 15e3)
                                }).catch(function(n) {
                                    console.log("Error!", (0, N.Z))
                                    (0, N.Z)(n), setTimeout(e, 15e3)
                                }) : setTimeout(e, 15e3), 0
                            }), n
                        })
                    },
                    eu = (e = (0, o.Z)(s().mark(function e() {
                        var n;
                        return s().wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, x.Z.post("".concat(I, "/tmpban"));
                                case 2:
                                    n = parseInt(e.sent.data), localStorage.setItem("lastMacroed", new Date().getTime().toString()), n % 5 == 0 ? window.localStorage.setItem("banned", "1") : window.localStorage.setItem("macro", "1");
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }, e)
                    })), function() {
                        return e.apply(this, arguments)
                    });
                return ((0, r.useEffect)(function() {
                    eh()
                }, []), (0, r.useEffect)(function() {
                    var e = function() {
                            eu()
                        },
                        n = function() {
                            var e = document.getElementById("text.cnt");
                            e && (e.style.animationName = "tr", setTimeout(function() {
                                e.style.animationName = ""
                            }, 100), document.documentElement.style.setProperty("--rand", Math.floor(5 * Math.random()).toString()))
                        },
                        o = function() {
                            ei || (localStorage.setItem(M, (el() + 1).toString()), H(el().toString()), n(), G(function(e) {
                                return e + 1
                            }), ea(function(e) {
                                return (setTimeout(function() {
                                    ea(function(e) {
                                        return e <= 1 ? 0 : e - 1
                                    })
                                }, 1e3), e + 1 > 200) ? (localStorage.setItem("macroed", (parseInt(localStorage.getItem("macroed") || "0") + 1).toString()), er(!0), setTimeout(function() {
                                    er(!1)
                                }, 600), localStorage.setItem("lastMacroed", new Date().getTime().toString()), 0) : e + 1
                            }))
                        };
                    if (b(localStorage.getItem("schoolName") || "-"), navigator.webdriver) {
                        e();
                        return
                    }(null == window.localStorage.getItem("schoolName") || null == window.localStorage.getItem("schoolCode")) && t.push("https://kschool.click/findSchool"), H(el().toString()), document.onkeydown = function(n) {
                        ep() && (!n.repeat && n.isTrusted && o(), n.isTrusted || e())
                    }, document.onpointerdown = function(n) {
                        ep() && (n.isTrusted && n.clientX && n.clientY ? o() : e())
                    }
                }, [Y, B, t, H]), (0, r.useEffect)(function() {
                    if ("undefined" != typeof localStorage) {
                        var e = localStorage.getItem("lastMacroed") || "0",
                            n = new Date(Number(e)).getTime(),
                            t = new Date().getTime();
                        if ("1" == (localStorage.getItem("banned") || "")) {
                            t - n > 864e6 && (localStorage.setItem("lastMacroed", "0"), localStorage.setItem("banned", "0"));
                            return
                        }
                        t - n > 6e5 ? localStorage.setItem("lastMacroed", "0") : er(!0)
                    }
                }), "undefined" != typeof localStorage && "1" == (localStorage.getItem("banned") || "0")) ? (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("div", {
                        className: "macro-container",
                        children: (0, c.jsxs)("div", {
                            className: "macro",
                            children: [(0, c.jsx)("span", {
                                className: "title",
                                children: "\uD83C\uDF89異뺥븯�⑸땲��!! 10�� ���꾩븘�� �뱁븯���듬땲��!!\uD83C\uDF89"
                            }), (0, c.jsx)("div", {
                                className: "contents",
                                children: "留ㅽ겕濡� �ъ슜 5�� �댁긽 媛먯��섏뀲�듬땲��!"
                            }), (0, c.jsxs)("div", {
                                style: {
                                    borderTop: "1px solid #ccc",
                                    paddingTop: "5px",
                                    marginTop: "5px"
                                },
                                children: ["릭롤", " ", (0, c.jsx)("a", {
                                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                    children: "\uD83D\uDC49�ш린\uD83D\uDC48"
                                }), "좋아하시죠?"]
                            })]
                        })
                    }), (0, c.jsx)("style", {
                        children: "\n        .macro-container {\n          position: absolute;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%,-50%);\n          border-radius: 16px;\n          border: 1px solid #ccc;\n          padding: 30px;\n        }\n\n        .title {\n          font-size: 20px;\n        }\n\n        .contents {\n          padding-top: 10px;\n          font-size: 17px;\n        }\n      "
                    })]
                }) : ei ? (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsx)("div", {
                        className: "macro-container",
                        children: (0, c.jsxs)("div", {
                            className: "macro",
                            children: [(0, c.jsx)("span", {
                                className: "title",
                                children: "�좑툘 留ㅽ겕濡� �ъ슜 媛먯�"
                            }), (0, c.jsx)("div", {
                                className: "contents",
                                children: "理쒓렐 �쒕쾭�� 遺��댁쓣 二쇰뒗 媛��� �� �먯씤�� 留ㅽ겕濡� �ъ슜�� �먯젣�댁＜�⑥쑝硫� �⑸땲��."
                            }), (0, c.jsxs)("div", {
                                style: {
                                    borderTop: "1px solid #ccc",
                                    paddingTop: "5px",
                                    marginTop: "5px"
                                },
                                children: ["�� 留ㅽ겕濡� �댁슜�� 10遺� ���꾩븘�껋엯�덈떎. ���꾩븘�� �댁� �붿껌��", " ", (0, c.jsx)("a", {
                                    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                                    children: "\uD83D\uDC49�ш린\uD83D\uDC48"
                                }), "�먯꽌 �댁＜�몄슂. �먰븳 5�� 留ㅽ겕濡� �댁슜�� 10�� 諛� �대땲 議곗떖�섏꽭��.", (0, c.jsxs)("p", {
                                    children: ["���꾩븘�� �댁�源뚯�", " ", Math.floor((new Date(Number(localStorage.getItem("lastMacroed") || "0")).getTime() + 6e5 - new Date().getTime()) / 1e3), "珥�"]
                                })]
                            })]
                        })
                    }), (0, c.jsx)("style", {
                        children: "\n      .macro-container {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%,-50%);\n        border-radius: 16px;\n        border: 1px solid #ccc;\n        padding: 30px;\n      }\n\n      .title {\n        font-size: 20px;\n      }\n\n      .contents {\n        padding-top: 10px;\n        font-size: 17px;\n      }\n    "
                    })]
                }) : ep() ? (0, c.jsxs)(l.default, {
                    children: [(0, c.jsx)(j, {}), A ? (0, c.jsx)(d, {
                        onClose: function() {
                            V(!1)
                        },
                        totalSchoolCount: K,
                        leaderboard: O
                    }) : null, (0, c.jsx)("img", {
                        src: "https://kschool.click/punch0".concat(y(), ".png"),
                        alt: "",
                        style: {
                            display: "none"
                        }
                    }), (0, c.jsx)("img", {
                        src: "https://kschool.click/punch1".concat(y(), ".png"),
                        alt: "",
                        style: {
                            display: "none"
                        }
                    }), (0, c.jsxs)("div", {
                        className: h().pop,
                        children: [(0, c.jsx)("div", {
                            className: g()([h().mainBtn, h().btnSize]),
                            children: (0, c.jsx)(w(), {
                                href: "https://twitter.com/_awesome_dream",
                                children: "\uD83C\uDF10"
                            })
                        }), (0, c.jsx)("div", {
                            className: g()([h().searchSchoolBtn, h().btnSize]),
                            children: (0, c.jsx)(w(), {
                                href: "https://kschool.click/findSchool",
                                children: "\uD83D\uDD0D"
                            })
                        }), (0, c.jsxs)("div", {
                            className: h().title,
                            children: [(0, c.jsx)("h1", {
                                onClick: function() {
                                    en(ee + 1)
                                },
                                children: ee > 1e3 ? "LOOHCS-K" : "K-SCHOOL"
                            }), (0, c.jsx)("img", {
                                className: h().jo,
                                src: "https://kschool.click/jo.png",
                                draggable: "false",
                                alt: ""
                            }), (0, c.jsx)(S, {})]
                        }), (0, c.jsx)("div", {
                            className: h().school,
                            children: (0, c.jsxs)("div", {
                                className: h().schoolData,
                                children: [(0, c.jsx)("div", {
                                    className: g()([h().fontSize, h().schoolRank]),
                                    children: 1 == (n = parseInt(v)) ? "\uD83E\uDD47" : 2 == n ? "\uD83E\uDD48" : 3 == n ? "\uD83E\uDD49" : n
                                }), (0, c.jsx)("div", {
                                    className: g()([h().fontSize, h().schoolName]),
                                    children: E
                                }), (0, c.jsx)("span", {
                                    className: g()([h().schoolTier, h().tierIcon, function(e) {
                                        for (var n = parseInt(e), t = 0; t < m.length; t++)
                                            if (n >= m[t]) return h()[u[t]];
                                        return "none"
                                    }(p)])
                                }), (0, c.jsx)("div", {
                                    className: g()([h().fontSize, h().schoolCount]),
                                    children: p
                                })]
                            })
                        }), (0, c.jsx)("div", {
                            className: h().count,
                            id: "text.cnt",
                            children: B
                        }), (0, c.jsxs)("div", {
                            className: g()([h().count, h().cps]),
                            style: {
                                color: eo < 10 ? "white" : eo < 25 ? "yellow" : eo < 50 ? "orange" : "red",
                                transform: "scale(".concat(1 + Math.max(eo - 70, 0) / 1.1, ")"),
                                transition: "all .3s"
                            },
                            children: [eo, " / sec"]
                        }), (0, c.jsx)("div", {
                            className: g()([h().popImage]),
                            style: 0 == q % 2 ? {
                                backgroundImage: "url(https://kschool.click/punch0".concat(y(), ".png)")
                            } : {
                                backgroundImage: "url(https://kschool.click/punch1".concat(y(), ".png)")
                            }
                        }), (0, c.jsx)("div", {
                            className: h().ads,
                            children: (0, c.jsx)("center", {
                                children: (0, c.jsx)("iframe", {
                                    style: {
                                        overflow: "hidden",
                                        border: "none",
                                        display: "block"
                                    },
                                    width: "724",
                                    scrolling: "no",
                                    src: "https://tab2.clickmon.co.kr/pop/wp_ad_728.php?PopAd=CM_M_1003067%7C%5E%7CCM_A_1124013%7C%5E%7CAdver_M_1046207&mon_rf=REFERRER_URL&mon_direct_url=URLENCODE_PASSBACK_INPUT"
                                })
                            })
                        }), (0, c.jsx)("div", {
                            className: h().leaderboardContx,
                            onClick: function() {
                                V(!0), ec()
                            },
                            children: (0, c.jsxs)("div", {
                                className: h().leaderboardInfo,
                                children: [(0, c.jsxs)("div", {
                                    className: g()(h().totalCount, h().fontSize),
                                    children: ["\uD83C\uDF0E ", Z]
                                }), (0, c.jsx)("div", {
                                    className: g()(h().showLeaderboard, h().fontSize),
                                    children: "��\uD83C\uDFC6"
                                })]
                            })
                        }), (0, c.jsxs)("div", {
                            style: {
                                display: "none"
                            },
                            children: [ed(), ep() ? "a" : "b"]
                        })]
                    }), (0, c.jsx)("style", {
                        children: "* {color: var(--color);}}"
                    })]
                }) : (0, c.jsxs)(c.Fragment, {
                    children: [(0, c.jsxs)("div", {
                        className: h().title,
                        children: [(0, c.jsx)("h1", {
                            children: "K-SCHOOL"
                        }), (0, c.jsx)("img", {
                            className: h().jo,
                            src: "https://kschool.click/jo.png",
                            draggable: "false",
                            alt: ""
                        }), (0, c.jsx)(S, {})]
                    }), (0, c.jsxs)("div", {
                        className: h().captchaContainer,
                        children: [(0, c.jsx)("div", {
                            className: h().containerHeader,
                            children: "罹≪콬 �몄쬆"
                        }), (0, c.jsx)("div", {
                            className: g()([h().fontSize, h().capconBody]),
                            children: "留ㅽ겕濡쒕줈 �명빐 �쒕쾭�� 留롮� 遺��댁씠 媛��댁�怨� �덉뒿�덈떎. 留ㅽ겕濡� 諛⑹�瑜� �꾪빐 罹≪콬 �몄쬆�� 吏꾪뻾�� 二쇱꽭��."
                        }), (0, c.jsx)("div", {
                            className: h().capcon,
                            children: (0, c.jsx)(f.Z, {
                                sitekey: "7b343af6-9f17-4e45-b715-3022da43b6c9",
                                onVerify: function(e) {
                                    setTimeout(function() {
                                        W(function(e) {
                                            return !0
                                        }), x.Z.get("".concat(I, "/register?token=").concat(e)).then(function(e) {
                                            e.data.error ? W(function(e) {
                                                return !1
                                            }) : (window.token = e.data, x.Z.get("".concat(I, "/first?schoolCode=").concat(localStorage.getItem("schoolCode"))).then(function(e) {
                                                var n = e.data.split("/");
                                                C(n[2]), k(n[1]), z(n[0])
                                            }), setTimeout(function() {
                                                W(function(e) {
                                                    return !1
                                                })
                                            }, 864e6))
                                        }).catch(function(e) {
                                            return N.Z
                                        })
                                    }, 500)
                                }
                            })
                        })]
                    }), (0, c.jsxs)("div", {
                        style: {
                            display: "none"
                        },
                        children: [ed(), ep() ? "a" : "b"]
                    }), (0, c.jsx)("style", {
                        children: "* {color: var(--color);}"
                    })]
                })
            }
        },
        5424: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["https://kschool.click/pop", function() {
                return t(9401)
            }])
        },
        5178: function(e) {
            e.exports = {
                darkmode: "darkmode_darkmode__UuSRr",
                icon: "darkmode_icon__pI_o1"
            }
        },
        9034: function(e) {
            e.exports = {
                count: "pop_count__An9rw",
                leaderboardInfo: "pop_leaderboardInfo__fWpFP",
                ad: "pop_ad__t_HJ7",
                popImage: "pop_popImage__U8QxW",
                ads: "pop_ads__KO_Ma",
                mainBtn: "pop_mainBtn__h7bzx",
                searchSchoolBtn: "pop_searchSchoolBtn__Cysq4",
                title: "pop_title__XnUNI",
                schoolData: "pop_schoolData__p6aVs",
                schoolRank: "pop_schoolRank__5G_Q0",
                schoolTier: "pop_schoolTier__C8w2p",
                schoolName: "pop_schoolName__NmsMa",
                schoolCount: "pop_schoolCount__ApptX",
                secretMode: "pop_secretMode__Bc52F",
                leaderboardContx: "pop_leaderboardContx__OgZMc",
                showLeaderboard: "pop_showLeaderboard__5EgPB",
                totalCount: "pop_totalCount__ASgig",
                fontSize: "pop_fontSize__3i_cH",
                tierIcon: "pop_tierIcon__3XiEd",
                jo: "pop_jo__r9VnB",
                btnSize: "pop_btnSize__hMp4z",
                bronze: "pop_bronze__fnfJk",
                silver: "pop_silver__L4hFb",
                gold: "pop_gold__3kwh_",
                platinum: "pop_platinum__AOBKN",
                diamond: "pop_diamond__lfaZ7",
                none: "pop_none__sgn4Z",
                captchaContainer: "pop_captchaContainer__50OTz",
                containerHeader: "pop_containerHeader__xhDfs",
                capconBody: "pop_capconBody__KU8Vi",
                capcon: "pop_capcon__h6RDO",
                cps: "pop_cps__YpMe_"
            }
        },
        5033: function(e) {
            e.exports = {
                container: "snow_container__NeYwj",
                glass: "snow_glass__koI49"
            }
        }
    },
    function(e) {
        e.O(0, [445, 308, 774, 888, 179], function() {
            return e(e.s = 5424)
        }), _N_E = e.O()
    }
]);