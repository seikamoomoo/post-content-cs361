var backdrop = document.getElementById('modal-backdrop');
var modal = document.getElementById('post-content-modal');
var addpost = document.getElementById('make-post-button');
var title_input = document.getElementById('title-input');
var group_input = document.getElementById('group-input');
var body_input = document.getElementById('body-input');
var url = document.getElementById('image-input');
var nsfw = document.getElementById('nsfw');
var modalcancel = document.getElementById('modal-cancel');
var modalclose = document.getElementById('modal-close');
var makepost = document.getElementById('modal-accept');
var posts = document.getElementsByClassName('post');

function remove(){
console.log(group_input);
console.log(title_input);
console.log(url);
console.log(body_input);

  url.value = group_input.value = title_input.value = body_input.value = '';
  nsfw.checked = false;
}

function hide(){
  remove();
  backdrop.classList.toggle('hidden');
  modal.classList.toggle('hidden');
}

function unhide(){
  backdrop.classList.toggle('hidden');
  modal.classList.toggle('hidden');
}

function parameters(){
 if(group_input.value=='' || body_input.value =='' || title_input.value==''){
   return false;
 }
 if(nsfw.checked === true) {
   nsfw.value = 'Tagged as NSFW';
 }
 else {
   nsfw.value = ''
 }
 return true;
}

function createpost(){
var temp;
var newnode = posts[posts.length-1].cloneNode(true);
temp = newnode.getElementsByClassName('nsfw-tag');
temp[0].textContent = nsfw.value;
temp = newnode.getElementsByClassName('post-title');
temp[0].textContent = title_input.value;
temp = newnode.getElementsByClassName('post-group');
temp[0].textContent = group_input.value;
temp = newnode.getElementsByClassName('post-body');
temp[0].textContent = body_input.value;
temp = newnode.getElementsByClassName('post-image');
temp[0].setAttribute('src', url.value);
posts[0].parentNode.appendChild(newnode);
}

addpost.addEventListener('click', function(event){
  unhide();
})
modalclose.addEventListener('click', function(event){
  hide();
})
modalcancel.addEventListener('click', function(event){
  hide();
})
makepost.addEventListener('click', function(event){
  console.log('wow');
 if(parameters()){
   createpost();
   //code from here to next comment is server part
   var postRequest = new XMLHttpRequest();
   var requestURL = '/add';
   postRequest.open('POST', requestURL);
   var requestBody = JSON.stringify({
     title: title_input.value,
     bodytext: body_input.value,
     url: url.value,
     nsfw: nsfw.value,
   });
   postRequest.setRequestHeader('Content-Type', 'application/json');
   postRequest.addEventListener('load', function (event) {
   });
   postRequest.send(requestBody);
   console.log('sent to database');
   //End of server part
   hide();
 }
 else{
   window.alert('All parameters must be filled!');
 }
})


var backdrop2 = document.getElementById('modal-backdrop-a');
var modal2 = document.getElementById('parental-controls-modal');
var parental_button = document.getElementById('parental-button');
var parent_password = document.getElementById('parental-password-input');
var nsfw_allow = document.getElementById('nsfw-allow');
var modalcancel2 = document.getElementById('modal-cancel-a');
var modalclose2 = document.getElementById('modal-close-a');
var save = document.getElementById('modal-accept-a');

function remove2(){
  console.log(parent_password_input);

  parent_password_input.value = '';
}

function hide2(){
  remove();
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
var newnode = posts[posts.length-1].cloneNode(true);
temp = newnode.getElementsByClassName('nsfw-allow');
temp[0].textContent = nsfw_allow.value;
// posts[0].parentNode.appendChild(newnode);
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
