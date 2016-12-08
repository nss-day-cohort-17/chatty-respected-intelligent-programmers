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
                      <button class="delete">Delete</li></button><br></li>`
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
document.querySelector("body").addEventListener("click", function(e) {
  removeListItem(e);
});
//
function removeListItem(e){
  if (e.target.tagName.toLowerCase() === "button"){
    this.ancestor('li').remove();
  }
  console.log(e.target);
}
/*
http://postdocs.stanford.edu/Templates/yui-3.5.1/docs/event/delegation.html


document.querySelector("body").addEventListener("click", function(event) {
  console.log(chattyContent);
  if (event.target.tagName.toLowerCase() === "li") {
    console.log("You clicked on an <li> element");
    document.getElementById("putHtmlHere").removeChild(event);
  }




*/
