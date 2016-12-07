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

//transfer messages into message area
	var chattyContent = "";
	for (var i = 0; i < data.messages.length; i++) {
		chattyContent += `<li>${data.messages[i].name}</li>`
	}
document.getElementById("putHtmlHere").innerHTML = chattyContent
