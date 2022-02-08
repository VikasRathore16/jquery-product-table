const Array=[];

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


//checking Data types of input field

function checkData(productSku,productName, productPrice,productQuantity){
    var flag=0;
    for(var i=0;i<Array.length;i++){
        if(productSku=Array[i].productSku){
            flag=1;
            console.log("Sku should be unique");
        }
    }
    if(isNaN(productSku)){
        flag=1;
        console.log("Product Id should be integer");
    }
    console.log(typeof(productName))
    if(!isNaN(productName)){
        flag=1;
        console.log("Product Name should be String")
    }
    if(isNaN(productPrice)){
        flag=1;
        console.log("Product Price should be Number")
    }
    if(isNaN(productQuantity)){
        flag=1;
        console.log("Product Price should be Number")
    }
    
    return flag ;
    

}

function display(){
    var product = fetch();
    if(checkData(product.productSku,product.productName,product.productPrice,product.productQuantity)==0){
            Array.push(product);
            var table = document.getElementById('mytable');
            var row = table.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            for(var i=0; i<Array.length ; i++){
                cell1.innerHTML = Array[i].productSku;
                cell2.innerHTML = Array[i].productName;
                cell3.innerHTML = "USD " + Array[i].productPrice;
                cell4.innerHTML = Array[i].productQuantity;
                cell5.innerHTML = '<a id="edit" data-productSku = '+Array[i].productSku +' href="#" >Edit</a> <a href="#" id="delete" data-productSku = '+Array[i].productSku +' " >Delete</a>';
            }
        }
}

//adding new product in the products function
function addProduct(){
   display();
}
function editForm(productId){
    console.log(1)
    
   
}

$(document).ready(function(){
    $
})