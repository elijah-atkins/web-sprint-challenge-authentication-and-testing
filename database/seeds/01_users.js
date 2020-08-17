exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "Moss", password: "password"
    },
    {
      username: "Roy", password: "password"
    },
  ];

  return knex("users").insert(users);
  //   .then(() => console.log("\n== Seed data for projects table added. ==\n"));
};