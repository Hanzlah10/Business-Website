const mongoose = require('mongoose');

//Creating Database
main().catch(err => console.log(err));

async function main() {
  console.log("Db Started Successfully")
  await mongoose.connect('mongodb://localhost:27017/dynamic');
  
}

