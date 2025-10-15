// --------------------
// 1. Output Types
// --------------------
console.log("Hello !");
document.write("<!-- welcome -->");

// --------------------
// 2. Functions
// --------------------
// --------------------
// Show Today's Date on Website
// --------------------
let today = new Date();
let dateString = today.toDateString();
// Show in console (for you)
console.log("Today's date is:", dateString);
// Show in website footer
document.getElementById("date").textContent = "Today's Date: " + dateString;


// User-defined function to show thank you message
function showThankYouMessage() {
  alert("Thank you! Your message has been sent.");
}
// Select the contact form
const form = document.querySelector('#contact form');
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  showThankYouMessage();  // Call the user-defined function
  form.reset();           // Optional: clear form fields
});



