const calculateAnswers = () => {
  console.log(selected);

  let correctAnswers = [];
  let wrongAnswers = "";
  let totalMath = 0;

  let arr = [];

  if (window.location.href.includes("ceatm0")) {
    arr = ceatm1.math;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < selected.math.length; j++) {
      if (
        selected.math[j].number == ceatm1.math[i].number &&
        selected.math[j].value == ceatm1.math[i].value
      ) {
        correctAnswers.push(i + 1);
        totalMath = correctAnswers.length;
      } else {
        wrongAnswers = 60 - totalMath;
      }
    }
  }

  console.log("Правильные ответы: ", correctAnswers);
  console.log("Неправильные ответы: ", wrongAnswers);

  pointsCalculation(totalMath, 0, 0);
};

const pointsCalculation = (totalMath, totalAdp, totalRussian) => {
  const pointsMath = (totalMath * 1.12).toFixed(1);
  const pointsAdp = (totalAdp * 2).toFixed(1);
  const pointsRussian = (totalRussian * 1.9).toFixed(1);
  const totalPoints = (
    parseFloat(pointsMath) +
    parseFloat(pointsAdp) +
    parseFloat(pointsRussian)
  ).toFixed(1);

  alert(`Ваш балл:${totalPoints}`);
};
