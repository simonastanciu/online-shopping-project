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

    //OVERLAY CONTENT//
    const productItemOverlay = $('.product-item-overlay');
    const overlay = $('.overlay');
    // nu avem nevoie sa creem partea asta de structura la fiecare click. acesta este continut static, poate sa ramana in html, mai apoi cu selectiile de rigoare ne adaugam continutul in modalitate dinamica
    getproductDetailsHTML = function(productDetails) {
        return `<div class="product-item-overlay" data-id=${productDetails.id}>
                    <div class="product-image" style="background-image:url(assets/coats/${productDetails.imgUrl})"></div>
                    <div class="product-details">
                        <div class="product-title">${productDetails.name}</div>
                        <div class="product-price">${productDetails.currency}${productDetails.price}</div>
                        <div class="product-size">
                            <div>Your Size</div>
                            <span>S</span>
                            <span>M</span>
                            <span>L</span>
                            <span>XL</span>
                        </div>  
                        <div class="menu-links">
                            <a href="">Details</a>
                            <a href="">Order</a>
                            <a href="">Payment</a>
                        </div>
                        <div class="product-item-details">
                            <div class="first-row"> 
                                <div>
                                    <div>Composition</div>
                                    <div>${productDetails.composition}</div>
                                </div>
                                <div>
                                    <div>Country</div>
                                    <div>${productDetails.country}</div>
                                </div>
                            </div>    
                            <div class="second-row">
                                <div>Care</div>
                                <div>${productDetails.care}</div>
                            </div>
                        </div>
                        <button class="add-button" type="submit">Add to Cart</button>
                    </div>
                </div>
        `;
    };

    for(let y = 0; y < products.coats.length; y++ ) {
        let productDetails = products.coats[y],
        productDetailsHTML = getproductDetailsHTML(productDetails);
        overlay.append(productDetailsHTML);
    };

    //OPEN/CLOSE OVERLAY//
    const productItem = $('.product-item');
    const overlayWrapper = $('.overlay-wrapper');
    const overlayContainer = $('.overlay-container');
    const closeBtn = $('.closeBtn');

    productItem.click(function(){
        overlayContainer.removeClass('hidden');
    });

    closeBtn.click (function(){
        overlayContainer.addClass('hidden');
    });
});