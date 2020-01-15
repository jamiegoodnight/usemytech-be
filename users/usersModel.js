const db = require("../database/dbConfig");

module.exports = {
  getUserById,
  getUsers
};

function getUserById(id) {
  return db("users")
    .where({ id })
    .first();
}

function getUsers() {
  return db("users");
}

// function get() {
//     return db("tech")
//     .leftJoin("users", "tech.user_id", "users.id")
//     .leftJoin("comments", users )
// }
