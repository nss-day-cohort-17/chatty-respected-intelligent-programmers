/*===== Team chatty-respected-inteligent-programmers [RIP] ====*/
/* ================ Begin =============== */
//
//================================//
//      Global Vars               //
//================================//
var data;
var chattyContent = "";
var newMessage;
//
//================================//
//      Json                      //
//================================//
function messageList(e) {
  data = JSON.parse(e.target.responseText);
  console.log("JSON loaded ",data);
  createList();
}
//
var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", messageList);
  myRequest.open("GET", "messages.json");
  myRequest.send();
//
//================================//
//  load list into html           //
//================================//
function createList(e) {
  for (var i = 0; i < data.messages.length; i++) {
    chattyContent += `<li>${data.messages[i].name}: ${data.messages[i].message}
                      <button class="delete">Delete</button><br></li>`
    document.getElementById("putHtmlHere").innerHTML = chattyContent;
  }
}
//
//===========================================//
//   listener on Input Field                 //
//===========================================//
document.getElementById("inputMessage").addEventListener("keypress", postMessage)
//
function postMessage() {
  if ((event.keyCode == 13) && (document.getElementById("inputMessage").value != "")) {
    newMessage = document.getElementById("inputMessage").value;
    console.log("Posted New Message ", newMessage);
    document.getElementById("putHtmlHere").innerHTML += `<li>${newMessage}
                                                         <button class="delete">Delete</button><br></li>`
    document.getElementById("inputMessage").value = "";
  }
}
//
//===========================================//
//   listener on Clear Message Board Button  //
//===========================================//
document.getElementById("allClear").addEventListener("click", clear);
//
function clear(){
  // document.getElementById("allClear").disabled = false;
  // if(document.getElementById("putHtmlHere").innerHTML == ""){
  //   document.getElementById("allClear").disabled = true;
  // }
  document.getElementById("putHtmlHere").innerHTML = "";
  console.log("Message Board Cleared");
}
//
//================================//
//  listener on innerHTML Button  //
//================================//
document.querySelector("body").addEventListener("click", function(e) {
  removeListItem(e);
});
//
function removeListItem(e){
if (e.target.textContent.toLowerCase() === "delete"){
  e.srcElement.parentElement.remove();
  console.log("Item deleted ", e.srcElement.parentElement);
  }
}
//
/* ================ END =============== */
//
