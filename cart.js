fetch('listing.json')
    .then(function (response) {
      return response.json();
  })
  .then( (data)=>{
      appendData(data);
  })
  .catch(function (err){
      console.log(err);
  });


  var price=0;
  function appendData(data) {   
      var arr=localStorage.getItem("carts");
      let array=JSON.parse(arr);
     
      for(var j=0;j<array.length;j++){
        var i=array[j];
        console.log(price);
        console.log(data[i].price)
        price+=data[i].price;
        console.log(price);

    
        let mainContainer=document.getElementById("carts");
        let div=document.createElement("div");
        div.classList.add("container","p-2");
        let content=`
        <div class="row" style="border:1px solid gray;border-radius:5px">
        <br>
            <div class="col-sm-5">    
                <br><br>
                <div class="d-flex flex-column">
                    <center><img src="${data[i].image}" alt"..."  width="100px"></center>
                </div>
                <br>
            </div>
            <div class="col-sm-7">
                <br>
                <div class="d-flex flex-column">
                    <center><h4>${data[i].name}</h4><center>
                    <h5>Brand: ${data[i].brand}</h5>
                    <h5>Price-${data[i].price} Rs</h5>
                    <button type="button" class="btn-outline-danger" style="width:50%" onclick=removeItem(${data[i].id})>Remove</button>
                </div>
                <br>  
            </div>
        </div>`
        div.innerHTML+=content;
        mainContainer.appendChild(div);
    }
 
    var sideContainer=document.getElementById("priceDetails");
    let div=document.createElement("div");
    div.classList.add("container","p-2");
    
    let content=`
    <div class="row" style="border:1px solid gray;border-radius:5px">
        
        <center><h3>PRICE DETAILS</h3></center>
        <hr>
        <div class=" d-flex justify-content-evenly">
        <h5>Price(`+array.length+` items)</h5>
        <h5>Rs.`+price+`</h5>
        </div>
        <div class=" d-flex justify-content-evenly">
        <h5>Discount</h5>
        <h5>-Rs.0</h5>
        </div>
        
        <div class=" d-flex justify-content-evenly">
        <h5>Delivery charge</h5>
        <h5>+Rs.0</h5>
        </div>
        <hr>
        <div class="d-flex justify-content-evenly">
        <h5>Total Amount</h5>
        <h5>Rs.`+price+`</h5>
        </div>
    </div>
    `
    div.innerHTML+=content;
    sideContainer.appendChild(div);

    let div2=document.createElement("div");
    div.classList.add("container","p-2");
    let button1=`
    <center><button class="btn btn-success btn-lg" width="50%">PLACE ORDER</button></center>
        `
        div2.innerHTML+=button1;
        sideContainer.appendChild(div2);
}

function removeItem(id){
    let arr=localStorage.getItem("carts");
    let array=JSON.parse(arr);
     let newArray=[];
     for(let i=0;i<array.length;i++){
         if((id-1)==array[i]){
        }
        else{
             newArray.push(array[i]);

         }
     }   
     localStorage.setItem("carts",JSON.stringify(newArray));
     window.location.href="cart.html";
}