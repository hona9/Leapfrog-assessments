const password = document.getElementById('pass');
const length = document.getElementById('length');
const lowercase = document.getElementById('lowercase');
const uppercase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');
const copy = document.getElementById('copy');

//Generate 

function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);// small letters start from 97
}

function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //capital letters start from 65
}

function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); //number starts from 48
}

function getRandomSymbol(){
  const symbols = '~!@#$%^&*(){}[]<>,./';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

generate.addEventListener('click', () => {
  const hasLower = lowercase.checked;
  const hasUpper = uppercase.checked;
  const hasNumber = numbers.checked;
  const hasSymbol = symbols.checked;
  const haslength = parseInt(length.value);

  pass.innerText = generatePassword(haslength, hasLower, hasUpper, hasNumber, hasSymbol);
});

function generatePassword(len, low, up, num, sym ){
  let generatedPassword = '';
  
  const availableChar = [{low}, {up}, {num}, {sym}].filter(type => Object.values(type)[0]);
  console.log(availableChar);
}