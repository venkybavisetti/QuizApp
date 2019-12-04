const getUserData = require("./src/performAction.js").getUserData;
const questionAndAnswers = require("./dataFiles/questionsAndAnswers.json");

const main = function() {
  console.log("welcome to my game");
  getUserData(questionAndAnswers);
};

main();
