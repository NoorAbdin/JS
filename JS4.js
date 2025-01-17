//submit
document.getElementById("registerForm").addEventListener(
    "submit" , function(event){
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        

        if(name && email){
            document.getElementById("successMessage").hidden = false;
            document.getElementById("registerForm").hidden = true;
        }
        else{
          alert("Please fill in all fields");
        }
    }
);
//scroll
document.getElementById("infoBox").addEventListener(
    "scroll" , ()=>{
        console.log("you are scrolling through the terms and condetions");
    }
);
//keydown
document.getElementById("name").addEventListener("keydown" , (event)=>{
    console.log(`Key pressed : ${event.key}`);
});
//click
document.getElementById("submitButton").addEventListener(
   "click" ,  ()=>{
    console.log("submit");
   });