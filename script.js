


function validation()
{
    var pass=password.value
   var userna = users.value
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
   
 if( validation())
{
alert("yes")
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