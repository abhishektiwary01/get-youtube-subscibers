document.addEventListener('DOMContentLoaded', () => {
  // Get references to the buttons and the list element
  const fetchAllSubscribersButton = document.getElementById('fetch-all-subscribers');
  const fetchSubscriberByNameButton = document.getElementById('fetch-subscriber-by-name');
  const fetchSubscriberByIdButton = document.getElementById('fetch-subscriber-by-id');
  const subscribersList = document.getElementById('subscribers-list');

  // Event listener for fetching all subscribers
  fetchAllSubscribersButton.addEventListener('click', () => {
    fetch('http://localhost:3000/subscribers') // Make a GET request to the API endpoint for all subscribers
      .then(response => {
        if (!response.ok) { // Check if the response is not okay
          throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error with status code
        }
        return response.json(); // Parse JSON from the response
      })
      .then(data => {
        window.location.href = 'http://localhost:3000/subscribers'; // Redirect to the subscribers page
      })
      .catch(error => {
        console.error('Error fetching all subscribers:', error); // Log error to the console
        subscribersList.innerHTML = 'Failed to load subscribers. Please try again later.'; // Display error message
      });
  });
  
  // Event listener for fetching subscriber by name
  fetchSubscriberByNameButton.addEventListener('click', () => {
    fetch('http://localhost:3000/subscribers/name') // Make a GET request to the API endpoint for subscriber by name
      .then(response => {
        if (!response.ok) { // Check if the response is not okay
          throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error with status code
        }
        return response.json(); // Parse JSON from the response
      })
      .then(data => {
        window.location.href = 'http://localhost:3000/subscribers/name'; // Redirect to the subscribers by name page
      })
      .catch(error => {
        console.error('Error fetching all subscribers:', error); // Log error to the console
        subscribersList.innerHTML = 'Failed to load subscribers. Please try again later.'; // Display error message
      });
  });
  
  // Event listener for fetching subscriber by ID
  fetchSubscriberByIdButton.addEventListener('click', () => {
    const id = document.getElementById('subscriber-id').value; // Get the subscriber ID from the input field
    
    if (!id) { // Check if ID is empty
      alert('Please enter an ID.'); // Alert user to enter an ID
      return;
    }

    fetch(`http://localhost:3000/subscribers/${id}`) // Make a GET request to the API endpoint for a specific subscriber by ID
      .then(response => {
        if (!response.ok) { // Check if the response is not okay
          throw new Error(`HTTP error! Status: ${response.status}`); // Throw an error with status code
        }
        return response.json(); // Parse JSON from the response
      })
      .then(data => {
        window.location.href = `http://localhost:3000/subscribers/${id}`; // Redirect to the specific subscriber's page
      })
      .catch(error => {
        console.error('Error fetching subscriber by ID:', error); // Log error to the console
        subscribersList.innerHTML = 'Failed to load subscriber information. Please try again later.'; // Display error message
      });
  });
});
