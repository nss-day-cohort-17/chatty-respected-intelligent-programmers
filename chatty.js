/*===== Team chatty-respected-inteligent-programmers [RIP] ====*/
//================================//
//      Global Vars               //
//================================//
var data;
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
	var chattyContent = "";
	for (var i = 0; i < data.messages.length; i++) {
		chattyContent += `<li>${data.messages[i].name}: ${data.messages[i].message}
                      <button>Delete</li></button><br></li>`
	  document.getElementById("putHtmlHere").innerHTML = chattyContent
  }
}
//===========================================//
//   listener on Clear Message Board Button  //
//===========================================//
document.getElementById("submit").addEventListener("click", clear);
//
function clear(){
  console.log("Clear button hit");
  document.getElementById("putHtmlHere").innerHTML= "";
}
//================================//
//  listener on innerHTML Button  //
//================================//
document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
})
