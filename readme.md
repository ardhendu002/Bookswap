<h1 align="center">SWAPVERSE</h1>

A community-driven platform where users can **swap books** with others within a 5km radius.  
The idea is simple:  
- If **User A** has Book X and wants Book Y  
- And **User B** has Book Y and wants Book X  
- They can **swap books temporarily**, read them, and return afterward.  

Each successful swap earns users **credits**, which can be used for future exchanges.  

---

## Features  

-  **Location-based book swapping** (within 5km radius)  
-  **Temporary book exchange system** (borrow → read → return)  
-  **Credit-based reward system** for each swap  
-  **Book catalog management** (add, update, remove books)  
-  **User authentication & profiles**  
-  **Geo-location powered matching system**  
-  **Notifications for swap requests & confirmations**  

---

## Tech Stack  

**Frontend:**  
- React.js  
- TailwindCSS  

**Backend:**  
- Node.js  
- Express.js  

**Database:**  
- MongoDB with Mongoose  

**Others:**  
- JWT Authentication  
- GeoLocation APIs (OpenStreetMap) 
- Haversine algorithm for nearest books 

---

## 📂 Project Structure  

```bash
SWAPVERSE/
│── server/          # Express server, APIs, Models, Controllers
│── client/         # React app (UI & components)
    │── src
        │── assets
        │── components
        │── hooks
        │── pages
        │── services
│── package.json      # Project metadata
│── README.md         # Project documentation
