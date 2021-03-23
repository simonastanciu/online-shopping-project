$(function() {
    //MAIN PAGE CONTENT//
    const productsContentWrapper = $('.product-container');
    getproductsHTML = function(productObject) {
        return `<div class="product-item" data-id=${productObject.id}>
                    <div class="main-image" style="background-image: url(assets/coats/${productObject.imgUrl})"></div>
                    <div class="main-details">
                        <div class="product-type">${productObject.name}</div>
                        <div class="price">${productObject.currency}${productObject.price}</div>
                    </div>
                </div>
        `;
    };

    for(let x = 0; x < products.coats.length; x++ ) {
        let productObject = products.coats[x],
            productHTML = getproductsHTML(productObject);
            productsContentWrapper.append(productHTML);
    };
    // nu avem nevoie sa creem partea asta de structura la fiecare click. acesta este continut static, poate sa ramana in html, mai apoi cu selectiile de rigoare ne adaugam continutul in modalitate dinamica
    //OPEN/CLOSE OVERLAY//
    const productItemOverlay = $('.product-item-overlay');
    const overlay = $('.overlay');
    const productItem = $('.product-item');
    const overlayContainer = $('.overlay-container');
    const closeBtn = $('.closeBtn');

    productItem.click(function() {
        overlayContainer.removeClass('hidden');
       
    });

    closeBtn.click (function(){
        overlayContainer.addClass('hidden');
    });
});