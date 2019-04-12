parcelRequire = function (e, r, n, t) {
    var i = "function" == typeof parcelRequire && parcelRequire,
        o = "function" == typeof require && require;

    function u(n, t) {
        if (!r[n]) {
            if (!e[n]) {
                var f = "function" == typeof parcelRequire && parcelRequire;
                if (!t && f) return f(n, !0);
                if (i) return i(n, !0);
                if (o && "string" == typeof n) return o(n);
                var c = new Error("Cannot find module '" + n + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function (r) {
                return e[n][1][r] || r
            }, p.cache = {};
            var l = r[n] = new u.Module(n);
            e[n][0].call(l.exports, p, l, l.exports, this)
        }
        return r[n].exports;

        function p(e) {
            return u(p.resolve(e))
        }
    }
    u.isParcelRequire = !0, u.Module = function (e) {
        this.id = e, this.bundle = u, this.exports = {}
    }, u.modules = e, u.cache = r, u.parent = i, u.register = function (r, n) {
        e[r] = [function (e, r) {
            r.exports = n
        }, {}]
    };
    for (var f = 0; f < n.length; f++) u(n[f]);
    if (n.length) {
        var c = u(n[n.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = c : "function" == typeof define && define.amd ? define(function () {
            return c
        }) : t && (this[t] = c)
    }
    return u
}({
    "bZv0": [function (require, module, exports) {
        module.exports = "spot_black.6febd19c.png";
    }, {}],
    "Focm": [function (require, module, exports) {
        "use strict";
        var e = t(require("/images/spot_black.png"));

        function t(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        mapboxgl.accessToken = "pk.eyJ1Ijoic3VuZ2t1a2tpbSIsImEiOiJjamR3ZTM1OTUwNXY0MnFtb2E0OG04c2lpIn0.nNFmA7VqzxH3lTST9fiK4g";
        var o, r = new mapboxgl.Map({
            container: "map",
            style: "mapbox://styles/mapbox/navigation-preview-day-v2",
            center: [55.345276, 20.681379],
            zoom: 1.5
        });
        r.on("mousemove", function (e) {}), window.features = [{
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [135.4776404, 34.6783987]
            },
            properties: {
                museum_count: 1,
                name: "Japan Osaka"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [139.75298, 35.7091074]
            },
            properties: {
                museum_count: 8,
                name: "Japan Tokyo"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-77.0846155, 38.8935755]
            },
            properties: {
                museum_count: 4,
                name: "USA east"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-119.63646607811285, 37.62166841191262]
            },
            properties: {
                museum_count: 2,
                name: "USA west"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-104.6537497, 37.2582904]
            },
            properties: {
                museum_count: 6,
                name: "USA ect"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [145.5768603, -16.8804789]
            },
            properties: {
                museum_count: 1,
                name: "AUSTRAILIA Cairns"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [150.6517949, -33.8479271]
            },
            properties: {
                museum_count: 1,
                name: "AUSTRAILIA Sydney"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [171.65902071988393, -43.339630362187066]
            },
            properties: {
                museum_count: 1,
                name: "NEW ZEALAND"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-73.8703841, 45.5579564]
            },
            properties: {
                museum_count: 1,
                name: "CANADA MONTREAL"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-114.2142365, 51.0130333]
            },
            properties: {
                museum_count: 1,
                name: "CANADA CALGARY"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-102.9887805, 57.0882106]
            },
            properties: {
                museum_count: 3,
                name: "CANADA"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-79.4578006, 43.6430078]
            },
            properties: {
                museum_count: 1,
                name: "CANADA TORONTO"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [26.479994411132992, 63.30047989554316]
            },
            properties: {
                museum_count: 1,
                name: "EUROPE FINLAND"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [10.364291820486585, 51.84189746515267]
            },
            properties: {
                museum_count: 2,
                name: "EUROPE GERMANY"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [2.380981070993272, 48.760181558556326]
            },
            properties: {
                museum_count: 1,
                name: "EUROPE FRANCE"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [30.6894055, 39.0015493]
            },
            properties: {
                museum_count: 1,
                name: "EUROPE TURKEY"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [18.3839918, 47.1556942]
            },
            properties: {
                museum_count: 1,
                name: "EUROPE HUNGARY"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [22.2384469, 38.1245117]
            },
            properties: {
                museum_count: 1,
                name: "EUROPE GREECE"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [123.13219338267453, 10.109205250718531]
            },
            properties: {
                museum_count: 2,
                name: "PHILLIPINES"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [102.24431108128505, 15.708253001501035]
            },
            properties: {
                museum_count: 2,
                name: "THAILAND"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [78.42420521312602, 23.562988640162445]
            },
            properties: {
                museum_count: 1,
                name: "INDIA"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [101.9916116369136, 5.386435151993808]
            },
            properties: {
                museum_count: 1,
                name: "MALAYSIA"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-102.41966036947927, 24.99650323762758]
            },
            properties: {
                museum_count: 1,
                name: "AMERICA MEXICO"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-.2147489, 5.5912077]
            },
            properties: {
                museum_count: 1,
                name: "AFRICA GHANA (Acra)"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [-6.017481373549742, 32.97832278716733]
            },
            properties: {
                museum_count: 1,
                name: "AFRICA MOROCCO"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [40.5813355, 24.0133287]
            },
            properties: {
                museum_count: 1,
                name: "SAUDI ARABIA"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [116.1172816, 39.9385466]
            },
            properties: {
                museum_count: 1,
                name: "China Beijing"
            }
        }, {
            type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [22.2384469, 38.1245117]
            },
            properties: {
                museum_count: 1,
                name: "EUROPE GREECE"
            }
        }], r.on("load", function () {
            r.loadImage("https://github.com/sungkuk5420/nomad-coders-map/blob/master/images/spot_black.png", function (e, t) {
                if (e) throw e;
                r.addImage("cat", t), r.addSource("clusters", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: window.features
                    }
                }), r.addLayer({
                    id: "clusters-label",
                    type: "symbol",
                    source: "clusters",
                    layout: {
                        "text-field": "{museum_count}",
                        "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                        "icon-allow-overlap": !0,
                        "icon-ignore-placement": !0,
                        "text-size": 16,
                        "icon-image": "cat",
                        "icon-size": .8
                    }
                })
            })
        }), r.on("click", "clusters-label", function (e) {
            console.log(e), document.getElementById("searchtext").value = e.features[0].properties.name, window.userfilter(e.features[0].properties.name), r.flyTo({
                center: e.features[0].properties.coordinates
            })
        }), window.userfilter = function (e, t) {
            window.keyword = e.toUpperCase(), console.log(e), o && clearTimeout(o), o = setTimeout(function () {
                var e = document.querySelectorAll(".user");
                console.log(e);
                var o = [],
                    r = !1;
                document.querySelector(".first-row-div") && document.querySelector(".first-row-div").classList.remove("first-row-div");
                for (var n = 0; n < e.length; n++) {
                    var a = e[n],
                        u = a.querySelector(".username").textContent.toUpperCase(),
                        s = a.querySelector(".area.tooltiptext").textContent.toUpperCase(),
                        i = window.keyword; - 1 !== u.indexOf(i) || -1 !== s.indexOf(i) ? (a.style.display = "table", r || (console.log("first dom is ", u), a.classList.add("first-row-div"), r = !0), o.push({
                        name: u,
                        area: s
                    })) : a.style.display = "none"
                }
                t && t(o)
            }, 500)
        }, window.makerReLoad = function (e) {
            var t = e[0].area.split(",");
            r.removeLayer("clusters-label");
            var o = window.features.filter(function (e) {
                return t.includes(e.properties.name.toString().toUpperCase())
            });
            r.getSource("clusters").setData({
                type: "FeatureCollection",
                features: o
            }), r.addLayer({
                id: "clusters-label",
                type: "symbol",
                source: "clusters",
                layout: {
                    "text-field": "{museum_count}",
                    "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                    "icon-allow-overlap": !0,
                    "icon-ignore-placement": !0,
                    "text-size": 16,
                    "icon-image": "cat",
                    "icon-size": .08
                }
            })
        };
    }, {
        "/images/spot_black.png": "bZv0"
    }]
}, {}, ["Focm"], null)
//# sourceMappingURL=nomad-coders-map.dc7b4267.map