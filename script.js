document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("h2");
    headers.forEach(header => {
        header.addEventListener("click", function() {
            const section = this.nextElementSibling;
            if (section && section.classList.contains("section")) {
                section.style.display = section.style.display === "block" ? "none" : "block";
            }
        });
    });
});

// script.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBYPG8EEsN_Vn13E0UALEpTbu2T2o9DVDE",
  authDomain: "winthrop-qa-portal.firebaseapp.com",
  projectId: "winthrop-qa-portal",
  storageBucket: "winthrop-qa-portal.firebasestorage.app",
  messagingSenderId: "440969077718",
  appId: "1:440969077718:web:50591760de13c85d29ba77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// DOMContentLoaded code for headers
document.addEventListener("DOMContentLoaded", function() {
  const headers = document.querySelectorAll("h2");
  headers.forEach(header => {
    header.addEventListener("click", function() {
      const section = this.nextElementSibling;
      if (section && section.classList.contains("section")) {
        section.style.display = section.style.display === "block" ? "none" : "block";
      }
    });
  });
});

// Signup function with password validation
window.signupUser = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Password validation
  if (password.length < 6) {
    alert("❌ Password must be at least 6 characters long.");
    return;
  }
  if (!/[A-Z]/.test(password)) {
    alert("❌ Password must include at least one uppercase letter.");
    return;
  }
  if (!/[0-9]/.test(password)) {
    alert("❌ Password must include at least one number.");
    return;
  }

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("✅ Account created successfully! Redirecting...");
    window.location.href = "home.html";
  } catch (error) {
    alert("❌ " + error.message);
  }
};

// Login function
window.loginUser = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    alert("✅ Login successful!");
    window.location.href = "home.html";
  } catch (error) {
    alert("❌ " + error.message);
  }
};
// After defining signupUser and loginUser functions
document.getElementById("signupBtn").addEventListener("click", signupUser);
document.getElementById("loginBtn").addEventListener("click", loginUser);



