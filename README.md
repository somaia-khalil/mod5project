# mod5project
An interactive shopping cart for crowd-based grocery deliveries with a barcode scanner. Please check for real life Demo :
- Final Project - Shopping Cart
 - Two week solo project
 - Uses decoupled architecture: React frontend and Ruby backend with Rest-API
 - Frontend:
  - Uses Bootstrap and CSS for styling
  - React Owl Carousel for the sliding banner (JavaScript library for automatic image changes with dynamic load feature)
  - Frontend Logic:
   - Redux for state handling (login, logout, add and remove products to cart, etc.)
   - Uses JWT for authentication (Web Tokens are the state-of-the-art approach for API-based authentication in apps and web applications alike)
   - Persisting state (e.g., shopping cart contents, tokens, etc.) with localStorage
  - Barcode-based product search:
   - QuaggaJS library (performs webcam-based image recognition to read barcodes)
   - User clicks the search button to open a modal box with an HTML5 canvas
   - QuaggaJS initialization function is called
   - The webcam is accessed (if user permits) / Note: This requires HTTPS!
   - Once the library recognizes a barcode, a box is drawn on the corresponding area of the canvas (all handled by QuaggaJS)
   - A callback triggers a query to the backend API to fetch the corresponding product details
 - Backend:
  - Uses complex database relationships in ActiveRecord / PostgreSQL
  - The API design is based on Wegmans API (providing real information about locations, products, prices and availability of groceries)
  - Challenges:
   - Nested categories with string-based primary keys (id = "cat1-cat2-cat3")
   - Scraping of massive data (over 200 stores with hundreds of categories/sub-categories, offering hundreds of products each)
   ![]("RbbitCart- project - ERM.jpg")
