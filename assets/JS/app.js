var registr= document.querySelector("#registr")
registr.addEventListener("submit", (e) => {

    var user = document.querySelector("#UserName").value.trim();

    var email = document.querySelector("#Email").value.trim();

    var password =document.querySelector("#Password").value.trim();

    e.preventDefault();
    let a=0;
    if(user =="" || email =="" || password=="") {
        alert ("Inputlari doldurun");
    }
    else{
        if
        (user.substring(0,1) != user.substring(0,1).toUpperCase()){
            alert("The first letter must be capitalized");
            document.querySelector("#UserName").classList.add("Active-worning");
            document.querySelector("#User-Worning").innerHTML= "worng User Name"
        }
        else{
            a++;
            document.querySelector("#UserName").classList.add("Active-success");
            document.querySelector("User-Worning").innerHTML=""
        }
        const re =
         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
        if (re.test(email) == false){
            alert ("Mail yalnisti")
            document.querySelector("#Email").classList.add("Active-success");
            document.querySelector("#Email-Worning").innerHTML="worng Email"
        }
        else{
            a++;
            document.querySelector("#Email").classList.add("Active-success");
            document.querySelector("Email-Worning").innerHTML =""
        }
         if(password.length<=5){
            document.querySelector("#Password").classList.add("Active-Worning");
            document.querySelector("#Password-Worning").innerHTML= "wrong password"
        }
        else{
            a++;
            document.querySelector("#Password").classList.add("Active-success");
            document.querySelector("#Password-Worning").innerHTML=""
        }
        if (a == 3 ){
            alert("Created Account");
        }
    
    }
});
