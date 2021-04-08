$(function() {
    const productsContentWrapper = $('.product-container');
    const menuItem = $('.menu-item');
    const overlayContainer = $('.overlay-container');
    const closeBtn = $('.closeBtn');

    getproductsHTML = function(index, productObject) {
        return `<div class="product-item" data-id=${productObject.id}>
                    <div class="main-image" data-index=${index} data-img=${productObject.imgUrl} style="background-image: url(assets/coats/${productObject.imgUrl})"></div>
                    <div class="main-details">
                        <div class="product-type">${productObject.name}</div>
                        <div class="price">${productObject.currency}${productObject.price}</div>
                    </div>
                </div>
        `;
    };

    function addProducts(shopItems) {
        for(let x = 0; x < products[shopItems].length; x++ ) {
            let productObject = products[shopItems][x],
                productHTML = getproductsHTML(x, productObject);
                productsContentWrapper.append(productHTML);
        }
    }

    addProducts(menuItem.data('product'));

    productsContentWrapper.delegate('.main-image', "click", function() {
        let itemIndex = $(this).data('index');
        let productDetails = products.coats[itemIndex];
        $('.product-image').css({backgroundImage: "url(assets/coats/" + $(this).data('img') + ")"});
        $('.product-title').text(productDetails.name);
        $('.product-price').text(productDetails.currency + productDetails.price);
        $('.composition-type').text(productDetails.composition);
        $('.origin-country').text(productDetails.country);
        $('.care-instr').text(productDetails.care);
        overlayContainer.show();
    });

    closeBtn.click (function() {
        overlayContainer.hide();
    });

    menuItem.click(function(e) {
        (e).preventDefault();

        menuItem.removeClass('selected-item');
        $(this).addClass('selected-item');
    });
});