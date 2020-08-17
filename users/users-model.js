const db = require("../database/dbConfig.js");

module.exports = {
  add,
  getUsers,
  remove,
};
function userToBody(user) {
  const result = {
    ...user,
  };
  return result;
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return findById(id);
  } catch (error) {
    throw error;
  }
}
function remove(id) {
  return db("users").where({ id }).delete();
}

function findById(id) {
  return db("users").select("id", "username").where({ id }).first();
}
function getUsers(id) {
  let query = db("users").select("id", "username");

  if (id) {
    return query
      .where("id", id)
      .first()
      .then((user) => {
        if (user) {
          return userToBody(user);
        } else {
          return null;
        }
      });
  } else {
    return query.then((users) => {
      return users.map((user) => userToBody(user));
    });
  }
}
