var products = [];

$(document).ready(function () {
    $(".update").hide();
    console.log(1)
    $('#add_product').click(function () {
        var productSku = $("#product_sku").val();
        console.log(productSku)
        var productName = $("#product_name").val();
        var productPrice = $("#product_price").val();
        var productQuantity = $("#product_quantity").val();
        if (checkData(productSku, productName, productPrice, productQuantity) == 0) {
            append(productSku, productName, productPrice, productQuantity);
            display();

            console.log(products)
            console.log("hello ");
        }
        });
    edit();
})

function edit() {
    $("#product_list").on("click", "#edit", function () {
        $(".submit").hide();
        $(".update").show();
        console.log("clicked.");
        var productSku = $(this).data('productsku');
        var product = getProduct(productSku);
        console.log(product)
        $("#product_sku").val(product.productSku);
        $("#product_sku").attr("readonly", true).css("background-color", "gray");
        $("#product_name").val(product.productName);
        $("#product_price").val(product.productPrice);
        $("#product_quantity").val(product.productQuantity);
    });
}
$("#product_list").on("click", "#delete", function () {
    var productSku = $(this).data('productsku');
    for (var i = 0; i < products.length; i++) {
        if (productSku == products[i].productSku) {
            products.splice(i,1)
        }
    }
    console.log(products + "products")
    display()
})
//getProduct
function getProduct(productSku) {
    for (var i = 0; i < products.length; i++) {
        if (productSku == products[i].productSku) {
            return products[i]
        }
    }
}


$('#update_product').on("click",(function(){
        console.log("update")
        var productSku = $("#product_sku").val();
        var product = getProduct(productSku)
        var productName = $("#product_name").val();
        var productPrice = $("#product_price").val();
        var productQuantity = $("#product_quantity").val();
        product.productSku =productSku;
        product.productName =productName;
        product.productPrice =productPrice;
        product.productQuantity=productQuantity;
        display()
        console.log(products);
    }))

//products append
function append(productSku, productName, productPrice, productQuantity) {
    products.push({
        'productSku': productSku,
        'productName': productName,
        'productPrice': productPrice,
        'productQuantity': productQuantity

    })
}

//display function
function display() {
    var data = "<table id=\"mytable\">\
    <tr>\
        <th>SKU</th>\
        <th>Name</th>\
        <th>Price</th>\
        <th>Quantity</th>\
        <th>Action</th>\
    </tr>";
    for (var i = 0; i < products.length; i++) {
        data += "<td value='" + products[i].productSku + "' >" + products[i].productSku + "</td>\
        <td value='"+ products[i].productName + "' id=\"resultProductName\">" + products[i].productName + " </td>\
        <td value='"+ products[i].productPrice + "'id=\"resultProductPrice\">" + products[i].productPrice + "</td>\
        <td value='"+ products[i].productQuantity + "'id=\"resultProductQuantity\">" + products[i].productQuantity + "</td>\
        <td 'id=\"resultProductOperations\">"+ '<a id="edit" data-productSku = ' + products[i].productSku + ' href="#" >Edit</a> <a id="delete" data-productSku = ' + products[i].productSku + ' href="#" " >Delete</a>' + "</td>\
      </tr>";
    }


    data += "</table>";

    console.log(data);
    $("#product_list").html(data);
    /* var product = fetch();
    if(checkData(product.productSku,product.productName,product.productPrice,product.productQuantity)==0){
            products.push(product);
            var table = document.getElementById('mytable');
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            for(var i=0; i<products.length ; i++){
                cell1.innerHTML = products[i].productSku;
                cell2.innerHTML = products[i].productName;
                cell3.innerHTML = "USD " + products[i].productPrice;
                cell4.innerHTML = products[i].productQuantity;
                cell5.innerHTML = '<a id="edit" data-productSku = '+products[i].productSku +' href="#" >Edit</a> <a href="#" id="delete" data-productSku = '+products[i].productSku +' " >Delete</a>';
            }
        } */
}
//checking Data types of input field

function checkData(productSku, productName, productPrice, productQuantity) {
    var flag = 0;
    for (var i = 0; i < products.length; i++) {
        if (productSku == products[i].productSku) {
            flag = 1;
            console.log("Sku should be unique");
        }
    }
    if (isNaN(productSku)) {
        flag = 1;
        console.log("Product Id should be integer");
    }
    console.log(typeof (productName))
    if (!isNaN(productName)) {
        flag = 1;
        console.log("Product Name should be String")
    }
    if (isNaN(productPrice)) {
        flag = 1;
        console.log("Product Price should be Number")
    }
    if (isNaN(productQuantity)) {
        flag = 1;
        console.log("Product Quantity should be Number")
    }

    return flag;


}




/* const products=[];

//fetching input field data
function fetch(){
    var productSku= document.getElementById("product_sku").value;
    var productName=document.getElementById("product_name").value;
    var productPrice = document.getElementById("product_price").value;
    var productQuantity = document.getElementById("product_quantity").value;
    
    return {"productSku" : productSku,
            "productName" : productName,
        "productPrice" : productPrice,
    "productQuantity" : productQuantity};
}


//adding new product in the products function
function addProduct(){
   display();
}
function editForm(productId){
    console.log(1)
    
   
} */
