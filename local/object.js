const mForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

mForm.addEventListener('submit',onSub);
function onSub(e){
  e.preventDefault();
  if(nameInput.value===''||emailInput.value==='')
  {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(),3000);
  }
  else{
    const tag = document.createElement('li');
    tag.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
    userList.appendChild(tag);
    let userList_serialized =JSON.stringify(userList);
    localStorage.setItem("userList",userList_serialized);
    let userList_deserialized = JSON.parse(localStorage.getItem("userList"));
    console.log(userList_deserialized);
    nameInput.value ='';
   emailInput.value = '';
  }
}

