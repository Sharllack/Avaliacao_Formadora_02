let op1 = document.getElementsByTagName('option')[1];
let op2 = document.getElementsByTagName('option')[2];
let data = new Date();
let ano = data.getFullYear();
op1.innerHTML = `${ano}.1`;
op2.innerHTML = `${ano}.2`;