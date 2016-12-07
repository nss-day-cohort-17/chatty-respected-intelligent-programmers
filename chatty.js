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
}
//
var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", messageList);
  myRequest.open("GET", "messages.json");
  myRequest.send();
//
