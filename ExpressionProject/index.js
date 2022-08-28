
const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const submit=  document.getElementById("submit")
let validEmail = false;
let validPhone = false;
let validUser = false;
$('#failure').hide();
$('#success').hide();


name.addEventListener("blur", ()=>{
    let regex = /^[A-Z]([0-9a-zA-Z]){0,10}/
let str = name.value

if(regex.test(str)){
    name.classList.remove("is-invalid")
    validUser = true
}
else{
    name.classList.add("is-invalid")
    validUser = false
}
})

email.addEventListener("blur", ()=>{
    let eml = email.value
    let regex = /(@gmail\.com)$/

    console.log(eml)
    if(regex.test(eml)){
        email.classList.remove("is-invalid")
        validEmail = true
    }
    else{
        email.classList.add("is-invalid")
        validEmail= false
    }

})

phone.addEventListener("blur", ()=>{
    let phn = phone.value
    let regex = /[0-9]/

    console.log(phn.length)
    if(regex.test(phn)){
        if(phn.length == 10){
        phone.classList.remove("is-invalid")
        validPhone = true
        }
        else{
            phone.classList.add("is-invalid")
            validPhone = false
        }
    }
  
})


submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);
    
    // Submit your form here
    if(validEmail && validUser && validPhone){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        // success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
       $('#success').show();
        $('#failure').hide();
        
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})


let btn = document.getElementById("failurebtn")

btn.addEventListener("click",()=>{
        $('#failure').hide();
})

let sbtn = document.getElementById("successbtn")

sbtn.addEventListener("click",()=>{
    $('#success').hide();
})