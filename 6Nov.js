function signup(){

   let usernamedata=document.getElementById("username").value;
   let userpassworddata= document.getElementById("userpassword").value;
 if(usernamedata && userpassworddata){
    localStorage.setItem("name",usernamedata)
    localStorage.setItem("password",userpassworddata)
    alert("sucessfully sigined")
 }


}

function login(){

    let usernamelogindata=document.getElementById("loginuserdata").value;
    let userpasswordlogindata= document.getElementById("loginpassworddata").value;


     let loginuserdata=localStorage.getItem("name")
     let loginpassworddata=localStorage.getItem("password")

 if(usernamelogindata === loginuserdata && userpasswordlogindata === loginpassworddata){
    alert("sucessfully logined")
 }else{
    alert("please check username and password")
 }
}