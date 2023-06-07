var firstnameEl = document.querySelector('.firstname');
var lastnameEl = document.querySelector('.lastname');
var emailEl = document.querySelector('.email');
var passwordEl = document.querySelector('.password');
var submit = document.querySelector('.submit')



function submitform (event){
    event.preventDefault();
    var firstname = firstnameEl.value;
    console.log('firstname' + firstname);

    var lastname = lastnameEl.value;
    console.log('lastname' + lastname);

    var email = emailEl.value;
    console.log('email' + email);

    var password = passwordEl.value;
   console.log('password' + password);

}

submit.on('click', function () {
    location.reload();
  });



