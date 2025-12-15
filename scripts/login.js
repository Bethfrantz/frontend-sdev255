let token, uname, auth;
window.onload=function(){
document.querySelector("#loginBtn").addEventListener("click", async function (e){
    e.preventDefault();
    const username = document.querySelector("#username").value.trim();
    const password = document.querySelector("#password").value.trim();
    await login(username, password)
})}

async function login(username, password){
    const login_cred = {
        username,
        password
    };
    try {
    const response = await fetch("http://localhost:3000/api/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login_cred),
    });
if (!response.ok) {
      throw new Error("Login failed");
    }

    const tokenResponse = await response.json();
    token = tokenResponse.token;
    uname = tokenResponse.username;
    auth = true;
     // save JWT token
    console.log("Token", token);
    
    localStorage.setItem("token", token)
    localStorage.setItem("uname", uname)
    localStorage.setItem("auth", "true")

    window.location.replace("/index.html")

    // Optionally redirect or update UI
    // window.location.href = "/index.html";
  } catch (err) {
    console.error(err);
    document.querySelector("#errorMsg").innerHTML = "Bad username and Passwsord";
  }
}