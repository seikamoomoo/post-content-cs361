var backdrop2 = document.getElementById('modal-backdrop-a');
var modal2 = document.getElementById('parental-controls-modal');
var parental_button = document.getElementById('parental-button');
var parent_password = document.getElementById('parental-password-input');
var nsfw_allow = document.getElementById('nsfw-allow');
var modalcancel2 = document.getElementById('modal-cancel-a');
var modalclose2 = document.getElementById('modal-close-a');
var save = document.getElementById('modal-accept-a');

function remove2(){
  console.log(parent_password);

  parent_password.value = '';
}

function hide2(){
  remove2();
  backdrop2.classList.toggle('hidden');
  modal2.classList.toggle('hidden');
}

function unhide2(){
  backdrop2.classList.toggle('hidden');
  modal2.classList.toggle('hidden');
}

function parameters2(){

 if(nsfw_allow.checked === true) {
   nsfw_allow.value = 'NSFW Content is Enabled';
 }
 else {
   nsfw_allow.value = 'NSFW Content is Disabled'
 }
 return true;
}

function save_settings(){
var temp;

}

parental_button.addEventListener('click', function(event){
  unhide2();
})
modalclose2.addEventListener('click', function(event){
  hide2();
})
modalcancel2.addEventListener('click', function(event){
  hide2();
})
save.addEventListener('click', function(event){
  console.log('wow');
 if(parameters2()){
   save_settings();
   //code from here to next comment is server part
   var postRequest2 = new XMLHttpRequest();
   var requestURL2 = '/save_settings';
   postRequest2.open('POST', requestURL);
   var requestBody2 = JSON.stringify({
     nsfw_allow: nsfw_allow.value,
   });
   postRequest2.setRequestHeader('Content-Type', 'application/json');
   postRequest2.addEventListener('load', function (event) {
   });
   // postRequest.send(requestBody);
   // console.log('sent to database');
   //End of server part
   hide2();
 }
 else{
   window.alert();
 }
})
