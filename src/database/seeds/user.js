exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          email: "somuchtosay@gmail.com",
          phoneNumber: "+223525325",
          firstName: "Noah",
          // lastName: "Kahan",
          role: "Artist",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);
    });
};
