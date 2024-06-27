# Setting up Server Directory

1. React.js + Node.js + MongoDB Database.
2. Set up the UI of Frontend -> Login, Register, Write, SingleView Page, Blogs Page.
3. Set up the Server side by connecting it to PORT & use express to parse incoming middle requests.
4. Create a database from MongoDB. 
5. Create mongoose models for user & blog by adding attributes to each. 
6. Set up test routes for post such that a response is sent to the backend server PORT.
7. Authenticate using JavaScript Web Token, BcryptJS Hashing & Cookies

JWT is used to authenticate users by generating a private key for each and that provides users option of signing in or logging in.

Bcrypt Hashing uses a salt variable to hash passwords given number of times so that it will be difficult for the attackers to get access to the passwords. It stores passwords in a secure manner.

8. Import userModel to connect in authorization & check for existing user. If user exists, then use Bcrypt to hash the password & if not then create a new user. 

