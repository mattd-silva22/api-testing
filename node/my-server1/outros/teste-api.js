async function getDataFromApi() {
                            
    let res = await  fetch('http://127.0.0.1:3456/users' );
    
    if (!res.ok) {
        return console.log('error')
    } 

    let user =  await res.json();


    return (user)
    
    

};




const btn = document.querySelector('#btn');

btn.addEventListener('click' , async ()=> {
    

   let user = await getDataFromApi()
   console.log(user)
    
} )
