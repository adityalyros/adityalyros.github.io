$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on("click", function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    // Toggle menu display
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('change', function() {
      const menuItems = document.querySelector('.menu-items');
      if (this.checked) {
        menuItems.style.display = 'block';
      } else {
        menuItems.style.display = 'none';
      }
    });
  
    // Handle log out button click
    const logoutButton = document.getElementById('logout-button');
    logoutButton.addEventListener('click', function() {
      // Logic to log out the user
      // For demonstration, redirecting to a login page
      window.location.href = "Login page.html"; // Update this URL to your login page URL
    });
  });
  