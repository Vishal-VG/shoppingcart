var index;
fetch("listing.json")
.then(function(response){
    return response.json();
})
.then((data)=>{
    let param=new URL(document.location).searchParams;
    index=param.get("id")-1;
    appendData(data);
})
.catch(function (err){
    console.log(err);
});

function appendData(data){
    
   
    document.getElementById("image").src=data[index].image;
    document.getElementById("name").innerHTML=data[index].name;
    document.getElementById("price").innerHTML="MRP: "+data[index].price;
    document.getElementById("rating").innerHTML="Rating : "+data[index].rating+`<i class="fa fa-star"></i>`;
    document.getElementById("Brand").innerHTML="Brand : "+data[index].brand;
    document.getElementById("desc").innerHTML= data[index].desc;
    
    for(var i=0; i<data.length; i++){
        
    }
   
    document.getElementById("desc1").innerHTML= data[index].desc1;
    document.getElementById("desc2").innerHTML= data[index].desc2;
    
    

}

function myCart(){

    if (localStorage.getItem('carts') == null) {
        
        let cart=[];
        let size=cart.length;
        cart[size]=index;
        localStorage.setItem("carts",JSON.stringify(cart));
        console.log(cart);

    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let m=JSON.parse(cart)
        let p=m.length
        m[p]=index;
        localStorage.setItem("carts",JSON.stringify(m));
        
    }
    window.document.location="cart.html";
}