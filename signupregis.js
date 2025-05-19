function submit(){
        let username = document.getElementById("username");
        let password = document.getElementById("password");
        const data = {
            'username':username.value,
            'password':password.value
        }
        let storage = JSON.stringify(data);
        localStorage.setItem('data',storage);
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