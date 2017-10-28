// Clean up the code below with a single function called `personalIntroduction`
// The new code should have the exact same functionality and output.
function personalIntroduction() {
  let people =
 [
  {
    name: "Bob",
    height: "72",
    favoriteColor: "red",
  }, {
    name: "Samantha",
    height: "65",
    favoriteColor: "orange",
  }, {
    name: "Christopher",
    height: "69",
    favoriteColor: "green",
  }, {
    name: "Tamera",
    height: "63",
    favoriteColor: "blue",
  }
];
for (let i = 0, i < people.length; i++) {
   let position = people[i];
  console.log(
    "My name is " + position.name;
    string += ", and my height is " + position.height;
    string += ", and my favorite color is " + position.favoriteColor;
  )
}
personalIntroduction();
