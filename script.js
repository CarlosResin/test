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

window.signupUser = async (event) => {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // ✅ Basic password validation
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

