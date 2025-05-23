# Blog-management

## 1. Project Name: Blog-Management App

## 2. Project Title: This is Blog-management app that controls all work related to Blog management.

## 3. Key Features:

- User can completed his resgistration using necessary infromation.
- User can login by using email and password.
- Logged-in user can create blog by providing a title and content.
- Logged-in user can update their own blog by its ID..
- Logged-in user can delete their own blog by its ID.
- Users can shows all blog with options for searching, sorting, and filtering without login into website.
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
PORT:3000
DATABASE_URL: mongodb+srv://<db_username>:<db_password>@newmission.cmtjh.mongodb.net/?retryWrites=true&w=majority&appName=Newmission
//Replace your <db_username>, <db_password> and database name.
NODE_ENV = development
JWT_ACCESS_SECRET = 5a10e571cfe9ac9f03995c6b1b9bc6d0a3b637737edaa40d84e5c349cc9f61bf
JWT_ACCESS_TOKEN_EXPIRES_IN = 10d
JWT_REFRESH_SECRET = 5822cf23bc307f6d647489e65df119ff040b5586ea5c39ae3dd65cf914a7f3b2
JWT_REFRESH_TOKEN_EXPIRES_IN = 365d
BCRYPT_SALT_ROUNDS = 12
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
//Must be provide JWT token into request header
Format: Authorization: Bearer <token>
// Method: post
http://localhost:3000/api/blogs

//Test data:
{
  "title": "My First Blog",
  "content": "This is the content of my blog."
}
```

- Logged-in user can update their own blog by its ID:

```javascript
//Must be provide JWT token into request header
Format: Authorization: Bearer <token>
// Method: patch
http://localhost:3000/api/blogs/:id

//Test data:
{
  "title": "Updated Blog Title",
  "content": "Updated content."
}
```

- Logged-in user can delete their own blog by its ID:

```javascript
//Must be provide JWT token into request header
Format: Authorization: Bearer <token>
// Method: delete
http://localhost:3000/api/blogs/:id

```

- Provides a public API to fetch all blogs with options for searching, sorting, and filtering:

```javascript
// Method: get
http://localhost:3000/api/blogs?search=technology&sortBy=createdAt&sortOrder=desc&filter=60b8f42f9c2a3c9b7cbd4f18

```

- Admin can block a user by updating the isBlocked property to true:

```javascript
//Must be provide JWT token into request header
Format: Authorization: Bearer <admin_token>
// Method: patch
http://localhost:3000/api/admin/users/:userId/block

```

- Admin can delete any blog by its ID.:

```javascript
//Must be provide JWT token into request header
Format: Authorization: Bearer <admin_token>
// Method: delete
http://localhost:3000/api/admin/blogs/:id

```

## 6. Project Live link: https://blog-management-server.vercel.app
