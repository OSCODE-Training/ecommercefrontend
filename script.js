


function validation()
{
    var pass=password.value
   var userna = users.value
   var r = true
   if(!userna)
   {
    document.getElementById('inputfirsterr').textContent="Please Enter Email Address"
    r=false
   }else {
    document.getElementById('inputfirsterr').textContent=""
   }

   if(!pass)
    {
     document.getElementById('inputseconderr').textContent="Please Enter Password "
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
   
 if( validation())
{
    alert(users.value+" "+ password.value)
    // alert(window.location.href) 
    // Redirect to Dashboard
    // window.location.href = 'file:///D:/ecommercefrontend/Dashboard.html';
    fetch('http://localhost:3000/product/check_admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({"emailid":users.value,"password":password.value}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        if(data.data.length>0)
        {
            localStorage.setItem('UserData',JSON.stringify(data.data));
        }else
        {
            alert("User Invalid")
        }
        console.log("userData is this:",data.data)
        
       
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