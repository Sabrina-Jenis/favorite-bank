document.getElementById('submit-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const emailValue = userEmail.value;
    const userPassword = document.getElementById('user-password');
    const passwordValue = userPassword.value;
    if(emailValue === 'myself@gmail.com' && passwordValue ==='password'){
        window.location.href =  'bank.html';
    }
    else if(emailValue === '' && passwordValue === ''){
        alert('please enter your email & password');
    }
    else if(emailValue === ''){
        alert('please enter your email');
    }
    else if(passwordValue === ''){
        alert('please enter your passwod');
    }
    else{
        alert('Your Email Or Password Is Incorrect');
    }
    
});