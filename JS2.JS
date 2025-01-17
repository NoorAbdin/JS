const validUsers = [
    {username:"Noor" , password:"12345" , role:"admin"},
    {username:"Joud" , password:"1234" , role:"trainer"},
    {username:"Hiba" , password:"123" , role:"user"},
    {username:"Aman" , password:"123456" , role:"user"},
];
const specialties = ["cs" , "se" ,"it"];
document.getElementById("login-form").addEventListener("submit" , 
    function(event){
 event.preventDefault();
 const username = document.getElementById("username").value.trim();
 const password= document.getElementById("password").value.trim();
 const gender = document.getElementById("gender").value;
 const specialty = document.getElementById("specialty").value;
 const user = validUsers.find(user =>user.username === username && user.password === password);
 if(!user){
    displayError("Invalid Username or Password");
    return;
 }
 if(!specialties.includes(specialty)){
    displayError("Invalid specialties sellected");
    return;
 }
 const welcomeMessage = 
   window.alert(`Welcome , ${gender==="male" ? "Mr."
    : "Ms."} ${username}! You are logged in as a ${user.role} in the ${specialty.toUpperCase()} department`);
clearform();
});
function displayError(message){
 const errorElement = document.getElementById("error-message");
 errorElement.textContent = message;
 errorElement.classList.remove("hidden");
}
function clearform(){
    document.getElementById("login-form").reset();
    document.getElementById("error-message").classList.add("hidden");
}



