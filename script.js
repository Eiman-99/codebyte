// Create Challenge Model (DONE)
// Prepare data instances (DONE)
// Create View blueprint (DONE)
// Inject data to the container (DONE)

// Create a better way of handling the display of tags (DONE)
// Revise localStorage (DONE)
// Fetch the data from the local storage instead of the current challenges array. (Using standard functions) (DONE)
// Fetch the data from the local storage instead of the current challenges array. (Using Challenge class methods) (DONE)
// Inform the user when no challenges are found in the local storage. (DONE)

import Challenge from './Challenge.js';

const challengesContainer = document.getElementById('challenges-container');

// localStorage.setItem('challenges', JSON.stringify([{ "id": 2, "name": "Reverse a String", "description": "Write a function that takes a string as input and returns the string reversed.", "difficulty": "Easy", "tags": ["fundamentals"], "instructions": "Write a function named reverseString that takes a string as an argument and returns the reversed string.", "starterCode": "function reverseString(str) {\n\t// Write your code here\n}", "testCases": [{ "input": "hello", "output": "olleh" }, { "input": "world", "output": "dlrow" }], "solution": "function reverseString(str) {\n\treturn str.split('').reverse().join('');\n}" }, { "id": 2, "name": "Find the Missing Number", "description": "Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.", "difficulty": "Medium", "tags": ["arrays", "math", "numbers"], "instructions": "Write a function named missingNumber that takes an array of integers as an argument and returns the missing number.", "starterCode": "function missingNumber(nums) {\n\t// Write your code here\n}", "testCases": [{ "input": [3, 0, 1], "output": 2 }, { "input": [9, 6, 4, 2, 3, 5, 7, 0, 1], "output": 8 }], "solution": "function missingNumber(nums) {\n\tconst n = nums.length;\n\tconst totalSum = (n * (n + 1)) / 2;\n\tconst arraySum = nums.reduce((acc, curr) => acc + curr, 0);\n\treturn totalSum - arraySum;\n}" }, { "id": 2, "name": "Two Sum", "description": "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.", "difficulty": "Easy", "tags": ["arrays", "hash table", "numbers", "math"], "instructions": "Write a function named twoSum that takes an array of integers and a target integer as arguments and returns an array containing the indices of the two numbers such that they add up to the target.", "starterCode": "function twoSum(nums, target) {\n\t// Write your code here\n}", "testCases": [{ "input": { "nums": [2, 7, 11, 15], "target": 9 }, "output": [0, 1] }, { "input": { "nums": [3, 2, 4], "target": 6 }, "output": [1, 2] }], "solution": "function twoSum(nums, target) {\n\tconst map = new Map();\n\tfor (let i = 0; i < nums.length; i++) {\n\t\tconst complement = target - nums[i];\n\t\tif (map.has(complement)) {\n\t\t\treturn [map.get(complement), i];\n\t\t}\n\t\tmap.set(nums[i], i);\n\t}\n}" }]));

// const challenges = JSON.parse(localStorage.getItem('challenges'));

Challenge.fetchAll((challenges) => {
  if (!challenges.length) {
    challengesContainer.innerHTML = "<h1>Sorry, No available challenges right now.</h1>";
  } else {
    challenges.forEach((challenge) => {
      challengesContainer.innerHTML += `
      <div class="card">
      <div class="card-container">
          <div class="title">
              <h6 class="func-name">${challenge.name}</h6>
              <h6 class="func-diff easy">${challenge.difficulty}</h6>
          </div>
          <div class="func-description">
              <p>${challenge.description}</p>
          </div>
          <div class="tags">
            ${challenge.tags.map((tag) => `<h6>${tag}</h6>`).join("")}
          </div>
          <a class="btn" href="#">Solve Challenge</a>
      </div>
    </div>`
    })
  }
});


const addChallenge = document.querySelector(".add-btn");
const challengeForm = document.getElementById("challenge-form");
const closeBtn = document.getElementById('close-btn');

const onClick = () => {
  challengeForm.style.display = "block";
}

const closeForm = () => {
  challengeForm.style.display = "none";
}

addChallenge.addEventListener('click', onClick);
closeBtn.addEventListener('click', closeForm);