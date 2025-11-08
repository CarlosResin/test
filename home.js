// home.js
import { auth, logoutUser } from './authGuard.js';

// Show logged-in user email
const userEmailEl = document.getElementById('userEmail');

// Wait for auth state to be ready
auth.onAuthStateChanged((user) => {
  if (user) {
    userEmailEl.textContent = `Logged in as: ${user.email}`;
  } else {
    userEmailEl.textContent = 'No user logged in';
  }
});

// Open checklist page
document.getElementById('openChecklistBtn').addEventListener('click', () => {
  window.location.href = 'checklist.html';
});

// Logout
document.getElementById('logoutBtn').addEventListener('click', () => {
  logoutUser();
});
