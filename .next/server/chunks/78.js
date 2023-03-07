exports.id = 78;
exports.ids = [78];
exports.modules = {

/***/ 7153:
/***/ ((module) => {

// Exports
module.exports = {
	"more": "More_more__3kcVc",
	"more__button": "More_more__button__NwNLK"
};


/***/ }),

/***/ 3216:
/***/ ((module) => {

// Exports
module.exports = {
	"portfolio-card-list": "PortfolioCardList_portfolio-card-list__324FW",
	"portfolio_card": "PortfolioCardList_portfolio_card__pOAeT",
	"elements": "PortfolioCardList_elements__KJrqI"
};


/***/ }),

/***/ 8266:
/***/ ((module) => {

// Exports
module.exports = {
	"portfolionav__link": "PortfolioNav_portfolionav__link__8XG4m",
	"active": "PortfolioNav_active__iYhCl",
	"portfolionav__menu": "PortfolioNav_portfolionav__menu__9H73p"
};


/***/ }),

/***/ 6657:
/***/ ((module) => {

// Exports
module.exports = {
	"page": "Portfolio_2_page__NSTlj",
	"portfolio": "Portfolio_2_portfolio__Gp2pi",
	"scrolltop": "Portfolio_2_scrolltop__opnbg"
};


/***/ }),

/***/ 2964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_PortfolioCardList)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/PortfolioCardList.module.css
var PortfolioCardList_module = __webpack_require__(3216);
var PortfolioCardList_module_default = /*#__PURE__*/__webpack_require__.n(PortfolioCardList_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/More.module.css
var More_module = __webpack_require__(7153);
var More_module_default = /*#__PURE__*/__webpack_require__.n(More_module);
;// CONCATENATED MODULE: ./components/More.js


const More = ({ addCounter  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: (More_module_default()).more,
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            type: "button",
            className: (More_module_default()).more__button,
            onClick: addCounter,
            children: "Ещё"
        })
    });
};

// EXTERNAL MODULE: ./styles/Image.module.css
var Image_module = __webpack_require__(1190);
var Image_module_default = /*#__PURE__*/__webpack_require__.n(Image_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Image.js




function Images({ image , onCardClick  }) {
    function handleClick() {
        onCardClick(image);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
            className: (Image_module_default()).image,
            src: image.src,
            alt: "",
            width: 150,
            height: 150,
            onClick: handleClick,
            unoptimized: true
        })
    });
}
/* harmony default export */ const Image = (Images);

// EXTERNAL MODULE: ./constants/index.js
var constants = __webpack_require__(6301);
;// CONCATENATED MODULE: ./components/PortfolioCardList.js






function PortfolioCardList({ arrayPortfolio , type , onCardClick  }) {
    const [counter, setCounter] = (0,external_react_.useState)();
    const [moreCard, setMoreCard] = (0,external_react_.useState)();
    const determiningCountCards = (width)=>{
        if (width > constants/* WIDTH_1279 */.Og) {
            setCounter(constants/* NUMBER_OF_CARDS_OVER_1279 */.iw);
            return setMoreCard(constants/* ADD_NUMBER_CARD_3 */.Y9);
        } else if (width > constants/* WIDTH_767 */.fN) {
            setCounter(constants/* NUMBER_OF_CARDS_OVER_767 */.UZ);
            return setMoreCard(constants/* ADD_NUMBER_CARD_2 */.Or);
        } else setCounter(constants/* NUMBER_OF_CARDS_LESS_767 */.fC);
        return setMoreCard(constants/* ADD_NUMBER_CARD_1 */.M2);
    };
    (0,external_react_.useEffect)(()=>{
        const width = window.innerWidth;
        determiningCountCards(width);
    }, []);
    const addCounter = ()=>setCounter((...prev)=>Number(prev) + moreCard);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: (PortfolioCardList_module_default()).portfolio_card,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: (PortfolioCardList_module_default()).elements,
                children: type === "all" ? arrayPortfolio.slice(0, counter).map((image, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        image: image,
                        onCardClick: onCardClick
                    }, index);
                }) : arrayPortfolio.map((image, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx(Image, {
                        src: image.src,
                        image: image,
                        onCardClick: onCardClick
                    }, index);
                })
            }),
            type === "all" && arrayPortfolio.length > counter && /*#__PURE__*/ jsx_runtime_.jsx(More, {
                addCounter: addCounter
            })
        ]
    });
}
;
/* harmony default export */ const components_PortfolioCardList = (PortfolioCardList);


/***/ }),

/***/ 6731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8266);
/* harmony import */ var _styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);





function PortfolioNav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: (_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__menu),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/portfolio",
                    className: router.pathname == "/portfolio" ? `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)} ${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)}`,
                    children: "Все работы"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/portfolio_1",
                    className: router.pathname == "/portfolio_1" ? `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)} ${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)}`,
                    children: "Сложное окрашивание"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/portfolio_2",
                    className: router.pathname == "/portfolio_2" ? `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)} ${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)}`,
                    children: "Креативные"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/portfolio_3",
                    className: router.pathname == "/portfolio_3" ? `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)} ${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)}`,
                    children: "Стрижки"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/portfolio_4",
                    className: router.pathname == "/portfolio_4" ? `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)} ${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)}`,
                    children: "Окрашивание в один тон"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/portfolio_5",
                    className: router.pathname == "/portfolio_5" ? `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)} ${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)}` : `${(_styles_PortfolioNav_module_css__WEBPACK_IMPORTED_MODULE_4___default().portfolionav__link)}`,
                    children: "Тонирование и уход"
                })
            ]
        })
    });
}
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioNav);


/***/ })

};
;