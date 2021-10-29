const inputNameEL = document.querySelector("#name-input");
const inputEmailEL = document.querySelector("#email-input");
const inputMsgEL = document.querySelector("#msg-input");
const submitBtnEL = document.querySelector("#submit-btn")

let addEvents = ()=> {
    submitBtnEL.addEventListener( "click" , ()=>{
        handleSendContact()
    })
}

let clearInputFields = ()=> {
    inputNameEL.value = ""
    inputEmailEL.value = ""
    inputMsgEL.value = ""
}

let validedForm = (form)=>{
    
}

let handleSendContact = async()=> {

    if(!inputNameEL.value.trim() || inputNameEL.value.length < 3 ) {
        alert("Nome tem que ter no mínimo 3 caracteres")
        return
    }

    if(!inputEmailEL.value.trim() || inputEmailEL.value.length < 5 || !inputEmailEL.value.includes("@") )  {
        alert("E-mail invalido")
        return
    }

    if(!inputMsgEL.value.trim() || inputMsgEL.value.length < 5 ){
        alert("Mensagem tem que ter no mínimo 5 caracteres")
        return
    }
    
    let userData = JSON.stringify( {
        name: inputNameEL.value,
        email: inputEmailEL.value,
        msg: inputMsgEL.value
    });

    clearInputFields()
    console.log(userData)
    await fetch("/send-email" , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': userData.length
          },
        
        body: userData
    })

    


}

addEvents()