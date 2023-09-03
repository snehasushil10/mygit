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
    localStorage.setItem("userlist",`${nameInput.value}:${emailInput.value}`);
    nameInput.value ='';
    emailInput.value = '';
  }
}


