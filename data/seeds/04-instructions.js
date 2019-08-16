
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {recipeId: 1, instruction: "Crack Eggs and Beat Them", step_number: 1},
        {recipeId: 1, instruction: "Heat Pan on Medium-High Heat", step_number: 2},
        {recipeId: 1, instruction: "Add Onions and Peppers to Pan and Cook for 3 Minutes", step_number: 3},
        {recipeId: 1, instruction: "Add Beaten Eggs to Pan and Cover the Pan with Lid. Cook for 2 Minutes", step_number: 4},
        {recipeId: 1, instruction: "Remove Lid and Fold the Egg in Half", step_number: 5},
        {recipeId: 1, instruction: "Put Omelette on a Plate and Add Ketchup. Enjoy!", step_number: 6},
        {recipeId: 2, instruction: "Heat Grill to High Heat", step_number: 1},
        {recipeId: 2, instruction: "Place Hot Dog on Grill. Close Lid and Cook for 2 Minutes", step_number: 2},
        {recipeId: 2, instruction: "Open Lid. Turn Hot Dog to Cook the Other Side. Open a Hot Dog Bun and Put it on The Grill. Cook for 2 Minutes", step_number: 3},
        {recipeId: 2, instruction: "Remove Bun from Grill. Put Hot Dog in Bun. Add Ketchup. Enjoy!", step_number: 4}
      ]);
    });
};
