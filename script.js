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

// Signup function
export const signupUser = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (password.length < 6 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
    alert("❌ Password does not meet requirements.");
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
export const loginUser = async (event) => {
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

// Password live validation
const passwordInput = document.getElementById("password");
const lengthReq = document.getElementById("lengthReq");
const uppercaseReq = document.getElementById("uppercaseReq");
const numberReq = document.getElementById("numberReq");

passwordInput.addEventListener("input", () => {
  const value = passwordInput.value;
  lengthReq.className = value.length >= 6 ? "valid" : "invalid";
  uppercaseReq.className = /[A-Z]/.test(value) ? "valid" : "invalid";
  numberReq.className = /[0-9]/.test(value) ? "valid" : "invalid";
});

// Email validation feedback
const emailInput = document.getElementById("email");
const emailFeedback = document.getElementById("emailFeedback");
emailInput.addEventListener("input", () => {
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  emailFeedback.textContent = emailPattern.test(emailInput.value) ? "✅ Valid email" : "❌ Invalid email";
  emailFeedback.style.color = emailPattern.test(emailInput.value) ? "#2ecc71" : "#e74c3c";
});

// Collapsible sections + button binding
document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll("h2");
  headers.forEach(header => {
    header.addEventListener("click", function() {
      const section = this.nextElementSibling;
      if (section && section.classList.contains("section")) {
        section.classList.toggle("active");
      }
    });
  });

  document.getElementById("signupBtn").addEventListener("click", signupUser);
  document.getElementById("loginBtn").addEventListener("click", loginUser);
});





