/* i want to have so that in every bundle and image there is metadata
bundles metadata would include separate members list

all of them would include categories like: 
name
price
amount of members
size
perfect for (activity)
background
ages
year of release
series

these would be a hidden image metadata

when on catalogue and product page members, i want metadata to be pulled from image to fill its sibling text boxes with relevant data
when on cart, i want only name and price displayed

the data is to be breaken down into groups:
name
price
is it a bundle?
if yes: member links
fluff-data (includes info abt everything)*/

window.onload = function(){
    const data = JSON.parse(localStorage.getItem("clicked_item"));

    if (data.is_bundle){
        //load standard shit
        // +members
    } else if (!data.is_bundle){
        //load standard shit
    } else alert("shit is broken") //we presume shit is broken
}

// when we press add we add the shit from clicked_item to cart array as an item
// first we parse the cart array, then we push new item and then we stringify the cart back
let items_in_cart = json.parse(localStorage.getItem("items_in_cart")) || [];

add_button.addEventListener("click", add_function);

function add_button(){
    //adding all the data
    //let item = {all the data};
    //items_in_cart.push(item);
    localStorage.setItem("items_in_cart", JSON.stringify(items_in_cart));
}

