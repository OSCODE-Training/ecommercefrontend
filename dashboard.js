var fetchcategory=[]

document.addEventListener('DOMContentLoaded', () => {
    // second.innerHTML='hello'
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
                opt.value=item.categoryname
                dropdown.add(opt)
            })
        }
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

document.getElementById("second").classList.remove('hidden')

}
function displaycategory()
{
    document.getElementById("second").classList.add('hidden')
    document.getElementById('pc').classList.add('hidden-product');

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

function addproduct()
{   
    document.getElementById("second").classList.add('hidden')
    document.getElementById("dc").classList.add('hd')
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




function validationproduct()
{
    
    var categorye = dropdown.value
   var productthere = productthere.value
   var pass=filesa.value
   var sp = pass.split('\\')
   var index = sp.length;
   alert(categorye)
   

   var r = true
   if(!categorye)
   {
    document.getElementById('inputfirsterr').textContent="Please Enter Name"
    r=false
   }else {
    document.getElementById('inputfirsterr').textContent=""
   }

   if(!productthere)
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


function submitproduct()
{
    var categorye = dropdown.value
   var productthere = productthere.value
    var pass=filesa.value
    console.log("dddddddddddddddddd:",filesa.files[0])
   
   
   var sp = pass.split('\\')
   var index = sp.length;
 if (validationproduct())
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















/*document.getElementById('send-data').addEventListener('click', () => {
    const dataToSend = {
        key1: 'value1',
        key2: 'value2',
    };

    fetch('http://125.52.45:500/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
 */
