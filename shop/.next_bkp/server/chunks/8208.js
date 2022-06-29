"use strict";
exports.id = 8208;
exports.ids = [8208];
exports.modules = {

/***/ 895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ cartAnimation)
/* harmony export */ });
const cartAnimation = (event)=>{
    const getClosest = function(elem, selector) {
        for(; elem && elem !== document; elem = elem.parentNode){
            if (elem.matches(selector)) return elem;
        }
        return null;
    };
    // start animation block
    let imgToDrag = getClosest(event.target, '.product-card');
    if (!imgToDrag) return;
    let viewCart = document.getElementsByClassName('product-cart')[0];
    let imgToDragImage = imgToDrag.querySelector('.product-image');
    let disLeft = imgToDrag.getBoundingClientRect().left;
    let disTop = imgToDrag.getBoundingClientRect().top;
    let cartLeft = viewCart.getBoundingClientRect().left;
    let cartTop = viewCart.getBoundingClientRect().top;
    let image = imgToDragImage.cloneNode(true);
    image.style = 'z-index: 11111; width: 100px;opacity:1; position:fixed; top:' + disTop + 'px;left:' + disLeft + 'px;transition: left 1s, top 1s, width 1s, opacity 1s cubic-bezier(1, 1, 1, 1);border-radius: 50px; overflow: hidden; box-shadow: 0 21px 36px rgba(0,0,0,0.1)';
    var reChange = document.body.appendChild(image);
    setTimeout(function() {
        image.style.left = cartLeft + 'px';
        image.style.top = cartTop + 'px';
        image.style.width = '40px';
        image.style.opacity = '0';
    }, 200);
    setTimeout(function() {
        reChange.parentNode.removeChild(reChange);
    }, 1000);
// End Animation Block
};


/***/ }),

/***/ 4903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ generateCartItem)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9699);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);

function generateCartItem(item, variation) {
    const { id , name , slug , image , price , sale_price , quantity , unit , is_digital ,  } = item;
    if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(variation)) {
        return {
            id: `${id}.${variation.id}`,
            productId: id,
            name: `${name} - ${variation.title}`,
            slug,
            unit,
            is_digital: variation?.is_digital,
            stock: variation.quantity,
            price: Number(variation.sale_price ? variation.sale_price : variation.price),
            image: image?.thumbnail,
            variationId: variation.id
        };
    }
    return {
        id,
        name,
        slug,
        unit,
        is_digital,
        image: image?.thumbnail,
        stock: quantity,
        price: Number(sale_price ? sale_price : price)
    };
}


/***/ })

};
;