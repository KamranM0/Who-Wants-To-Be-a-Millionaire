export function getRandomQuestion(questionsArr, difficulty) {
  let selectedArray;
  switch (difficulty) {
    case 1:
      selectedArray = questionsArr.filter((el) => el.difficulty === 1);
      break;
    case 2:
      selectedArray = questionsArr.filter((el) => el.difficulty === 2);
      break;
    case 3:
      selectedArray = questionsArr.filter((el) => el.difficulty === 3);
      break;
    default:
      throw new Error("Undefined difficulty");
  }

  const arrLength = selectedArray.length;
  const selectedQuestion = selectedArray[Math.floor(Math.random() * arrLength)];
  return selectedQuestion;
}
export function shuffleArray(array, correct) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index between 0 and i (inclusive)
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  const index = array.findIndex((el) => el === correct);
  return { array, index };
}
export function generatePercentage(index) {
  const percentages = [];
  let remainingPercentage = 100;

  for (let i = 0; i < 3; i++) {
    // Generate a random percentage between 1 and the remaining percentage
    const currentPercentage = Math.round(Math.random() * remainingPercentage);
    percentages.push(currentPercentage);
    remainingPercentage -= currentPercentage;
  }

  // The last percentage is whatever remains to sum up to 100%
  percentages.push(remainingPercentage);
  console.log(percentages);
  //[10,40,20,30]
  const maxElement = Math.max(...percentages);
  const maxIndex = percentages.findIndex((el) => el === maxElement);
  const newPercentages = swapElements(percentages, maxIndex, index);
  console.log(newPercentages);
  return newPercentages;
}
function swapElements(array, index1, index2) {
  // Check if indexes are within bounds
  if (
    index1 < 0 ||
    index1 >= array.length ||
    index2 < 0 ||
    index2 >= array.length
  ) {
    return array; // Return the array unchanged if indexes are out of bounds
  }

  // Swap elements using array destructuring
  [array[index1], array[index2]] = [array[index2], array[index1]];

  return array;
}
export function selectTwo(givenArray) {
  const { array: answers } = shuffleArray([...givenArray]);
  const selectedAnswers = [answers[0], answers[1]];
  console.log(selectedAnswers);
  return selectedAnswers;
}
