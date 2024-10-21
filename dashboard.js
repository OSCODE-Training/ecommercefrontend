var fetchcategory=[]
var fetchproduct=[]
var fetchproductbycateogyid=[]
var fetchcategoryandproductdetails =[]
var retrievedData=[] 
const fetchDataFromLocal=async()=>
{
    retrievedData =await localStorage.getItem('UserData');
    console.log("retrieve length data:",retrievedData.length)

}

document.addEventListener('DOMContentLoaded', () => {
    // second.innerHTML='hello'
    // console.log("storage i am checking:",JSON.parse(retrievedData))
    fetchDataFromLocal()
    fetch('http://localhost:3000/category/fetch_category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({categoryname:userna,picture:sp[index-1]}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        fetchcategory=data.data 
        console.log('Success:', data);
        if(data.data.length>0)
        {
            data.data.forEach((item)=>{
                var opt = document.createElement('option')
                opt.text=item.categoryname
                opt.value=item.categoryid
                dropdowna.add(opt)
                // dropdownaa.add(opt)
                
            })
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });






    fetch('http://localhost:3000/product/fetch_product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({categoryname:userna,picture:sp[index-1]}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        fetchcategory=data.data 
        console.log('Success:', data);
        if(data.data.length>0)
        {
           fetchproduct = data.data
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });





    fetch('http://localhost:3000/category/fetch_category', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({categoryname:userna,picture:sp[index-1]}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        fetchcategory=data.data 
        console.log('Success:', data);
        if(data.data.length>0)
        {
            data.data.forEach((item)=>{
                var opt = document.createElement('option')
                opt.text=item.categoryname
                opt.value=item.categoryid
                // dropdowna.add(opt)
                dropdownaa.add(opt)
                
            })
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });





    fetch('http://localhost:3000/product/fetch_categoryandproductdetails', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: JSON.stringify({categoryname:userna,picture:sp[index-1]}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        fetchcategory=data.data 
        console.log('Success:', data);
        fetchcategoryandproductdetails=data.data
        console.log("dddddddddddddddddddddddddddddddddddddddd:",data.data)
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });

})


function fire()
{
document.getElementById("dc").classList.add('hd')
document.getElementById('pc').classList.add('hidden-product');
document.getElementById("dp").classList.add('dtp')
document.getElementById("prdetails").classList.add("productdetails")
document.getElementById("dpd").classList.add('dtpd')

document.getElementById("second").classList.remove('hidden')

}


function displayproductdetails()
{
    document.getElementById("dc").classList.add('hd')
    document.getElementById('pc').classList.add('hidden-product');
    document.getElementById("dp").classList.add('dtp')
    document.getElementById("prdetails").classList.add("productdetails")
    document.getElementById("second").classList.add('hidden')
    document.getElementById("dpd").classList.remove('dtpd')
    // var a =[{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50}]
    var result =`<table width="100%" cellspacing='0' cellpadding="5"><tr "><th>Icon</th><th>S.No</th><th>Category Name</th><th>Product Name</th><th>Model No</th><th>Price</th><th>Offer Price</th><th>Stock</th><th>Rating</th><th>Color</th></tr>`
    fetchcategoryandproductdetails.map((item,index)=>{
       
        // result+=`<div class="table-container"><div><i class="fa-solid fa-pen-to-square" style="margin-right: 20px;"></i><i class="fa-solid fa-trash"></i></div><div>${item.categoryname}</div><div>${item.productname}</div><div>${item.price}</div><div>${item.offerprice}</div></div>`
        result+=`<tr ><td height="50px"></td><td></td><td></td><td></td><td></td><td></td></tr><tr></tr><tr ><td><i class="fa-solid fa-pen-to-square" style="margin-right: 50px;"></i><i class="fa-solid fa-trash"></i></td><td>${index}</td><td>${item.categoryname}</td><td>${item.productname}</td><td>${item.modelno}</td><td>${item.price}</td><td>${item.offerprice}</td><td>${item.stock}</td><td>${item.rating}</td><td>${item.color}</td></tr>`
    })
    result+=`</table>`
    showpa.innerHTML=result



}
function displaycategory()
{
    document.getElementById("second").classList.add('hidden')
    document.getElementById('pc').classList.add('hidden-product');
    document.getElementById("dp").classList.add('dtp')
    document.getElementById("prdetails").classList.add("productdetails")
    document.getElementById("dpd").classList.add('dtpd')


    document.getElementById("dc").classList.remove('hd')
    
    // var a =[{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50}]
    var result =`<table width="100%" cellspacing='0' cellpadding="5"><tr "><th>Icon</th><th>S.No</th><th>Category Name</th></tr>`
    fetchcategory.map((item,index)=>{
        // result+=`<div class="table-container"><div><i class="fa-solid fa-pen-to-square" style="margin-right: 20px;"></i><i class="fa-solid fa-trash"></i></div><div>${item.categoryname}</div><div>${item.productname}</div><div>${item.price}</div><div>${item.offerprice}</div></div>`
        result+=`<tr ><td height="50px"></td><td></td><td></td><td></td><td></td><td></td></tr><tr></tr><tr ><td><i class="fa-solid fa-pen-to-square" style="margin-right: 50px;"></i><i class="fa-solid fa-trash"></i></td><td>${index}</td><td>${item.categoryname}</td></tr>`
    })
    result+=`</table>`
    show.innerHTML=result


}

function changeproduct()
{
    for(j=dropdownproduct.options.length;j>=0;j--)
        {
            dropdownproduct.remove(j)
        }

    fetch('http://localhost:3000/product/fetch_product_by_categoryid', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({categoryid:dropdownaa.value}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        fetchproductbycateogyid=data.data
        console.log('Success:', data);
        if(data.data.length>0)
            {
                data.data.forEach((item)=>{
                    var opt = document.createElement('option')
                    opt.text=item.productname
                    opt.value=item.productid
                    dropdownproduct.add(opt)
                    
                })
            }
        
       
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });
}


function submit_productdetails()
{
    console.log(dropdownaa.value+" "+dropdownproduct.value+" "+color.value+" "+modelno.value+" "+price.value+" "+offerprice.value+" "+stock.value+" "+rating.value)
    if(dropdownaa.value.trim() && dropdownproduct.value.trim() && modelno.value.trim() && price.value.trim() && offerprice.value.trim() && stock.value.trim() && rating.value.trim())
    {

    
    fetch('http://localhost:3000/product/submit_productDetails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({categoryid:dropdownaa.value,"stock":stock.value,productid:dropdownproduct.value,"color":color.value,"price":price.value,"offerprice":offerprice.value,"rating":rating.value,"modelno":modelno.value}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert("Successfully Submitted")
    })
    .catch((error) => {
        console.error('Error:', error);
        alert("Error")
    });
   }else
   {
    alert("Please FIll All the field")
   }
}

function displayproduct()
{
    
    document.getElementById("second").classList.add('hidden')
    document.getElementById('pc').classList.add('hidden-product');

    document.getElementById("dc").classList.add('hd')
    document.getElementById("prdetails").classList.add("productdetails")
    document.getElementById("dpd").classList.add('dtpd')

    document.getElementById("dp").classList.remove('dtp')

    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa:",fetchproduct)
    // var a =[{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50},{categoryname:'Pizza',productname:"Sub Pizza",price:80,offerprice:50}]
    var result =`<table width="100%" cellspacing='0' cellpadding="5"><tr "><th>Icon</th><th>S.No</th><th>Category Name</th><th>Product Name</th><th>Picture</th></tr>`
    fetchproduct.map((item,index)=>{
       
        // result+=`<div class="table-container"><div><i class="fa-solid fa-pen-to-square" style="margin-right: 20px;"></i><i class="fa-solid fa-trash"></i></div><div>${item.categoryname}</div><div>${item.productname}</div><div>${item.price}</div><div>${item.offerprice}</div></div>`
        result+=`<tr ><td height="50px"></td><td></td><td></td><td></td><td></td><td></td></tr><tr></tr><tr ><td><i class="fa-solid fa-pen-to-square" style="margin-right: 50px;"></i><i class="fa-solid fa-trash"></i></td><td>${index}</td><td>${item.categoryname}</td><td>${item.productname}</td></tr>`
    })
    result+=`</table>`
    showp.innerHTML=result


}

function productdetails()
{
    document.getElementById("second").classList.add('hidden')
    document.getElementById('pc').classList.add('hidden-product');
    document.getElementById("dpd").classList.add('dtpd')

    document.getElementById("dc").classList.add('hd')
    document.getElementById("dp").classList.add('dtp')
    document.getElementById("prdetails").classList.remove("productdetails")
}

function addproduct()
{   
    document.getElementById("second").classList.add('hidden')
    document.getElementById("dc").classList.add('hd')
    document.getElementById("dp").classList.add('dtp')
    document.getElementById("prdetails").classList.add("productdetails")
    document.getElementById("dpd").classList.add('dtpd')

    document.getElementById('pc').classList.remove('hidden-product');
    

}









function validation()
{
    var pass=file.value
   var userna = users.value
   var sp = pass.split('\\')
   var index = sp.length;
   

   var r = true
   if(!userna)
   {
    document.getElementById('inputfirsterr').textContent="Please Enter Name"
    r=false
   }else {
    document.getElementById('inputfirsterr').textContent=""
   }

   if(!pass)
    {
     document.getElementById('inputseconderr').textContent="Please Enter Name"
     r=false
 
    }
   else
   {
    
    document.getElementById('inputseconderr').textContent=""

   }
   return r

}

function submit()
{  
    var pass=file.value
    console.log("dddddddddddddddddd:",file.files[0])

   var userna = users.value
   var sp = pass.split('\\')
   var index = sp.length;
 if (validation())
{
        
        fetch('http://localhost:3000/category/submit_category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({categoryname:userna,picture:sp[index-1]}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
                alert("yes")
            
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert("success")
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error")
        });
  
}
   
}




// function validationproduct()
// {
    
//     var categorye = dropdowna.value;
//    var productthere = document.getElementById("productthere").value;
//    var pass=filesa.value
//    var sp = pass.split('\\')
//    var index = sp.length;
   
   

//    var r = true
//    if(!categorye)
//    {
//     document.getElementById('inputfirsterra').textContent="Please Select"
//     r=false
//    }else {
//     document.getElementById('inputfirsterra').textContent=""
//    }

//    if(!productthere)
//     {
//      document.getElementById('inputseconderra').textContent="Please Enter Name"
//      r=false
 
//     }
//    else
//    {
    
//     document.getElementById('inputseconderra').textContent=""

//    }
//    return r

// }


function submitproduct()
{
    var categorye = dropdowna.value
   var productther = document.getElementById("producthere").value
    var pass=filesa.value
    console.log("dddddddddddddddddd:",filesa.files[0])
   
  
   var sp = pass.split('\\')
   var index = sp.length;
  console.log("all data here:",categorye,productther,sp[index-1])
 if (categorye.length>0 && productther.length>0 && sp[index-1].length>0)
{
        
        fetch('http://localhost:3000/product/submit_product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({categoryid:categorye,productname:productther,picture:sp[index-1]}),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
                alert("yes")
            
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert("success")
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error")
        });
  
}
else{
    alert("fill all field.")
}
}




