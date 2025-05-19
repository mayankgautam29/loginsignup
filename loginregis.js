function submit(){
    let usernm = document.getElementById("username");
    let passwd = document.getElementById("password");
    let usermain = localStorage.getItem('data');
    data = JSON.parse(usermain)
    if(usernm.value==data.username && passwd.value==data.password){
        console.log("Login Success!!");
    } else{
        console.log("Login Failed!!")
    }
}
function showpass(){
    let pass = document.getElementById("password");
    let btn = document.getElementsByClassName("sp")[0];
    if(pass.type=="password"){
        pass.type="text";
        btn.innerText="Hide password";
    } else {
        pass.type = "password";
        btn.innerText = "Show password";
    }
}