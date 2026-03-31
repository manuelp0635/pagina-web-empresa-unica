import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = emailInput.value = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const error = document.getElementById("error");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    location.href = "dashboard.html";
  } catch {
    error.textContent = "Credenciales incorrectas";
  }
});