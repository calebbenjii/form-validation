const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//ShowError Function
const showError = (input, message) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// showSuccess
const showSuccess = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const checkEmail = (input) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
      showSuccess(input)
    } else {
      showError(input, 'Email is not valid')
    }
}


const checkRequired = (inputArr) => {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`)
    } else {
      showSuccess(input)
    }
  })
}

const getFieldName = (input) => {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


const checkLength = (input, min, max) => {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less then ${max} characters`)
  } else {
    showSuccess(input);
  }
}

const checkPasswordMatch = (pass1, pass2) => {
  if(pass1.value != pass2.value) {
    showError(input, `${getFieldName(input)} password does not match`)
  } else {
    showSuccess(input);
  }
}


// EventListener
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 6, 15);
  checkLength(password, 6, 10);
  checkEmail(email); 
  checkPasswordMatch(password, password2);
}) 