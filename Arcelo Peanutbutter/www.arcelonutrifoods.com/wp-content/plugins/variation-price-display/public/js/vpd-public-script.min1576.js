!function(a){var b,c,d,e;function f(a){"no"!==e.changeVariationPrice&&d!==a&&b.fadeOut(200,function(){b.html(a).fadeIn(200),d=a})}a(".single-product .product-type-variable .single_variation_wrap .single_variation"),c=d=(b=a(".single-product .product-type-variable .price").not(".single-product .product-type-variable .related .price, .single-product .product-type-variable .upsells .price")).html(),e=vpd_public_object,a(".single_variation_wrap").on("show_variation",function(c,b){f(a(b.price_html).html()),"no"===e.hideDefaultPrice?a(".product-type-variable .single_variation_wrap .woocommerce-variation-price").removeClass("hide_default_price"):a(".product-type-variable .single_variation_wrap .woocommerce-variation-price").addClass("hide_default_price")}),a(".single_variation_wrap").on("hide_variation",function(a){f(c)})}(jQuery)
