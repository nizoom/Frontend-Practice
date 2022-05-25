const domStrings = {
    pw : document.getElementById('pw'),
    username: document.getElementById('username'),
    submit : document.getElementById('submit-btn')
}

domStrings.submit.addEventListener('click' , handleSubmit)

function handleSubmit(event){
  event.preventDefault();
  console.log('submitting')
  console.log(domStrings.username.value)
  console.log(domStrings.pw.value)
}