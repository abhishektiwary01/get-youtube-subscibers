## YouTube Subscriber Fetcher

#AlmaBetter Backend Capstone Project
YouTube Subscriber Fetcher is a web application designed to retrieve and display subscriber information from YouTube channels. This project enables users to search for subscriber details using subscriber IDs or names, providing a streamlined interface for accessing subscriber data.

# Key Features
* Fetch Subscriber Information: Retrieve details about YouTube subscribers by entering their IDs or names.
* Dynamic Data Display: View subscriber details including names and subscribed channels.
* Error Handling: Handles common errors and prompts users to enter valid input.
# Technologies Used
* Frontend: HTML, Custom CSS
* Backend: Node.js, Express.js, Mongoose
* Database: MongoDB
* APIs: Custom API for fetching subscriber data

#Installation
 To set up the project locally, follow these steps:

* Clone the repository:
  git clone <repository-url>

* Navigate to the project directory:
  cd <project-directory>

* Install dependencies:
  npm install

* Configure your environment variables and database connection in config.js.

* Start the server:
  npm start

* Open your browser and go to http://localhost:3000 to access the application.

# API Endpoints

* Fetch All Subscribers
  Endpoint: http://localhost:3000/subscribers/
  Method: GET
  Description: Retrieves a list of all subscribers.

* Fetch Subscriber by ID
  Endpoint: http://localhost:3000/subscribers/
  Method: GET
  Description: Retrieves subscriber details by their ID.

* Fetch Subscriber by Name
  Endpoint: http://localhost:3000/subscribers/name/
  Method: GET
  Description: Retrieves subscriber details by their name.

# Acknowledgements
* Tailwind CSS: For styling and responsive design.
* Express.js: For building the backend server.
* MongoDB: For managing subscriber data.

# Links
* Deployment Link: https://get-youtube-subscribers.vercel.app/

# Developed By
* Abhishek Tiwari
