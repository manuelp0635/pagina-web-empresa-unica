import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { collection, addDoc, query, where, onSnapshot } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const list = document.getElementById("ticketList");
const form = document.getElementById("ticketForm");

onAuthStateChanged(auth, user => {
  if (!user) location.href = "login.html";

  const q = query(collection(db, "tickets"), where("uid", "==", user.uid));

  onSnapshot(q, snap => {
    list.innerHTML = "";
    snap.forEach(doc => {
      const t = doc.data();
      list.innerHTML += `<li>🎫 <b>${t.asunto}</b> — ${t.estado}</li>`;
    });
  });

  form.addEventListener("submit", async e => {
    e.preventDefault();
    await addDoc(collection(db, "tickets"), {
      asunto: asunto.value,
      descripcion: descripcion.value,
      estado: "Abierto",
      uid: user.uid,
      fecha: new Date()
    });
    form.reset();
  });
});

window.logout = () => signOut(auth);
