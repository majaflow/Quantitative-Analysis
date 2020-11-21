const gradesList = document.getElementById("grades");
const addGradeButton = document.getElementById("addGrade");
const loginErrorMsg = document.getElementById("login-error-msg");
const closeBtn = document.getElementById("grade-form-submit")

addGradeButton.addEventListener("click", (e) => {
    console.log("button pressed")
    modal.style.display = "block";
})

closeBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkInputs()
  modal.style.display = "none"
  return false
})

function checkInputs() {
  const name = gradeForm.studentName.value;
  const score = gradeForm.grade.value;
  var grade = Number(score)

  if (grade >= 0 && grade <= 100) {
      var studentname = document.createElement("p")
      name.innerHTML = `Name: ${name} Grade: ${score}`
      gradesList.appendChild(studentname)
  } else {
    loginErrorMsg.innerHTML = "Graded Score is not a number between 0 and 100"
    loginErrorMsg.style.opacity = 1;
  }
}