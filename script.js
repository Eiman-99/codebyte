const addChallenge = document.querySelector(".add-btn");
const challengeForm = document.getElementById("challenge-form");
const closeBtn = document.getElementById('close-btn');

const onClick = () => {
    challengeForm.style.display="block";
}

const closeForm = () => {
    challengeForm.style.display="none";
}

addChallenge.addEventListener('click',onClick);
closeBtn.addEventListener('click',closeForm);