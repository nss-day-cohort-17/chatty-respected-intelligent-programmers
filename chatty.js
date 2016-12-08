/*===== Team chatty-respected-inteligent-programmers [RIP] ====*/
/* ================ Begin =============== */
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
                      <button class="delete">Delete</button><br></li>`
	  document.getElementById("putHtmlHere").innerHTML = chattyContent
  }
}
//===========================================//
//   listener on Clear Message Board Button  //
//===========================================//
document.getElementById("allClear").addEventListener("click", clear);
//
function clear(){
  console.log("Clear Message Board button hit");
  document.getElementById("allClear").disabled = false;
  if(document.getElementById("putHtmlHere").innerHTML == ""){
    document.getElementById("allClear").disabled = true;
    console.log("Button Disabled");
  }
  document.getElementById("putHtmlHere").innerHTML = "";
  console.log("Clear Message Board function done.");
}
//================================//
//  listener on innerHTML Button  //
//================================//
document.querySelector("body").addEventListener("click", function(e) {
  removeListItem(e);
});
//
function removeListItem(e){
   console.log(e);
if (e.target.textContent.toLowerCase() === "delete"){
  e.srcElement.parentElement.remove();
  // e.srcElement.parentElement = "";
  console.log(e);
  }
}
/* ================ END =============== */
//
