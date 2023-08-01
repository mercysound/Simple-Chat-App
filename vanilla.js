var globerUser = "";
var count = 0;
const askName = () => {
  if(globerUser = prompt("What is your name")){
    document.getElementById("userName").innerHTML = `Welcome, <span class="text-dark">${globerUser}</span>`; 
  }else if(globerUser == ""){
    document.getElementById("userName").innerHTML = `Welcome, <span class="text-dark">${globerUser = "Unknown user"}</span>`; 

  }


}
askName();

function sendMsg(){
  count += 1;
  var message = document.getElementById("msgInp").value ;
  document.getElementById("chatLine").innerHTML = document.getElementById("chatLine").innerHTML + "<br/>" + `<div class="shadow p-2 mx-2 bg-success text-light" style="color:; width:20vw;"><span class="fw-bolder">${globerUser}, </span><span class="fst-normal">said:</span> </span>${message}</div>`
  document.getElementById("msgInp").value = "";
  document.getElementById('msgInp').focus();
  document.getElementById('msgCount').innerHTML = count;
  if(count === 0){
    document.getElementById('s').innerHTML = "";
  }else{
    document.getElementById('s').innerHTML = "s";   
  }
  
}