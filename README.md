# Blog-management

## 1. Project Name: Stationary-Shop

## 2. Project Title: This is Stationary shop project that controls all work related to stationary shop.

## 3. Key Features:

- User can completed his resgistration using necessary infromation.
- User can login by using email and password.
- User can create an blog using necessary information.
- User can update his specific blog by unique id.
- User can delete his specific blog by unique id.
- Users can shows all blog without login into website.
- Admin can block any user by using unique id.
- Admin can delete any blog by using unique id.

## 4. Backend Technology Used:

- Typescript
- Express Js
- Mongoose
- MongoDB

## 5. How to Install and Run the Project:

### 1. Must be ensure the following prerequisites are already installed in your computer

- Node.js (v16 or later)
- npm (comes with Node.js) or yarn
- MongoDB (local or cloud-based)

### 2. Clone the Repository

Run the following command in your terminal to clone the repository:

```javascript
git clone https://github.com/Apurbopaul131/Blog-management-server.git
```

### 3. Navigate to the Project Directory

Run the following command to by adding expected directory name:

```javascript
cd your-repo-name
```

### 4. Install Dependencies

Install the required dependencies using npm or yarn:

```javascript
npm install
// or
yarn install
```

### 5. Set Up Environment Variables

Create a .env file in the root directory of the project and add the following environment variables to configure your application:

```javascript
//.env
PORT:5000
DATABASE_URL: mongodb+srv://<db_username>:<db_password>@newmission.cmtjh.mongodb.net/?retryWrites=true&w=majority&appName=Newmission

//Replace your <db_username>, <db_password> and database name.
```

### 6. Start MongoDB

Make sure your MongoDB instance is running:

- If running locally, start MongoDB with:

```javascript
mongod;
```

- If using a cloud-based database like MongoDB Atlas ensure your connection string in .env is correctly configured.

### 7. Run the Project

```javascript
//development mode
npm run start:dev
//production mode
npm run start:prod
```

### 8. Access the API

Once the server is running, you can access the API at:

```javascript
http://localhost:3000
```

### 9. Test the Api using postman or Api dog

- Registers a new user with the platform:

```javascript
// Method: post
http://localhost:3000/api/auth/register

//Test data:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

- Authenticates a user with their email and password and generates a JWT token:

```javascript
// Method: post
http://localhost:3000/api/auth/login

//Test data:
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

- Logged-in user can create blog by providing a title and content:

```javascript
//Must be provide JWT token into header
Authorization: Bearer <token>
// Method: post
http://localhost:3000/api/blogs

//Test data:
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```
