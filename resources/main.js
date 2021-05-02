$(function() {
    const productsContentWrapper = $('.product-container');
    const menuItem = $('.menu-item');
    const overlayContainer = $('.overlay-container');
    const closeBtn = $('.closeBtn');

    getproductsHTML = function(index, productObject, shopItems) {
        // la background-image pe randul 10 nu vrei sa iei toate imaginile in coats, ci bazate pe categoria de produs
        return `<div class="product-item" data-id=${productObject.id}>
                    <div class="main-image" data-index=${index} data-img=${productObject.imgUrl} style="background-image: url(assets/${shopItems}/${productObject.imgUrl})"></div>
                    <div class="main-details">
                        <div class="product-type">${productObject.name}</div>
                        <div class="price">${productObject.currency}${productObject.price}</div>
                    </div>
                </div>
        `;
    };

    function addProducts(shopItems) {
        // ai nevoie de functia html() aici pentru ca vei adauga produce de o categorie diferita in acest wrapper si trebuie sa "resetezi" inainte
        productsContentWrapper.html('');
        for(let x = 0; x < products[shopItems].length; x++ ) {
            let productObject = products[shopItems][x],
                productHTML = getproductsHTML(x, productObject, shopItems);
                productsContentWrapper.append(productHTML);
        }
    }

    addProducts(menuItem.data('product'));

    productsContentWrapper.delegate('.main-image', "click", function() {
        let itemIndex = $(this).data('index');
        const currentProductCategory = productsContentWrapper.data('selected-products');
        console.log('currentProductCategory', currentProductCategory)
        // atentie, aici daca le iei pe toate in functie de coats nu ai sa poti vizualiza dinamic continutul respectiv
        // let productDetails = products.coats[itemIndex];
        let productDetails = products[currentProductCategory][itemIndex];
        $('.product-image').css({backgroundImage: `url(assets/${currentProductCategory}/${$(this).data('img')}`});
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
        // let itemSwitch = $(this).data('product');
        // console.log(itemSwitch);
        // let productSwitch = products[itemSwitch];
        const productCategory = $(this).data('product');
        console.log('productCategory ', productCategory)

        menuItem.removeClass('selected-item');
        $(this).addClass('selected-item');

        addProducts(productCategory);
        productsContentWrapper.data('selected-products', productCategory);
    });

    // $('.shoppingCart-button').click(function() {
    //     $('.shoppingCart-modal').show();
    // });

    // $('.closeBtn-cart').click (function() {
    //     $('.shoppingCart-modal').hide();
    // });


});