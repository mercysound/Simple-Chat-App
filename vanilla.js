// const sendMsg = ()=>{
//   // // alert("work")
//   // var inputMsg = document.getElementById("inpMsg").value
//   // document.getElementById("userName").innerHTML += inputMsg
//   // inputMsg = "";
  
//   // document.getElementById("dispMsg").innerHTML += <h1></h1>inputMsg
// }
// alert("Welcome")
var globerUser = "";
const askName = () => {
  globerUser = prompt("What is your name");

  document.getElementById("userName").innerHTML = `Welcome, ${globerUser}`; 

}
askName();

function sendMsg() {
  // globerUser = yourName
  // var message = msgInp.value 
  // document.getElementById("chatArea").innerHTML += "<br/>" + message
  var message = document.getElementById("msgInp").value 
  document.getElementById("chatLine").innerHTML = document.getElementById("chatLine").innerHTML + "<br/>" + `<div class="shadow p-2 mx-2" style="color:red; width:20vw;"><span>${globerUser}, said: </span>${message}</div>`
  document.getElementById("msgInp").value = ""
  document.getElementById("msgInp").focus()
  message.focus()
   
  
}
// how to write to DOM from js
// var names = "Adewole Adekunle Mercy"
// document.write(name)
// is there anyway to modify the content with js
// var h = document.getElementById("intro")
//  var newH = h.innerHTML += ": <b>Adewole</b>"
//  newH.style.color = "red"