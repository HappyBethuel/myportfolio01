var nums = [1, 2, 3, 4, 5];
var items = ["playstation 5", "backpack", "8gb ram", "gaming keyboard", "samsung A14"];
var prices = [10000, 800, 700, 1500,2500];
var quantities = [0, 0, 0, 0, 0];
var totals = [0.0, 0.0, 0.0, 0.0, 0.0];
var totalOrderAmt = 0;

function add_selection(x) {
    console.log(x);
    quantities[x] = quantities[x] + 1;
    totals[x] = prices[x] * quantities[x];
    totalOrderAmt += prices[x];

    display_all();
}

function removeSelection(x) {
    if (quantities[x] > 0) {
        quantities[x] = quantities[x] - 1
        totals[x] = prices[x] * quantities[x]
        totalOrderAmt -= prices[x];

        display_all();
    }

}
function checkout(){
    alert(`R${totalOrderAmt} is your total order amount` )
}


function display_all() {



    var myTable = "<table><th style='width: 100px; color: red; text-align: right;'>Num</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Item</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Price</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Quantity</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Total</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Add</th>";
    myTable += "<th style='width: 100px; color: red; text-align: right;'>Remove</th>";

    for (i = 0; i < items.length; i++) {
        myTable += "<tr><td style='width: 100px; text-align: right;'>" + nums[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + items[i] + "</td><";
        myTable += "<td style='width: 100px; text-align: right;'>" + prices[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + quantities[i] + "</td>";
        myTable += "<td style='width: 100px; text-align: right;'>" + totals[i] + "</td>";
        myTable += "<td><button onclick='add_selection(" + i + ")'>Add</button></td>";
        myTable += "<td><button onclick='removeSelection(" + i + ")'>Remove</button></td>";
        myTable += "</tr>";
        
    }

    myTable += "</table>";
    myTable += "<br/><br/><p>Total: " + totalOrderAmt + "</p>";
    myTable += "<button onclick='checkout()'>checkout</button>";


    document.getElementById("demo").innerHTML = myTable;


}

window.onload = function () {
    display_all();
}