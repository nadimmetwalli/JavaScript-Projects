const generateButton = document.querySelector(".generateButton");

generateButton.addEventListener("click", function() {
    const newPassword = generatePassword();
    passwordInput.value = newPassword;
    console.log("Generate button clicked")
});

const passwordInput = document.querySelector(".inputBox");


function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    const length = 12;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const copyIcon = document.querySelector(".copyIcon");

copyIcon.addEventListener("click", function () {
  // Get the current password
  const password = passwordInput.value;

  // Check if there's anything to copy
  if (password) {
    navigator.clipboard.writeText(password)
      .then(() => {
        console.log("Password copied to clipboard");
        // Optional: show visual confirmation
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  } else {
    alert("No password to copy!");
  }
});
