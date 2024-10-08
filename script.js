function nextLevel() {
  const level_verify = document.createElement('div');
  level_verify.className = 'level_verify';
  level_verify.textContent = 'I am the new div';
  document.getElementById('verify').appendChild(level_verify);
}

function explainer() {
  document.getElementById('verify').innerHTML = "Hello I am The Flag";
}
