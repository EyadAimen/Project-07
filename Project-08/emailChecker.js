var errorMsg = document.getElementById('errorMsg');
var form = document.getElementById('emailInput'); 
form.addEventListener('submit',function(event){
    var re = /\S+@\S+\.\S+/;
if(!email.value){
    errorMsg.innerText = 'The email field is empty!';
    event.preventDefault();
}
else if(!re.test(email.value)){
    errorMsg.innerText = 'Please enter a valid email address';
    event.preventDefault();
}
});

