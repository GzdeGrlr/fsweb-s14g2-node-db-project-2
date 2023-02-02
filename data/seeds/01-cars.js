// ESNEK
exports.seed = async function (knex) {
  await knex("cars").truncate();
  await knex("cars").insert([
    {
      vin: "abcgd",
      make: "Audi",
      model: "RS 5",
      mileage: 1000,
      title: "clean",
      transmission: "manual",
    },
    { vin: "abcgklkl", make: "Peugeot", model: "3008", mileage: 1200 },
  ]);
};
