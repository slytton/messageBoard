# Message Board #

---

Production App: [https://message-board-sl.firebaseapp.com/](https://message-board-sl.firebaseapp.com/)

API: [https://message-board-sl.herokuapp.com/api/v1](https://message-board-sl.herokuapp.com)

-----

## Install Locally ##


From the project root:
```
npm install
createdb message-board
knex --knexfile ./server/knexfile.js migrate:latest
knex --knexfile ./server/knexfile.js seed:run
echo JWT_SECRET=$(node -e "require('crypto').randomBytes(48, function(ex, buf) { console.log(buf.toString('hex')) });") >> .env
echo ENVIRONMENT=development >> .env
echo .env >> .gitignore
nodemon
open index.html
```
