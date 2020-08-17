const db = require("../database/dbConfig.js");

module.exports = {
  add,
  getUsers,
  remove,
  findBy
};
function userToBody(user) {
  const result = {
    ...user,
  };
  return result;
}
function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

async function add(user) {
  try {
    const [id] = await db("users").insert(user, "id");

    return getUsers(id);
  } catch (error) {
    throw error;
  }
}
function remove(id) {
  return db("users").where({ id }).delete();
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
