Product Details Application with React and Express
This project demonstrates a React and Express application designed to display product details dynamically. The application retrieves product data from a server and showcases detailed product information, along with an interactive image gallery. The architecture includes a Node.js backend serving a React frontend, making it a great example of a full-stack MERN-like workflow.

Features
Backend (Express.js)
Product Data API:
Endpoint to fetch all products: GET /
Endpoint to fetch a product by ID: GET /product/:id
Data Handling:
JSON-based product data storage (data.json).
Error handling for non-existent product requests.
Middleware:
cors for Cross-Origin Resource Sharing.
express.json() for parsing JSON requests.
Frontend (React)
Dynamic Routing:
Fetch product details dynamically based on id from the URL using React Router.
Error Handling:
Graceful error messages for invalid or missing products.
Loading indicators while data is being fetched.
Product Details:
Title, description, price, discount, rating, stock, brand, and category.
Fully responsive layout for enhanced user experience.
Interactive Product Gallery:
The ProductGallery component displays product images, allowing seamless browsing.
Technologies Used
Frontend: React, React Router, CSS (for styling and responsiveness).
Backend: Node.js, Express.js.
Others: Fetch API for making HTTP requests, JSON for data storage.