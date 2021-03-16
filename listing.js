let data;
fetch("listing.json")
.then((response)=>{
    return response.json();
})
.then((mydata)=>{
    console.log(mydata);
    data=mydata;
    display(data);
})

console.log(data.length);

function appendData(data){
    var main=document.getElementById("anand");
    
    for(var i=0;i<data.length;i++){
       
        
        var p=document.createElement("div");
        p.classList.add("p-1","cards","col-sm-4","mb-2")
        // p.style.width = "400px";
        // p.style.height = "530px";
        let product=`
      
        <a onclick="setId(${data[i].id})" > 
        
        <div class="card">
        <img class="card-img-top p-2" src="${data[i].image}" alt="Card image cap"  width=100px" height="270px">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <h6 class="card-text text-muted">Brand: ${data[i].brand}</h6>
          <h4 class="card-text text-success font-weight-bolder">MRP: ${data[i].price}</h4>
        </div>
        </div>
        
      </a>
      `
        p.innerHTML+=product;
        main.appendChild(p);
        
    }    
}    
function setId(id){
   window.document.location="landing.html"+"?id="+id;
}    



function applyFilters(){
  let b=document.getElementsByClassName("brand");
  let brandArray=[];
  let typeArray=[];
  let brandListingArray=[];
  let typeListingArray=[];

  let mainArray=[];
  let listingArray=[];
  

for(let x of b){
    if(x.checked){ 
        brandArray.push(x.value);
    }
}

let t=document.getElementsByClassName("type");

for(let x of t){
    if(x.checked){ 
        typeArray.push(x.value);
    }
}

console.log(brandArray)
if(brandArray.length!==0){
    for(let i=0;i<brandArray.length;i++){
        for(let j=0;j<data.length;j++){
            if(brandArray[i]===data[j].brand){
                brandListingArray.push(data[j].id);
            }
        }
    } 
    console.log(brandListingArray);
}

if(typeArray.length!==0){
    for(let i=0;i<typeArray.length;i++){
        for(let j=0;j<data.length;j++){
            if(typeArray[i]===data[j].brand){
                typeListingArray.push(data[j].id);
            }
        }
    } 
    console.log(typeListingArray);
}



let temp=0;

 if (brandListingArray.length !== 0 && typeListingArray.length !== 0) {
    for(let i=0;i<brandListingArray.length;i++){
        for(let j=0;j<typeListingArray.length;j++){
            if(brandListingArray[i]==typeListingArray[j]){
                for(let k=0;k<mainArray.length;k++){
                    if(mainArray[k]===brandListingArray[i]){
                        temp++;
                    }
                }
                if(temp===0){
                    mainArray.push(brandListingArray[i]);
                }
            }
        }
    }
}

else if(brandListingArray.length!==0){
    for(let i=0;i<brandListingArray.length;i++){
        mainArray.push(brandListingArray[i]);
    }
}
else if(typeListingArray.length!==0){
    for(let i=0;i<typeListingArray.length;i++){
        mainArray.push(typeListingArray[i]);
    }
}


console.log(mainArray);

for(let i=0;i<mainArray.length;i++){
    let elem=data.find((e)=>{
        if(mainArray[i]===e.id){
            return true;
        }
    })
    listingArray.push(elem);
}
console.log(listingArray);
document.getElementById("anand").innerHTML=""; 
display(listingArray);
if(listingArray.length===0){
    if(brandListingArray.length!==0 || typeListingArray.length!==0){
    let res=document.getElementById("anand");
    res.innerHTML="Product Not Found";
    // res.style.color="";
    // res.style.fontWeight="bolder";
    // res.style.fontSize="20px";
    }
    else{
        display(data);
    }
}
   
}

function display(data){
appendData(data);
}

