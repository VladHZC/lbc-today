!function () {
    var e;
    if (void 0 === window.jQuery || "1.11.1" !== window.jQuery.fn.jquery) {
        var t = document.createElement("script");
        t.setAttribute("type", "text/javascript"), t.setAttribute("src", "jquery.min.js"), t.readyState ? t.onreadystatechange = function () {
            "complete" != this.readyState && "loaded" != this.readyState || a()
        } : t.onload = a, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(t)
    } else e = window.jQuery, r();

    function a() {
        e = window.jQuery.noConflict(!0), r()
    }

    function i(e) {
        var t = " " + document.cookie, a = " " + e + "=", i = null, r = 0, n = 0;
        return 0 < t.length && -1 != (r = t.indexOf(a)) && (r += a.length, -1 == (n = t.indexOf(";", r)) && (n = t.length), i = unescape(t.substring(r, n))), i
    }

    function r() {
        var s, d,
            k = (s = i("_locale") || void 0, d = !("object" != typeof Intl || !Intl || "function" != typeof Intl.NumberFormat), {
                toLocaleString: function (e, t) {
                    var a = Number(e);
                    if (isNaN(a)) return e;
                    var i, r, n, o, c = t && t.minDecimalPlaces, l = t && t.maxDecimalPlaces;
                    return void 0 === c || void 0 === l ? (i = a, d ? i.toLocaleString(s) : i.toLocaleString()) : (r = a, n = c, o = l, d ? r.toLocaleString(s, {
                        minimumFractionDigits: n,
                        maximumFractionDigits: o
                    }) : r.toFixed(o))
                }
            });

        function C(e, t) {
            var a = t;
            t = Math.pow(10, t);
            for (var i = ["K", "M", "B", "T"], r = i.length - 1; 0 <= r; r--) {
                var n = Math.pow(10, 3 * (r + 1));
                if (n <= e) {
                    1e3 == (e = Math.round(e * t / n) / t) && r < i.length - 1 && (e = 1, r++), e = k.toLocaleString(Number(e), {
                        minDecimalPlaces: a,
                        maxDecimalPlaces: a
                    }), e += " " + i[r];
                    break
                }
            }
            return e
        }

        function P(e, t) {
            return "BTC" == t ? function (e) {
                e = 1e3 <= e ? k.toLocaleString(Math.round(e)) : 1 <= e ? k.toLocaleString(e, {
                    minDecimalPlaces: 8,
                    maxDecimalPlaces: 8
                }) : e < 1e-8 ? Number(e).toExponential(4) : k.toLocaleString(e, {
                    minDecimalPlaces: 8,
                    maxDecimalPlaces: 8
                });
                return e
            }(e) : function (e) {
                e = 1 <= e ? 1e5 <= e ? k.toLocaleString(Math.round(e)) : k.toLocaleString(e, {
                    minDecimalPlaces: 2,
                    maxDecimalPlaces: 2
                }) : e < 1e-6 ? Number(e).toExponential(2) : k.toLocaleString(e, {
                    minDecimalPlaces: 6,
                    maxDecimalPlaces: 6
                });
                return e
            }(e)
        }

        function M(e, t, a) {
            var i = t, r = {
                btc: "฿",
                usd: "$",
                eur: "€",
                cny: "¥",
                gbp: "£",
                cad: "$",
                rub: "<img src='/static/img/fiat/ruble.gif'/>",
                hkd: "$",
                jpy: "¥",
                aud: "$",
                brl: "R$",
                inr: "₹",
                krw: "₩",
                mxn: "$",
                idr: "Rp",
                chf: "Fr"
            };
            return e.toLowerCase() in r && (i = r[e.toLowerCase()] + i), a && (i = i + ' <span style="font-size:9px">' + e.toUpperCase() + "</span>"), i
        }

        function D(e, t, a, i, r, n, o, c, l, s, d, p, m, u, h, g, v, f, x) {
            var y = f ? "https://s2.coinmarketcap.com/static/img/coins/64x64/" + f + ".png" : "https://files.coinmarketcap.com/static/widget/coins_legacy/64x64/" + e + ".png",
                b = "#009e73";
            l < 0 && (b = "#d94040"), l = k.toLocaleString(l, {
                minDecimalPlaces: 2,
                maxDecimalPlaces: 2
            }), valTickerHTML = m ? "(" + a + ")" : "", valPrice = n ? P(n, i) : "?", valPercentHTML = l ? '<span style="color:' + b + '">(' + l + "%)" : "", valMarketCap = s ? C(s, 2) : "?", valVolume = d ? C(d, 2) : "?", poweredBy = "zh" == x ? "由CoinMarketCap荣幸呈现" : "Powered by CoinMarketCap", o ? (mainLineHeight = 25, valPriceSecondary = c ? P(c, o) : "?", secondaryHTML = '<br><span style="font-size: 12px; color: rgba(39, 52, 64, 0.5)">' + valPriceSecondary + " " + o + " </span>") : (mainLineHeight = 30, secondaryHTML = "");
            var w = "utm_medium=widget&utm_campaign=cmcwidget&utm_source=" + location.hostname + "&utm_content=" + e,
                L = '<div style="border:2px solid #e1e5ea;border-radius: 10px;font-family: \'Helvetica Neue\',Helvetica,Arial,sans-serif;min-width:285px;">    <div>        <div style="float:right;width:67%;border: none;text-align:left;padding:5px 0px;line-height:' + mainLineHeight + 'px;">            <span style="font-size: 18px;"><a href="https://coinmarketcap.com/currencies/' + e + "/?" + w + '" target="_blank">' + t + " " + valTickerHTML + '</a></span> <br>            <span style="font-size: 16px;">' + valPrice + " " + i + " " + valPercentHTML + "</span></span>            " + secondaryHTML + '        </div>        <div style="text-align:center;padding:5px 0px;width:33%;"><img src="' + y + '"></div>    </div>';
            return L += function (e, t, a, i, r, n, o, c, l) {
                var s = 0, d = 0, p = "", m = "", u = "", h = "zh" == l ? "交易量（24小时）" : "VOLUME";
                if (e && s++, t && s++, a && s++, 0 == s) return "";
                1 == s && (d = 100), 2 == s && (d = 49.8), 3 == s && (d = 33), e && (borderWidth = 0, (a || t) && (borderWidth = 1), p = '                    <div style="text-align:center;float:left;width:' + d + "%;font-size:12px;padding:12px 0;border-right:" + borderWidth + 'px solid #e1e5ea;line-height:1.25em;">                        ' + ("zh" == l ? "排名" : "RANK") + '                        <br><br>                        <span style="font-size: 17px; ">' + n + "</span>                    </div>");
                a && (borderWidth = 0, t && (borderWidth = 1), m = '                    <div style="text-align:center;float:left;width:' + d + "%;font-size:12px;padding:12px 0 16px 0;border-right:" + borderWidth + 'px solid #e1e5ea;line-height:1.25em;">                        ' + ("zh" == l ? "市值" : "MARKET CAP") + '                        <br><br>                        <span style="font-size: 14px; ">' + M(r, o, i) + "</span>                    </div>");
                t && (u = '                    <div style="text-align:center;float:left;width:' + d + '%;font-size:12px;padding:12px 0 16px 0;line-height:1.25em;">                        ' + h + '                        <br><br>                        <span style="font-size: 14px; ">' + M(r, c, i) + "</span>                    </div>");
                return detailedHTML = '<div style="border-top: 1px solid #e1e5ea;clear:both;">' + p + m + u + "</div>", detailedHTML
            }(u, h, g, v, r, p, valMarketCap, valVolume, x), L += '    <div style="border-top: 1px solid #e1e5ea;text-align:center;clear:both;font-size:10px;font-style:italic;padding:5px 0;">        <a href="https://coinmarketcap.com?' + w + '" target="_blank">' + poweredBy + "</a>    </div></div>"
        }

        e(document).ready(function (S) {
            S(".coinmarketcap-currency-widget").each(function () {
                var v = S(this).attr("data-currency"), f = S(this).data("currencyid"),
                    x = S(this).attr("data-base").toUpperCase(), y = S(this).attr("data-secondary"),
                    b = S(this).data("language");
                b = b || "en-us", y = "BTC" == (y = y ? y.toUpperCase() : null) || "USD" == y ? y : null;
                var w = S(this).attr("data-stats");
                w = (w = w ? w.toUpperCase() : null) == x ? x : "USD";
                var e, L = !1 !== S(this).data("ticker"), k = !1 !== S(this).data("rank"),
                    C = !1 !== S(this).data("marketcap"), P = !1 !== S(this).data("volume"),
                    M = !1 !== S(this).data("statsticker"), _ = this;
                e = f ? "https://widgets.coinmarketcap.com/v2/ticker/" + f + "/?ref=widget&convert=" + x : "https://widgets.coinmarketcap.com/v1/ticker/" + v + "/?ref=widget&convert=" + x, S.get({
                    url: e,
                    success: function (e) {
                        if (e = e.length ? e[0] : e.data, v || (v = e.website_slug), f) var t = e.quotes[x.toUpperCase()],
                            a = y ? e.quotes[y.toUpperCase()] : null, i = parseFloat(t.price),
                            r = a ? parseFloat(a.price) : null, n = parseInt(e.quotes[w].market_cap),
                            o = parseInt(e.quotes[w].volume_24h), c = Number(t.percent_change_24h); else {
                            var l = "price_" + x.toLowerCase(), s = y ? "price_" + y.toLowerCase() : null,
                                d = "market_cap_" + w.toLowerCase(), p = "24h_volume_" + w.toLowerCase();
                            i = parseFloat(e[l]), r = s ? parseFloat(e[s]) : null, n = parseInt(e[d]), o = parseInt(e[p]), c = Number(e.percent_change_24h)
                        }
                        var m = e.name, u = e.symbol, h = e.rank,
                            g = D(v, m, u, x, w, i, y, r, c, n, o, h, L, k, P, C, M, f, b);
                        S(_).html(g), S(_).find("a").css({"text-decoration": "none", color: "#1070e0"})
                    }
                })
            })
        })
    }
}()