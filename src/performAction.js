"use strict";
const { stdin, stdout } = process;
stdin.setRawMode(true);
stdin.setEncoding("utf8");

const printQuestion = function(count, questionAnswer) {
  stdout.write(
    `\n${count + 1}=>  ${questionAnswer.question}\n${questionAnswer.options}\n`
  );
};

const isCorrectAnswer = function(questionAnswer, userAnswer) {
  return userAnswer == questionAnswer.answer;
};

const getUserData = function(questionAndAnswers) {
  let count = 0;
  let score = 0;
  const processNextQuestion = function(data) {
    clearTimeout(timer);
    let userAnswer = data.trim();
    if (isCorrectAnswer(questionAndAnswers[count], userAnswer)) {
      score = score + 1;
    }
    count++;
    if (count < questionAndAnswers.length) {
      printQuestion(count, questionAndAnswers[count]);
      timer = setTimeout(() => processNextQuestion(""), 10000);
    } else {
      stdout.write(`score:${score}\n`);
      process.exit();
    }
  };
  printQuestion(0, questionAndAnswers[0]);
  stdin.on("data", processNextQuestion);
  let timer = setTimeout(() => processNextQuestion(""), 10000);
};

process.on("exit", () => stdout.write("Game Over"));

exports.getUserData = getUserData;
