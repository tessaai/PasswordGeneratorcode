var generateButton = document.querySelector("#generate-button")
var passwordInput = document.querySelector("#password-input")

function generatePassword() {
  var password = ""
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+"

  for (var i = 0; i < 8; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length))
  }

  passwordInput.value = password
}

generateButton.addEventListener("click", generatePassword)