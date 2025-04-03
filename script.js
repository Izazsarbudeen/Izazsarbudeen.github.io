// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Project Card Hover Effect
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});

// Dynamic Year for Footer
document.querySelector('footer p').innerHTML = `&copy; ${new Date().getFullYear()} Your Name | Built with GitHub Pages`;

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerText = 'Light Mode';
    } else {
        darkModeToggle.innerText = 'Dark Mode';
    }
});

const sidebar = document.getElementById("draggableSidebar");
const toggleBtn = document.getElementById("toggleBtn");

let isDragging = true;
let offsetX, offsetY;

// Toggle Sidebar Visibility
toggleBtn.addEventListener("click", () => {
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";  // Hide the sidebar
        toggleBtn.textContent = "☰";
    } else {
        sidebar.style.left = "0px";  // Show the sidebar
        toggleBtn.textContent = "✖";
    }
});

// Dragging functionality
sidebar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - sidebar.offsetLeft;
    offsetY = e.clientY - sidebar.offsetTop;
    sidebar.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        sidebar.style.left = `${e.clientX - offsetX}px`;
        sidebar.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    sidebar.style.cursor = "grab";
});
// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        formMessage.style.display = 'block';
        contactForm.reset(); // Clear the form
    } else {
        alert('Please fill out all fields.');
    }
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

    <!-- JavaScript for Sidebar, Dropdown & Dark Mode -->
    
        function toggleSidebar() {
            document.getElementById("sidebar").classList.toggle("active");
            document.getElementById("main-content").classList.toggle("active");
        }

        function toggleDarkMode() {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
        }

        function toggleDropdown() {
            const dropdown = document.getElementById("dropdownMenu");
            const arrow = document.querySelector(".dropdown .arrow");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
            arrow.classList.toggle("active");
        }

        window.onload = function() {
            if (localStorage.getItem("darkMode") === "enabled") {
                document.body.classList.add("dark-mode");
            }
        }
           
<script>
// Replace with your Google Analytics 4 Measurement ID
const measurementId = 'YOUR_GOOGLE';

// Example function to fetch data from Google Analytics (replace with your actual implementation)
function fetchAnalyticsData() {
    // This is a placeholder. In a real scenario, you'd use a server-side language
    // to fetch data from the Google Analytics API and then send it to the client.

    // Simulate fetching data (replace with your server-side data retrieval)
    setTimeout(() => {
        document.getElementById('users').textContent = '2,345';
        document.getElementById('pageviews').textContent = '10,234';
        document.getElementById('bounceRate').textContent = '35%';
        document.getElementById('country').textContent = 'United States';
        document.getElementById('avgSession').textContent = '2m 15s';
        document.getElementById('device').textContent = 'Mobile';
    }, 1500); // Simulate a 1.5-second delay
}

fetchAnalyticsData(); // Call the function to load the data

</script>
