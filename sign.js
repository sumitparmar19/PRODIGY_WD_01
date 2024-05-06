document.addEventListener("DOMContentLoaded", function() {
    // Get the sign up button and the popup
    const signupBtn = document.getElementById("signup-btn");
    const popup = document.getElementById("signup-popup");
  
    // When sign up button is clicked, show the popup
    signupBtn.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    // Close the popup when the close button is clicked
    document.getElementById("close-popup").addEventListener("click", function() {
      popup.style.display = "none";
    });
  });
  