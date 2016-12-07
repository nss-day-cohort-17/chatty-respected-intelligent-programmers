/*===== Team chatty-respected-inteligent-programmers [RIP] ====*/
//================================//
//      Global Vars               //
//================================//
var data;
var chattyContent = "";
//================================//
//      Json                      //
//================================//
function messageList(e) {
  data = JSON.parse(e.target.responseText);
  console.log(data);
  createList();
}
//
var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", messageList);
  myRequest.open("GET", "messages.json");
  myRequest.send();
//================================//
//  load list into html           //
//================================//
function createList(e) {
	for (var i = 0; i < data.messages.length; i++) {
		chattyContent += `<li>${data.messages[i].name}: ${data.messages[i].message}
                      <button class="stop">Delete</li></button><br></li>`
	  document.getElementById("putHtmlHere").innerHTML = chattyContent
  }
}
//===========================================//
//   listener on Clear Message Board Button  //
//===========================================//
document.getElementById("submit").addEventListener("click", clear);
//
function clear(){
  document.getElementById("submit").disabled = false;
  console.log("Clear button hit");
  if(document.getElementById("putHtmlHere").innerHTML == ""){
    document.getElementById("submit").disabled = true;
    console.log();
  }
  document.getElementById("putHtmlHere").innerHTML= "";
}
//================================//
//  listener on innerHTML Button  //
//================================//
document.querySelector("body").addEventListener("click", clearLine);
//
function clearLine() {
  console.log(event);
  event.target.id.onclick = function() {this.parentNode.removeChild(this);}
    console.log("Delete Line");

}
