class Auth{
    constructor(){
        document.body.style.display = "none";
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    
    const logoutBtn = document.querySelector("#logout");
    if(logoutBtn){      
        logoutBtn.addEventListener("click", () => this.logout());
    }
}
validateAuth(auth){
    if(auth !== "true"){
        window.location.replace("/login.html");
    }
    else{
        document.body.style.display = "block";
    }
}

logout(){
    console.log("Logging out...");
    localStorage.removeItem("auth");
    localStorage.removeItem("token");
    localStorage.removeItem("uname");

    window.location.replace("/login.html");
}

}