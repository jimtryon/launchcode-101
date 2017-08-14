const shopItems = [];

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

    // trigger on the click of the button
    $(".cart-button").click(function() {
        var name = $(this).prev().prev().text();
        var price = parseFloat($(this).prev().text().substr(1));
        shopItems.push({name, price});

        // show the information on the page
        var elements = '';
        elements = elements + '<div>'+name+'</div>' + '<div>'+price+'</div>';
        $('.cart').append(elements);
        totalCart();
    })
}

function emptyCart() {
    $('.cart').clear();
}

function totalCart() {
    var total = 0;

    for (let elem of shopItems) {
        total += elem.price;
    }

    console.log(total);
}


createButton();

addItems();

