var backdrop = document.getElementById('modal-backdrop');
var modal = document.getElementById('post-content-modal');
var addpost = document.getElementById('make-post-button');
var title_input = document.getElementById('title-input');
var group_input = document.getElementById('group-input');
var body_input = document.getElementById('body-input');
var url = document.getElementById('image-input');
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
}
function unhide(){
  remove();
  backdrop.classList.remove('hidden');
  modal.classList.remove('hidden');
}

function hide(){
  backdrop.classList.add('hidden');
  modal.classList.add('hidden');
}

function parameters(){
 if(group_input.value=='' || body_input.value =='' || url.value=='' || title_input.value==''){
   return false;
 }
 return true;
}

function createpost(){
  var temp;
  var newnode = posts[posts.length-1].cloneNode(true);
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
 if(parameters()){
   createpost();

   var postRequest = new XMLHttpRequest();
   var requestURL = '/add';
   postRequest.open('POST', requestURL);
   var requestBody = JSON.stringify({
     title: title_input.value,
     bodytext: body_input.value,
     url: url.value,
   });
   postRequest.setRequestHeader('Content-Type', 'application/json');
   postRequest.addEventListener('load', function (event) {
   });
   postRequest.send(requestBody);

   console.log('sent to database');
   hide();
 }
 else{
   window.alert('All parameters must be filled!');
 }
})
