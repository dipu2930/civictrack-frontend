// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 13); // Centered on San Francisco

// Add the tile layer (using OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker at the center of the map
var marker = L.marker([37.7749, -122.4194]).addTo(map);

// Add a popup to the marker
marker.bindPopup("<b>San Francisco</b><br>This is the city of San Francisco").openPopup();

// Optional: Add zoom control (the buttons + and - for zooming)
L.control.zoom().addTo(map);

// Handle search box (optional basic implementation)
document.querySelector('button').addEventListener('click', function() {
  var searchQuery = document.querySelector('input').value;
  alert('Searching for: ' + searchQuery); // Just a placeholder for now
});