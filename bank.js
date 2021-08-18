document.getElementById('login-submit').addEventListener('click',function(){
    const emailFeild=document.getElementById('user-email');
    const useremail=emailFeild.value;
    const passwordFeild=document.getElementById('user-password');
    const userpassword=passwordFeild.value;

    if(useremail=='sontan@gmail.com' && userpassword=='amitomi'){
        window.location.href='bankink.html'
    }
    
})