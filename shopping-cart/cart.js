function createButton() {
    // target the class of the paragraph to append and save
    var targetElem = $('.cart-button');
    var uniqueId = 0;

    // looping through all the divs and append button to div
    targetElem.each(function () {
        var button = $('<input id="" type="submit" value="Add to Cart">');
        button.attr("id", uniqueId);
        $(this).append(button);
    });
}

function addItems() {
    // target item name and price
    const shopItems = [];

    // trigger on the click of the button
    $(".cart-button").click(function() {
        var name = $(this).prev().prev().text();
        var price = $(this).prev().text();
        var total = 0;
        shopItems.push({name, price});
        console.log(shopItems[0].price);

        // show the information on the page
        var elements = '';
        elements = elements + '<div>'+name+'</div>' + '<div>'+price+'</div>' +
        '<div>'+total+'</div>';
        $('.cart').append(elements);
    })
}


createButton();

addItems();