//const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');
const config = require('./utils/config');

// dotenv.config({ path: './config.env' });

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );

mongoose
  .connect(config.MONGO_URI)
  .then(() => console.log('DB connection successful'))
  .catch(err => console.log('Error Connecting to DB:', err));

const port = config.PORT || 3000;

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on port ${port}`);
});
