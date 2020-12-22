const $userData = document.querySelector("#user-task");
const $userForm = document.querySelector("#user-form");
const $myForm = document.querySelector("#myForm");
const $username = document.querySelector("#username");
const $email = document.querySelector("#email");
const $taskForm = document.querySelector("#task-form");
const $mytask = document.querySelector("#mytask");

$userForm.addEventListener("submit", (e) => {
  if ("block" == $myForm.style.display) {
    $myForm.style.display = "none";
  } else {
    $myForm.style.display = "block";
  }
  e.preventDefault();
});

$taskForm!=null && $taskForm.addEventListener("submit", (e) => {
  if ("block" == $mytask.style.display) {
    $mytask.style.display = "none";
  } else {
    $mytask.style.display = "block";
  }
  e.preventDefault();
});

$myForm.addEventListener("submit", (e) => {
  //DB hit to Save data
  fetch("/users", {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: $username.value, email: $email.value }), // body data type must match "Content-Type" header
  });
  let template = `<div class="user-task"><div class="user-header"><h4 class="user-title">${$username.value}</h4><ul id="task-list"></ul><form id="task-form"><button class="submitTask">ADD USER</button></form></div></div>`;
  e.preventDefault();
  $userData.insertAdjacentHTML("beforeend", template);
  // $myForm.style.display = "none";
});
